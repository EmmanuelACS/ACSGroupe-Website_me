// Bouton d'action icône seule (Modifier / Supprimer / Monter / Descendre),
// répété à l'identique dans les tableaux et cartes de tous les modules CRUD
// du back-office (Staff, Gallery, News, Slideshow).
const VARIANT_CLASSES = {
    default: 'text-slate-500 hover:text-red-600',
    move: 'text-slate-400 hover:text-slate-900',
};

export default function AdminIconButton({ icon, label, onClick, variant = 'default' }) {
    return (
        <button type="button" onClick={onClick} aria-label={label} className={`${VARIANT_CLASSES[variant]} cursor-pointer`}>
            <i className={`fas ${icon}`}></i>
        </button>
    );
}
