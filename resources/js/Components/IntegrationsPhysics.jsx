import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

// Logos officiels multicolores (Devicon, variante "-original" — la charte
// graphique exacte de chaque marque : Python bicolore, tasse Java, Laravel
// rouge, etc.), servis depuis jsdelivr. Tous les 20 slugs sont vérifiés
// disponibles ; aucun monogramme de repli n'est nécessaire.
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const TECHS = [
    { key: 'react', label: 'React', logo: 'react' },
    { key: 'vue', label: 'Vue', logo: 'vuejs' },
    { key: 'node', label: 'Node.js', logo: 'nodejs' },
    { key: 'python', label: 'Python', logo: 'python' },
    { key: 'laravel', label: 'Laravel', logo: 'laravel' },
    { key: 'typescript', label: 'TypeScript', logo: 'typescript' },
    { key: 'tailwind', label: 'Tailwind CSS', logo: 'tailwindcss' },
    { key: 'docker', label: 'Docker', logo: 'docker' },
    { key: 'nextjs', label: 'Next.js', logo: 'nextjs' },
    { key: 'go', label: 'Go', logo: 'go' },
    { key: 'php', label: 'PHP', logo: 'php' },
    { key: 'postgresql', label: 'PostgreSQL', logo: 'postgresql' },
    { key: 'cpp', label: 'C++', logo: 'cplusplus' },
    { key: 'csharp', label: 'C#', logo: 'csharp' },
    { key: 'java', label: 'Java', logo: 'java' },
    { key: 'swift', label: 'Swift', logo: 'swift' },
    { key: 'kotlin', label: 'Kotlin', logo: 'kotlin' },
    { key: 'flutter', label: 'Flutter', logo: 'flutter' },
    { key: 'ruby', label: 'Ruby', logo: 'ruby' },
    { key: 'rust', label: 'Rust', logo: 'rust' },
];

const MAX_BADGE_SIZE = 84;

// 10 colonnes de badges à 84px supposent un conteneur large (desktop) ; sur
// mobile ça écrase/chevauche les badges. On dérive taille et colonnes de la
// largeur du VIEWPORT (pas du conteneur, qui peut être temporairement plus
// étroit que l'écran pendant le layout initial) : garantit la taille pleine
// dès 1024px (lg) sur tout PC/desktop, même fenêtre non maximisée.
function computeLayout(viewportWidth) {
    if (viewportWidth < 480) return { badgeSize: 40, cols: 5 };
    if (viewportWidth < 768) return { badgeSize: 52, cols: 6 };
    if (viewportWidth < 1024) return { badgeSize: 68, cols: 8 };
    return { badgeSize: MAX_BADGE_SIZE, cols: 10 };
}

// Bac à sable physique (Matter.js) : 20 logos-badges circulaires, tous
// instanciés EN HAUT du conteneur et suspendus (gravité nulle) tant que la
// section n'est pas visible à l'écran (IntersectionObserver). Important : les
// corps restent DYNAMIQUES dès le départ (jamais `isStatic`) — un corps
// statique a une masse infinie et ne peut PAS être saisi par MouseConstraint,
// c'était la cause du drag cassé. On les garde immobiles avant la chute en
// annulant juste la gravité et leur vitesse à chaque frame, ce qui laisse le
// grab/drag fonctionner à tout moment, y compris avant que la chute démarre.
// Dès que la section apparaît, la gravité s'active et chaque badge reçoit une
// petite impulsion décalée dans le temps pour une chute en cascade plutôt
// qu'un lâcher groupé. Les corps DOM (divs) sont resynchronisés à chaque
// frame sur position/rotation via transform ; Matter.Render n'est jamais
// utilisé (on garde nos propres icônes/badges blancs).
export default function IntegrationsPhysics() {
    const containerRef = useRef(null);
    const badgeRefs = useRef([]);
    const [badgeSize, setBadgeSize] = useState(MAX_BADGE_SIZE);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

        let width = container.clientWidth;
        let height = container.clientHeight;

        const { badgeSize: BADGE_SIZE, cols } = computeLayout(window.innerWidth);
        setBadgeSize(BADGE_SIZE);

        const engine = Engine.create();
        engine.gravity.y = 0; // suspendu : pas de chute avant l'arrivée à la section

        const wallOptions = { isStatic: true, restitution: 0.6, friction: 0.1 };
        let walls = [
            Bodies.rectangle(width / 2, height + 30, width + 120, 60, wallOptions), // sol
            Bodies.rectangle(width / 2, -30, width + 120, 60, wallOptions), // plafond
            Bodies.rectangle(-30, height / 2, 60, height + 120, wallOptions), // gauche
            Bodies.rectangle(width + 30, height / 2, 60, height + 120, wallOptions), // droite
        ];

        // Disposition initiale TOUT EN HAUT du conteneur, sur plusieurs rangées
        // serrées réparties sur toute la largeur (20 badges) ; `cols` et
        // `BADGE_SIZE` viennent de computeLayout() ci-dessus (responsive).
        const marginX = Math.max(width * 0.05, BADGE_SIZE * 0.6);
        const usableW = width - marginX * 2;
        const cellW = usableW / cols;
        const topOffset = BADGE_SIZE * 0.8;
        const rowGap = BADGE_SIZE * 1.05;

        const bodies = TECHS.map((tech, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = marginX + cellW * (col + 0.5) + (Math.random() - 0.5) * cellW * 0.2;
            const y = topOffset + row * rowGap + (Math.random() - 0.5) * 10;
            return Bodies.circle(x, y, BADGE_SIZE / 2, {
                restitution: 0.55,
                friction: 0.15,
                frictionAir: 0.012,
                density: 0.002,
            });
        });

        Composite.add(engine.world, [...walls, ...bodies]);

        // IMPORTANT : ne jamais régler mouse.pixelRatio ici. Nos corps sont
        // synchronisés en pixels CSS 1:1 avec les divs DOM (pas de <canvas>
        // mis à l'échelle) — appliquer devicePixelRatio désaligne complètement
        // les coordonnées de la souris par rapport aux badges affichés et rend
        // le drag totalement impossible sur tout écran HiDPI (Retina, etc.).
        // Créé AVANT holdStill/triggerFall ci-dessous, car holdStill a besoin
        // de connaître le corps actuellement saisi (mouseConstraint.body) pour
        // ne jamais lui couper sa vitesse pendant un drag.
        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.35, damping: 0.15, render: { visible: false } },
        });
        Composite.add(engine.world, mouseConstraint);

        // Empêche la page de scroller quand on drag un badge au doigt (touch).
        mouse.element.removeEventListener('wheel', mouse.mousewheel);

        // Tant que la chute n'est pas déclenchée, on neutralise toute vitesse
        // résiduelle à chaque frame pour garder les badges bien suspendus en
        // haut (sans jamais les rendre statiques, donc toujours saisissables
        // et déplaçables à la souris dès le chargement). Le corps actuellement
        // saisi par l'utilisateur (mouseConstraint.body) est explicitement
        // exclu pour ne jamais entraver un drag en cours.
        let hasFallen = false;
        const holdStill = () => {
            if (hasFallen) return;
            bodies.forEach((body) => {
                if (body === mouseConstraint.body) return;
                Body.setVelocity(body, { x: body.velocity.x * 0.8, y: body.velocity.y * 0.8 });
            });
        };
        Events.on(engine, 'beforeUpdate', holdStill);

        // Déclenche la chute une seule fois, dès que la section devient
        // visible à l'écran : active la gravité et lâche chaque badge avec un
        // léger délai aléatoire pour un effet de cascade fluide et naturel.
        const fallTimeouts = [];
        const triggerFall = () => {
            if (hasFallen) return;
            hasFallen = true;
            Events.off(engine, 'beforeUpdate', holdStill);
            engine.gravity.y = 1.2;
            bodies.forEach((body, i) => {
                const timeoutId = window.setTimeout(() => {
                    Body.setVelocity(body, { x: (Math.random() - 0.5) * 3, y: Math.random() * 2 });
                    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
                }, Math.random() * 300 + i * 15);
                fallTimeouts.push(timeoutId);
            });
        };
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    triggerFall();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(container);

        // Section responsive : les 4 murs statiques sont reconstruits à la taille
        // actuelle du conteneur pour que le confinement reste strict après un
        // redimensionnement (rotation mobile, resize fenêtre...).
        const handleResize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            Composite.remove(engine.world, walls);
            walls = [
                Bodies.rectangle(width / 2, height + 30, width + 120, 60, wallOptions),
                Bodies.rectangle(width / 2, -30, width + 120, 60, wallOptions),
                Bodies.rectangle(-30, height / 2, 60, height + 120, wallOptions),
                Bodies.rectangle(width + 30, height / 2, 60, height + 120, wallOptions),
            ];
            Composite.add(engine.world, walls);
        };
        window.addEventListener('resize', handleResize);

        const runner = Runner.create();
        Runner.run(runner, engine);

        let frameId;
        const sync = () => {
            bodies.forEach((body, i) => {
                const el = badgeRefs.current[i];
                if (!el) return;
                el.style.transform = `translate(${body.position.x - BADGE_SIZE / 2}px, ${body.position.y - BADGE_SIZE / 2}px) rotate(${body.angle}rad)`;
            });
            frameId = requestAnimationFrame(sync);
        };
        frameId = requestAnimationFrame(sync);

        Events.on(engine, 'afterUpdate', () => {
            bodies.forEach((body) => {
                const r = BADGE_SIZE / 2;
                const x = Math.min(Math.max(body.position.x, r), width - r);
                const y = Math.min(Math.max(body.position.y, r), height - r);
                if (x !== body.position.x || y !== body.position.y) {
                    Body.setPosition(body, { x, y });
                }
            });
        });

        return () => {
            observer.disconnect();
            fallTimeouts.forEach((id) => window.clearTimeout(id));
            window.removeEventListener('resize', handleResize);
            Events.off(engine, 'beforeUpdate', holdStill);
            cancelAnimationFrame(frameId);
            Runner.stop(runner);
            Composite.clear(engine.world, false);
            Engine.clear(engine);
            mouse.element && Mouse.clearSourceEvents && Mouse.clearSourceEvents(mouse);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden touch-none select-none">
            {TECHS.map((tech, i) => (
                <div
                    key={tech.key}
                    ref={(el) => (badgeRefs.current[i] = el)}
                    className="absolute top-0 left-0 flex items-center justify-center rounded-[15px] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.4)] cursor-grab active:cursor-grabbing will-change-transform"
                    style={{ width: badgeSize, height: badgeSize }}
                    title={tech.label}
                    aria-label={tech.label}
                >
                    <img
                        src={`${DEVICON_BASE}/${tech.logo}/${tech.logo}-original.svg`}
                        alt={tech.label}
                        loading="lazy"
                        draggable={false}
                        className="object-contain pointer-events-none select-none"
                        style={{ width: Math.round(badgeSize * 0.82), height: Math.round(badgeSize * 0.82) }}
                    />
                </div>
            ))}
        </div>
    );
}
