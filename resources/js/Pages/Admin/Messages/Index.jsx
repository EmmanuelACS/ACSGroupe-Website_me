import AdminLayout from '@/Layouts/AdminLayout';
import AdminPageHeader from '@/Components/Admin/AdminPageHeader';
import { router } from '@inertiajs/react';

const SOURCE_LABELS = {
    contact: { label: 'Formulaire de contact', icon: 'fa-envelope-open-text' },
    chatbot: { label: 'Chatbot', icon: 'fa-comment-dots' },
};

export default function MessagesIndex({ messages }) {
    const toggleRead = (message) => {
        router.put(route('admin.messages.update', message.id), { is_read: !message.is_read }, { preserveScroll: true });
    };

    const destroy = (message) => {
        if (!confirm('Supprimer ce message ?')) return;
        router.delete(route('admin.messages.destroy', message.id));
    };

    return (
        <AdminLayout title="Messages & Demandes">
            <AdminPageHeader
                description={`${messages.length} message${messages.length > 1 ? 's' : ''} reçu${messages.length > 1 ? 's' : ''} via le formulaire de contact et le Chatbot.`}
            />

            <div className="flex flex-col gap-4">
                {messages.map((message) => {
                    const source = SOURCE_LABELS[message.source] ?? SOURCE_LABELS.contact;
                    return (
                        <div
                            key={message.id}
                            className={`rounded-2xl border p-6 shadow-sm transition-colors duration-200 ${
                                message.is_read ? 'border-slate-200 bg-white' : 'border-red-200 bg-red-50'
                            }`}
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-600">
                                        <i className={`fas ${source.icon}`}></i>
                                        {source.label}
                                    </div>
                                    <p className="mt-1.5 text-base font-semibold text-slate-900">{message.first_name || 'Anonyme'}</p>
                                    {message.email && <p className="text-sm text-slate-500">{message.email}</p>}
                                    {message.phone && <p className="text-sm text-slate-500">{message.phone}</p>}
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => toggleRead(message)}
                                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-red-500/60 hover:text-red-600 cursor-pointer"
                                    >
                                        {message.is_read ? 'Marquer non lu' : 'Marquer lu'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => destroy(message)}
                                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-red-500/60 hover:text-red-600 cursor-pointer"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="mt-4 text-base text-slate-700 break-words whitespace-pre-line">{message.message}</p>
                            <p className="mt-4 text-sm text-slate-400">{new Date(message.created_at).toLocaleString('fr-FR')}</p>
                        </div>
                    );
                })}

                {messages.length === 0 && <p className="text-base text-slate-400">Aucun message pour le moment.</p>}
            </div>
        </AdminLayout>
    );
}
