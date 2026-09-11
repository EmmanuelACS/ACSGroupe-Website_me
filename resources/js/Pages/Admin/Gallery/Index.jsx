import AdminLayout from '@/Layouts/AdminLayout';
import AdminModal from '@/Components/Admin/AdminModal';
import AdminPageHeader from '@/Components/Admin/AdminPageHeader';
import AdminIconButton from '@/Components/Admin/AdminIconButton';
import AdminSubmitButton from '@/Components/Admin/AdminSubmitButton';
import { ADMIN_INPUT_CLASS, ADMIN_LABEL_CLASS } from '@/Components/Admin/formStyles';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

const emptyForm = { title: '', category: '', location: '', event_date: '', photo: null, show_on_home: false };

export default function GalleryIndex({ items, categories }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const { data, setData, post, put, processing, errors, reset } = useForm(emptyForm);

    const openCreate = () => {
        setEditing(null);
        reset();
        setModalOpen(true);
    };

    const openEdit = (item) => {
        setEditing(item);
        setData({
            title: item.title,
            category: item.category,
            location: item.location ?? '',
            event_date: item.event_date ?? '',
            photo: null,
            show_on_home: item.show_on_home,
        });
        setModalOpen(true);
    };

    const submit = (e) => {
        e.preventDefault();
        const options = { forceFormData: true, onSuccess: () => setModalOpen(false) };

        if (editing) {
            put(route('admin.gallery.update', editing.id), options);
        } else {
            post(route('admin.gallery.store'), options);
        }
    };

    const destroy = (item) => {
        if (!confirm(`Supprimer « ${item.title} » ?`)) return;
        router.delete(route('admin.gallery.destroy', item.id));
    };

    return (
        <AdminLayout title="Galerie & Événements">
            <AdminPageHeader
                description={`${items.length} photo${items.length > 1 ? 's' : ''} — cochez « Afficher en page d'accueil » pour l'inclure dans « Our Achievements & Key Moments ».`}
                actionLabel="Ajouter une photo"
                onAction={openCreate}
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="relative h-44 w-full">
                            <img src={item.photo} alt={item.title} className="h-full w-full object-cover" />
                            {item.show_on_home && (
                                <span className="absolute top-3 left-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold uppercase text-white">
                                    Accueil
                                </span>
                            )}
                        </div>
                        <div className="p-5">
                            <p className="text-sm font-semibold uppercase tracking-wide text-red-600">{item.category}</p>
                            <h3 className="mt-1.5 text-lg font-semibold text-slate-900 break-words">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                            <div className="mt-4 flex items-center justify-end gap-4 border-t border-slate-100 pt-4">
                                <AdminIconButton icon="fa-pen" label="Modifier" onClick={() => openEdit(item)} />
                                <AdminIconButton icon="fa-trash" label="Supprimer" onClick={() => destroy(item)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier la photo' : 'Ajouter une photo'}>
                <form onSubmit={submit} className="flex flex-col gap-5">
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Titre</label>
                        <input value={data.title} onChange={(e) => setData('title', e.target.value)} className={ADMIN_INPUT_CLASS} required />
                        {errors.title && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.title}</p>}
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Catégorie</label>
                        <select value={data.category} onChange={(e) => setData('category', e.target.value)} className={ADMIN_INPUT_CLASS} required>
                            <option value="">Sélectionner...</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        {errors.category && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.category}</p>}
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Lieu</label>
                        <input value={data.location} onChange={(e) => setData('location', e.target.value)} className={ADMIN_INPUT_CLASS} />
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Date</label>
                        <input type="date" value={data.event_date} onChange={(e) => setData('event_date', e.target.value)} className={ADMIN_INPUT_CLASS} />
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Photo {editing && '(laisser vide pour conserver)'}</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('photo', e.target.files[0] ?? null)} className={ADMIN_INPUT_CLASS} />
                        {errors.photo && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.photo}</p>}
                    </div>
                    <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <input
                            type="checkbox"
                            checked={data.show_on_home}
                            onChange={(e) => setData('show_on_home', e.target.checked)}
                            className="h-4 w-4 rounded text-red-600 focus:ring-red-500"
                        />
                        Afficher en page d'accueil (Our Achievements & Key Moments)
                    </label>

                    <AdminSubmitButton processing={processing} className="mt-2 w-full">
                        {processing ? 'Enregistrement...' : 'Enregistrer'}
                    </AdminSubmitButton>
                </form>
            </AdminModal>
        </AdminLayout>
    );
}
