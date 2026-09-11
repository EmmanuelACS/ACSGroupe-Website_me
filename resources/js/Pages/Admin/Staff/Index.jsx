import AdminLayout from '@/Layouts/AdminLayout';
import AdminModal from '@/Components/Admin/AdminModal';
import AdminPageHeader from '@/Components/Admin/AdminPageHeader';
import AdminTable from '@/Components/Admin/AdminTable';
import AdminIconButton from '@/Components/Admin/AdminIconButton';
import AdminSubmitButton from '@/Components/Admin/AdminSubmitButton';
import { ADMIN_INPUT_CLASS, ADMIN_LABEL_CLASS } from '@/Components/Admin/formStyles';
import { useAdminReorder } from '@/Components/Admin/useAdminReorder';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

const emptyForm = { name: '', role: '', bio: '', photo: null, is_director: false };

export default function StaffIndex({ staff }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const { data, setData, post, put, processing, errors, reset } = useForm(emptyForm);
    const move = useAdminReorder(staff, 'admin.staff.reorder');

    const openCreate = () => {
        setEditing(null);
        reset();
        setModalOpen(true);
    };

    const openEdit = (member) => {
        setEditing(member);
        setData({ name: member.name, role: member.role, bio: member.bio ?? '', photo: null, is_director: member.is_director });
        setModalOpen(true);
    };

    const submit = (e) => {
        e.preventDefault();
        const options = { forceFormData: true, onSuccess: () => setModalOpen(false) };

        if (editing) {
            put(route('admin.staff.update', editing.id), options);
        } else {
            post(route('admin.staff.store'), options);
        }
    };

    const destroy = (member) => {
        if (!confirm(`Supprimer ${member.name} ?`)) return;
        router.delete(route('admin.staff.destroy', member.id));
    };

    const columns = [
        { key: 'photo', label: 'Photo', render: (member) => <img src={member.photo} alt={member.name} className="h-12 w-12 rounded-full object-cover" /> },
        { key: 'name', label: 'Nom', cellClassName: 'font-semibold text-slate-900', render: (member) => member.name },
        { key: 'role', label: 'Rôle', cellClassName: 'text-slate-600', render: (member) => member.role },
        {
            key: 'direction',
            label: 'Direction',
            render: (member) =>
                member.is_director && <span className="rounded-md bg-red-100 px-3 py-1.5 text-sm font-semibold text-red-700">Directeur Général</span>,
        },
        {
            key: 'actions',
            label: 'Actions',
            align: 'right',
            render: (member) => {
                const index = staff.findIndex((s) => s.id === member.id);
                return (
                    <div className="flex items-center justify-end gap-3">
                        <AdminIconButton icon="fa-arrow-up" label="Monter" variant="move" onClick={() => move(index, -1)} />
                        <AdminIconButton icon="fa-arrow-down" label="Descendre" variant="move" onClick={() => move(index, 1)} />
                        <AdminIconButton icon="fa-pen" label="Modifier" onClick={() => openEdit(member)} />
                        <AdminIconButton icon="fa-trash" label="Supprimer" onClick={() => destroy(member)} />
                    </div>
                );
            },
        },
    ];

    return (
        <AdminLayout title="Équipe & Direction">
            <AdminPageHeader
                description={`${staff.length} membre${staff.length > 1 ? 's' : ''} — activez « Directeur Général » pour piloter la section « Mot du DG ».`}
                actionLabel="Ajouter un membre"
                onAction={openCreate}
            />

            <AdminTable columns={columns} rows={staff} emptyMessage="Aucun membre pour le moment." />

            <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le membre' : 'Ajouter un membre'}>
                <form onSubmit={submit} className="flex flex-col gap-5">
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Nom</label>
                        <input value={data.name} onChange={(e) => setData('name', e.target.value)} className={ADMIN_INPUT_CLASS} required />
                        {errors.name && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Rôle</label>
                        <input value={data.role} onChange={(e) => setData('role', e.target.value)} className={ADMIN_INPUT_CLASS} required />
                        {errors.role && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.role}</p>}
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Bio</label>
                        <textarea value={data.bio} onChange={(e) => setData('bio', e.target.value)} rows={4} className={`${ADMIN_INPUT_CLASS} resize-none`} />
                    </div>
                    <div>
                        <label className={ADMIN_LABEL_CLASS}>Photo {editing && '(laisser vide pour conserver)'}</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('photo', e.target.files[0] ?? null)} className={ADMIN_INPUT_CLASS} />
                        {errors.photo && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.photo}</p>}
                    </div>
                    <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <input
                            type="checkbox"
                            checked={data.is_director}
                            onChange={(e) => setData('is_director', e.target.checked)}
                            className="h-4 w-4 rounded text-red-600 focus:ring-red-500"
                        />
                        Membre de la Direction / DG
                    </label>

                    <AdminSubmitButton processing={processing} className="mt-2 w-full">
                        {processing ? 'Enregistrement...' : 'Enregistrer'}
                    </AdminSubmitButton>
                </form>
            </AdminModal>
        </AdminLayout>
    );
}
