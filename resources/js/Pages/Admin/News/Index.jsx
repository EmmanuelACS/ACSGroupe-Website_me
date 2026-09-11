import AdminLayout from '@/Layouts/AdminLayout';
import AdminModal from '@/Components/Admin/AdminModal';
import AdminPageHeader from '@/Components/Admin/AdminPageHeader';
import AdminTable from '@/Components/Admin/AdminTable';
import AdminIconButton from '@/Components/Admin/AdminIconButton';
import AdminSubmitButton from '@/Components/Admin/AdminSubmitButton';
import { ADMIN_INPUT_CLASS, ADMIN_LABEL_CLASS } from '@/Components/Admin/formStyles';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

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

    const columns = [
        { key: 'image', label: 'Visuel', render: (article) => <img src={article.image} alt={article.title} className="h-14 w-24 rounded-lg object-cover" /> },
        { key: 'title', label: 'Titre', cellClassName: 'max-w-xs font-semibold text-slate-900 break-words', render: (article) => article.title },
        { key: 'author', label: 'Auteur', cellClassName: 'text-red-600 font-semibold', render: (article) => article.author },
        {
            key: 'status',
            label: 'Statut',
            render: (article) => (
                <span
                    className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
                        article.is_published ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'
                    }`}
                >
                    {article.is_published ? 'Publié' : 'Brouillon'}
                </span>
            ),
        },
        {
            key: 'actions',
            label: 'Actions',
            align: 'right',
            render: (article) => (
                <div className="flex items-center justify-end gap-3">
                    <AdminIconButton icon="fa-pen" label="Modifier" onClick={() => openEdit(article)} />
                    <AdminIconButton icon="fa-trash" label="Supprimer" onClick={() => destroy(article)} />
                </div>
            ),
        },
    ];

    return (
        <AdminLayout title="Actualités IT">
            <AdminPageHeader
                description={`${articles.length} article${articles.length > 1 ? 's' : ''} pour la section « Latest Thinking ».`}
                actionLabel="Publier un article"
                onAction={openCreate}
            />

            <AdminTable columns={columns} rows={articles} emptyMessage="Aucun article pour le moment." />

            <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Modifier l'article" : 'Publier un article'}>
                <form onSubmit={submit} className="flex flex-col gap-5">
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Titre</label>
                        <input value={data.title} onChange={(e) => setData('title', e.target.value)} className={ADMIN_INPUT_CLASS} required />
                        {errors.title && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.title}</p>}
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Résumé</label>
                        <textarea value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} rows={3} className={`${ADMIN_INPUT_CLASS} resize-none`} />
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Auteur / Source</label>
                        <input value={data.author} onChange={(e) => setData('author', e.target.value)} className={ADMIN_INPUT_CLASS} />
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Lien externe (optionnel)</label>
                        <input type="url" value={data.external_link} onChange={(e) => setData('external_link', e.target.value)} className={ADMIN_INPUT_CLASS} placeholder="https://" />
                        {errors.external_link && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.external_link}</p>}
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Image d'illustration HD {editing && '(laisser vide pour conserver)'}</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0] ?? null)} className={ADMIN_INPUT_CLASS} />
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

                    <AdminSubmitButton processing={processing} className="mt-2 w-full">
                        {processing ? 'Enregistrement...' : 'Enregistrer'}
                    </AdminSubmitButton>
                </form>
            </AdminModal>
        </AdminLayout>
    );
}
