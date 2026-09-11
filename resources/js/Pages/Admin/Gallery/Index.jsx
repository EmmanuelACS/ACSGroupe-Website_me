import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

const INPUT_CLASS =
    'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

const LABEL_CLASS = 'mb-2 block text-sm font-medium text-slate-600';

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
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-base text-slate-500">
                    {items.length} photo{items.length > 1 ? 's' : ''} — cochez « Afficher en page d'accueil » pour l'inclure dans « Our Achievements &
                    Key Moments ».
                </p>
                <button
                    type="button"
                    onClick={openCreate}
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 cursor-pointer"
                >
                    <i className="fas fa-plus"></i>
                    Ajouter une photo
                </button>
            </div>

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
                                <button type="button" onClick={() => openEdit(item)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Modifier">
                                    <i className="fas fa-pen"></i>
                                </button>
                                <button type="button" onClick={() => destroy(item)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Supprimer">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier la photo' : 'Ajouter une photo'}>
                <form onSubmit={submit} className="flex flex-col gap-5">
                    <div>
                        <label className={LABEL_CLASS}>Titre</label>
                        <input value={data.title} onChange={(e) => setData('title', e.target.value)} className={INPUT_CLASS} required />
                        {errors.title && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.title}</p>}
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Catégorie</label>
                        <select value={data.category} onChange={(e) => setData('category', e.target.value)} className={INPUT_CLASS} required>
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
                        <label className={LABEL_CLASS}>Lieu</label>
                        <input value={data.location} onChange={(e) => setData('location', e.target.value)} className={INPUT_CLASS} />
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Date</label>
                        <input type="date" value={data.event_date} onChange={(e) => setData('event_date', e.target.value)} className={INPUT_CLASS} />
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Photo {editing && '(laisser vide pour conserver)'}</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('photo', e.target.files[0] ?? null)} className={INPUT_CLASS} />
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

                    <button
                        type="submit"
                        disabled={processing}
                        className="mt-2 w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 disabled:opacity-50 cursor-pointer"
                    >
                        {processing ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </form>
            </Modal>
        </AdminLayout>
    );
}
