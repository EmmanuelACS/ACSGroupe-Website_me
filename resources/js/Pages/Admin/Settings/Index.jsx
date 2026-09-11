import AdminLayout from '@/Layouts/AdminLayout';
import AdminSubmitButton from '@/Components/Admin/AdminSubmitButton';
import { ADMIN_INPUT_CLASS, ADMIN_LABEL_CLASS } from '@/Components/Admin/formStyles';
import { useForm } from '@inertiajs/react';

const FIELD_GROUPS = [
    {
        title: 'Coordonnées de contact',
        icon: 'fa-address-card',
        fields: [
            { key: 'contact_email', label: 'Adresse email', type: 'email' },
            { key: 'contact_phone_primary', label: 'Téléphone principal', type: 'text' },
            { key: 'contact_phone_secondary', label: 'Téléphone secondaire', type: 'text' },
            { key: 'contact_address', label: 'Adresse (Abidjan)', type: 'text' },
        ],
    },
    {
        title: 'Réseaux sociaux',
        icon: 'fa-share-nodes',
        fields: [
            { key: 'social_linkedin', label: 'LinkedIn', type: 'url' },
            { key: 'social_facebook', label: 'Facebook', type: 'url' },
            { key: 'social_twitter', label: 'Twitter / X', type: 'url' },
            { key: 'social_instagram', label: 'Instagram', type: 'url' },
        ],
    },
];

export default function SettingsIndex({ settings }) {
    const { data, setData, put, processing, errors } = useForm({
        contact_email: settings.contact_email ?? '',
        contact_phone_primary: settings.contact_phone_primary ?? '',
        contact_phone_secondary: settings.contact_phone_secondary ?? '',
        contact_address: settings.contact_address ?? '',
        social_facebook: settings.social_facebook ?? '',
        social_linkedin: settings.social_linkedin ?? '',
        social_twitter: settings.social_twitter ?? '',
        social_instagram: settings.social_instagram ?? '',
        chatbot_enabled: settings.chatbot_enabled === '1',
        chatbot_welcome_message_fr: settings.chatbot_welcome_message_fr ?? '',
        chatbot_welcome_message_en: settings.chatbot_welcome_message_en ?? '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.settings.update'));
    };

    return (
        <AdminLayout title="Paramètres généraux">
            <form onSubmit={submit} className="flex flex-col gap-6">
                {FIELD_GROUPS.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-slate-900">
                            <i className={`fas ${group.icon} text-red-600`}></i>
                            {group.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {group.fields.map((field) => (
                                <div key={field.key}>
                                    <label className={ADMIN_LABEL_CLASS}>{field.label}</label>
                                    <input
                                        type={field.type}
                                        value={data[field.key]}
                                        onChange={(e) => setData(field.key, e.target.value)}
                                        className={ADMIN_INPUT_CLASS}
                                    />
                                    {errors[field.key] && <p className="mt-1.5 text-sm font-medium text-red-600">{errors[field.key]}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-slate-900">
                        <i className="fas fa-comment-dots text-red-600"></i>
                        Chatbot
                    </h2>
                    <label className="mb-4 flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <input
                            type="checkbox"
                            checked={data.chatbot_enabled}
                            onChange={(e) => setData('chatbot_enabled', e.target.checked)}
                            className="h-4 w-4 rounded text-red-600 focus:ring-red-500"
                        />
                        Activer le Chatbot sur le site
                    </label>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className={ADMIN_LABEL_CLASS}>Message d'accueil (FR)</label>
                            <textarea
                                value={data.chatbot_welcome_message_fr}
                                onChange={(e) => setData('chatbot_welcome_message_fr', e.target.value)}
                                rows={2}
                                className={`${ADMIN_INPUT_CLASS} resize-none`}
                            />
                        </div>
                        <div>
                            <label className={ADMIN_LABEL_CLASS}>Message d'accueil (EN)</label>
                            <textarea
                                value={data.chatbot_welcome_message_en}
                                onChange={(e) => setData('chatbot_welcome_message_en', e.target.value)}
                                rows={2}
                                className={`${ADMIN_INPUT_CLASS} resize-none`}
                            />
                        </div>
                    </div>
                </div>

                <AdminSubmitButton processing={processing} className="uppercase tracking-wide sm:w-auto sm:px-10 w-full">
                    {processing ? 'Enregistrement...' : 'Enregistrer les paramètres'}
                </AdminSubmitButton>
            </form>
        </AdminLayout>
    );
}
