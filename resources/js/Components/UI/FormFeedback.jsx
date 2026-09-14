import { usePage } from '@inertiajs/react';

// Bandeau de retour pour les formulaires publics (Contact, ContactSection...).
// Affiche le succès UNIQUEMENT si le back-end a renvoyé un flash "success", et
// l'erreur UNIQUEMENT si des erreurs de validation sont réellement présentes —
// jamais les deux à tort, contrairement à un composant qui afficherait une
// alerte générique sans vérifier l'état réel de la réponse.
export default function FormFeedback({ errors = {}, successText, errorText }) {
    const { flash } = usePage().props;
    const hasErrors = Object.keys(errors).length > 0;
    const hasSuccess = Boolean(flash?.success);

    if (!hasErrors && !hasSuccess) return null;

    if (hasErrors) {
        return (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-4 text-sm text-red-700 dark:text-red-300">
                <i className="fas fa-circle-exclamation mt-0.5"></i>
                <span>{errorText}</span>
            </div>
        );
    }

    return (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-500/40 bg-green-500/10 px-5 py-4 text-sm text-green-700 dark:text-green-300">
            <i className="fas fa-circle-check mt-0.5"></i>
            <span>{successText}</span>
        </div>
    );
}
