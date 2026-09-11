import { Link } from '@inertiajs/react';

// Carte "flux" (projets / actualités) : structure rigide flex/grid à largeur fixe,
// fond blanc épuré, titre, ligne "par :" et description. Empilement vertical
// strict (jamais de colonnes 50/50) pour éviter toute superposition de texte
// dans les bandes défilantes de Home.jsx. Images toujours en couleurs naturelles,
// sans filtre noir et blanc. Sans `href`, la carte est un bloc neutre (non
// cliquable, aucune redirection) — utilisé par "Latest Thinking".
export function FeedCard({ href, img, alt, title, byLabel, byName, text, className = '' }) {
    const cardClassName =
        `w-[380px] sm:w-[420px] flex-shrink-0 flex flex-col justify-between p-6 bg-white border border-slate-200/80 shadow-lg rounded-2xl overflow-hidden mx-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${className}`.trim();

    const content = (
        <>
            <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-xl mb-5">
                <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-slate-900 font-bold text-lg leading-snug break-words whitespace-normal">{title}</h4>
                <h6 className="text-xs break-words whitespace-normal">
                    <span className="text-slate-400">{byLabel}</span> <span className="text-red-600 font-semibold">{byName}</span>
                </h6>
                <p className="text-slate-600 text-sm leading-relaxed break-words whitespace-normal">{text}</p>
            </div>
        </>
    );

    if (!href) {
        return <div className={cardClassName}>{content}</div>;
    }

    return (
        <Link href={href} className={cardClassName}>
            {content}
        </Link>
    );
}

// Carte "galerie" : photo pleine largeur en priorité, badge catégorie, légende sobre
// avec titre affiché en entier (sans troncature) sous la photo. Utilisée par Gallery.jsx.
export function GalleryCard({ src, title, category, location }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10">
            <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                    src={src}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover rounded-t-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wide shadow-[0_0_12px_rgba(220,38,38,0.5)]">
                    {category}
                </span>
            </div>
            <div className="px-4 py-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white break-words whitespace-normal">{title}</h4>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                    <i className="fas fa-map-marker-alt text-red-600"></i>
                    {location}
                </p>
            </div>
        </div>
    );
}
