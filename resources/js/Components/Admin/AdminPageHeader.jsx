// En-tête de page du back-office : ligne de description + bouton d'action
// principal (ex: "Ajouter un membre"), répétée à l'identique en haut de
// Staff, Gallery, News et Messages.
export default function AdminPageHeader({ description, actionLabel, actionIcon = 'fa-plus', onAction }) {
    return (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-base text-slate-500">{description}</p>
            {actionLabel && (
                <button
                    type="button"
                    onClick={onAction}
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 cursor-pointer"
                >
                    <i className={`fas ${actionIcon}`}></i>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
