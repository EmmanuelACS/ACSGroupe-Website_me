// Bouton de soumission de formulaire, identique dans tous les modules CRUD
// du back-office (Staff, Gallery, News, Slideshow, Settings).
const TONE_CLASSES = {
    primary: 'bg-red-600 hover:bg-red-700',
    dark: 'bg-slate-900 hover:bg-slate-800',
};

export default function AdminSubmitButton({ processing, children, tone = 'primary', className = '' }) {
    return (
        <button
            type="submit"
            disabled={processing}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 disabled:opacity-50 cursor-pointer ${TONE_CLASSES[tone]} ${className}`}
        >
            {children}
        </button>
    );
}
