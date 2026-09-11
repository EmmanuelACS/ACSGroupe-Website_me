import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

const INPUT_CLASS =
    'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

const LABEL_CLASS = 'mb-2 block text-sm font-medium text-slate-600';

const emptyForm = { title: '', excerpt: '', author: '', external_link: '', image: null, is_published: true };

export default function NewsIndex({ articles }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const { data, setData, post, put, processing, errors, reset } = useForm(emptyForm);

    const openCreate = () => {
        setEditing(null);
        reset();
        setModalOpen(true);
    };

    const openEdit = (article) => {
        setEditing(article);
        setData({
            title: article.title,
            excerpt: article.excerpt ?? '',
            author: article.author ?? '',
            external_link: article.external_link ?? '',
            image: null,
            is_published: article.is_published,
        });
        setModalOpen(true);
    };

    const submit = (e) => {
        e.preventDefault();
        const options = { forceFormData: true, onSuccess: () => setModalOpen(false) };

        if (editing) {
            put(route('admin.news.update', editing.id), options);
        } else {
            post(route('admin.news.store'), options);
        }
    };

    const destroy = (article) => {
        if (!confirm(`Supprimer « ${article.title} » ?`)) return;
        router.delete(route('admin.news.destroy', article.id));
    };

    return (
        <AdminLayout title="Actualités IT">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-base text-slate-500">{articles.length} article{articles.length > 1 ? 's' : ''} pour la section « Latest Thinking ».</p>
                <button
                    type="button"
                    onClick={openCreate}
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 cursor-pointer"
                >
                    <i className="fas fa-plus"></i>
                    Publier un article
                </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left text-base">
                    <thead className="bg-slate-50 text-sm font-semibold uppercase tracking-wide text-slate-500">
                        <tr>
                            <th className="px-6 py-4">Visuel</th>
                            <th className="px-6 py-4">Titre</th>
                            <th className="px-6 py-4">Auteur</th>
                            <th className="px-6 py-4">Statut</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {articles.map((article) => (
                            <tr key={article.id}>
                                <td className="px-6 py-4">
                                    <img src={article.image} alt={article.title} className="h-14 w-24 rounded-lg object-cover" />
                                </td>
                                <td className="max-w-xs px-6 py-4 font-semibold text-slate-900 break-words">{article.title}</td>
                                <td className="px-6 py-4 text-red-600 font-semibold">{article.author}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
                                            article.is_published ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'
                                        }`}
                                    >
                                        {article.is_published ? 'Publié' : 'Brouillon'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-3">
                                        <button type="button" onClick={() => openEdit(article)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Modifier">
                                            <i className="fas fa-pen"></i>
                                        </button>
                                        <button type="button" onClick={() => destroy(article)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Supprimer">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Modifier l'article" : 'Publier un article'}>
                <form onSubmit={submit} className="flex flex-col gap-5">
                    <div>
                        <label className={LABEL_CLASS}>Titre</label>
                        <input value={data.title} onChange={(e) => setData('title', e.target.value)} className={INPUT_CLASS} required />
                        {errors.title && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.title}</p>}
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Résumé</label>
                        <textarea value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} rows={3} className={`${INPUT_CLASS} resize-none`} />
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Auteur / Source</label>
                        <input value={data.author} onChange={(e) => setData('author', e.target.value)} className={INPUT_CLASS} />
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Lien externe (optionnel)</label>
                        <input type="url" value={data.external_link} onChange={(e) => setData('external_link', e.target.value)} className={INPUT_CLASS} placeholder="https://" />
                        {errors.external_link && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.external_link}</p>}
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Image d'illustration HD {editing && '(laisser vide pour conserver)'}</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0] ?? null)} className={INPUT_CLASS} />
                        {errors.image && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.image}</p>}
                    </div>
                    <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <input
                            type="checkbox"
                            checked={data.is_published}
                            onChange={(e) => setData('is_published', e.target.checked)}
                            className="h-4 w-4 rounded text-red-600 focus:ring-red-500"
                        />
                        Publié (visible sur le site)
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
