import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

// Badges technologiques (icône seule, aucun libellé texte) : icône FontAwesome
// quand le glyphe existe dans le build vendorisé (public/css/plugins/font-
// awesome.min.css), sinon monogramme texte dans la couleur de marque réelle —
// jamais de faux logo approximatif.
const TECHS = [
    { key: 'react', label: 'React', icon: 'fa-react', color: '#61DAFB' },
    { key: 'vue', label: 'Vue', icon: 'fa-vuejs', color: '#42B883' },
    { key: 'node', label: 'Node.js', icon: 'fa-node-js', color: '#3C873A' },
    { key: 'python', label: 'Python', icon: 'fa-python', color: '#3776AB' },
    { key: 'laravel', label: 'Laravel', icon: 'fa-laravel', color: '#FF2D20' },
    { key: 'typescript', label: 'TypeScript', text: 'TS', color: '#3178C6' },
    { key: 'tailwind', label: 'Tailwind CSS', text: 'tw', color: '#38BDF8' },
    { key: 'docker', label: 'Docker', icon: 'fa-docker', color: '#2496ED' },
    { key: 'nextjs', label: 'Next.js', text: 'N', color: '#000000' },
    { key: 'go', label: 'Go', text: 'Go', color: '#00ADD8' },
    { key: 'php', label: 'PHP', icon: 'fa-php', color: '#777BB4' },
    { key: 'postgresql', label: 'PostgreSQL', text: 'PG', color: '#4169E1' },
    { key: 'cpp', label: 'C++', text: 'C++', color: '#00599C' },
    { key: 'csharp', label: 'C#', text: 'C#', color: '#239120' },
    { key: 'java', label: 'Java', icon: 'fa-java', color: '#5382A1' },
    { key: 'swift', label: 'Swift', text: 'Sw', color: '#FA7343' },
    { key: 'kotlin', label: 'Kotlin', text: 'Kt', color: '#7F52FF' },
    { key: 'flutter', label: 'Flutter', text: 'Fl', color: '#02569B' },
    { key: 'ruby', label: 'Ruby', text: 'Rb', color: '#CC342D' },
    { key: 'rust', label: 'Rust', text: 'Rs', color: '#CE422B' },
];

const BADGE_SIZE = 84;

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

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

        let width = container.clientWidth;
        let height = container.clientHeight;

        const engine = Engine.create();
        engine.gravity.y = 0; // suspendu : pas de chute avant l'arrivée à la section

        const wallOptions = { isStatic: true, restitution: 0.6, friction: 0.1 };
        let walls = [
            Bodies.rectangle(width / 2, height + 30, width + 120, 60, wallOptions), // sol
            Bodies.rectangle(width / 2, -30, width + 120, 60, wallOptions), // plafond
            Bodies.rectangle(-30, height / 2, 60, height + 120, wallOptions), // gauche
            Bodies.rectangle(width + 30, height / 2, 60, height + 120, wallOptions), // droite
        ];

        // Disposition initiale TOUT EN HAUT du conteneur, sur deux rangées
        // serrées réparties sur toute la largeur (20 badges).
        const cols = 10;
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
                    style={{ width: BADGE_SIZE, height: BADGE_SIZE }}
                    title={tech.label}
                    aria-label={tech.label}
                >
                    {tech.icon ? (
                        <i className={`fab ${tech.icon} text-4xl`} style={{ color: tech.color }}></i>
                    ) : (
                        <span className="text-xl font-extrabold" style={{ color: tech.color }}>
                            {tech.text}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
