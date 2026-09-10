import { Link } from '@inertiajs/react';

// Carte "flux" (projets / actualités) : visuel en niveaux de gris avec halo rouge,
// titre complet, ligne "par :" et description. Utilisée par les bandes défilantes de Home.jsx.
export function FeedCard({ href, img, alt, title, byLabel, byName, text, className = '' }) {
    return (
        <Link
            href={href}
            className={`mil-card block w-[320px] sm:w-[380px] shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 ${className}`.trim()}
        >
            <div className="mil-cover-frame overflow-hidden relative">
                <img src={img} alt={alt} loading="lazy" className="grayscale contrast-110 brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black/30 to-transparent mix-blend-multiply pointer-events-none"></div>
            </div>
            <div className="mil-description p-5">
                <div className="mil-card-title">
                    <h4 className="mil-mb-20">{title}</h4>
                    <h6>
                        {byLabel} <span className="mil-accent">{byName}</span>
                    </h6>
                </div>
                <div className="mil-card-text">
                    <p>{text}</p>
                </div>
            </div>
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
