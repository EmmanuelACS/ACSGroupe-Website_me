import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Admin/Modal';
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

const INPUT_CLASS =
    'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

const LABEL_CLASS = 'mb-2 block text-sm font-medium text-slate-600';

const emptyForm = { name: '', role: '', bio: '', photo: null, is_director: false };

export default function StaffIndex({ staff }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const { data, setData, post, put, processing, errors, reset } = useForm(emptyForm);

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

    const move = (index, direction) => {
        const order = staff.map((m) => m.id);
        const target = index + direction;
        if (target < 0 || target >= order.length) return;
        [order[index], order[target]] = [order[target], order[index]];
        router.post(route('admin.staff.reorder'), { order }, { preserveScroll: true });
    };

    return (
        <AdminLayout title="Équipe & Direction">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-base text-slate-500">
                    {staff.length} membre{staff.length > 1 ? 's' : ''} — activez « Directeur Général » pour piloter la section « Mot du DG ».
                </p>
                <button
                    type="button"
                    onClick={openCreate}
                    className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 cursor-pointer"
                >
                    <i className="fas fa-plus"></i>
                    Ajouter un membre
                </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left text-base">
                    <thead className="bg-slate-50 text-sm font-semibold uppercase tracking-wide text-slate-500">
                        <tr>
                            <th className="px-6 py-4">Photo</th>
                            <th className="px-6 py-4">Nom</th>
                            <th className="px-6 py-4">Rôle</th>
                            <th className="px-6 py-4">Direction</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {staff.map((member, index) => (
                            <tr key={member.id}>
                                <td className="px-6 py-4">
                                    <img src={member.photo} alt={member.name} className="h-12 w-12 rounded-full object-cover" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-slate-900">{member.name}</td>
                                <td className="px-6 py-4 text-slate-600">{member.role}</td>
                                <td className="px-6 py-4">
                                    {member.is_director && (
                                        <span className="rounded-md bg-red-100 px-3 py-1.5 text-sm font-semibold text-red-700">Directeur Général</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-3">
                                        <button type="button" onClick={() => move(index, -1)} className="text-slate-400 hover:text-slate-900 cursor-pointer" aria-label="Monter">
                                            <i className="fas fa-arrow-up"></i>
                                        </button>
                                        <button type="button" onClick={() => move(index, 1)} className="text-slate-400 hover:text-slate-900 cursor-pointer" aria-label="Descendre">
                                            <i className="fas fa-arrow-down"></i>
                                        </button>
                                        <button type="button" onClick={() => openEdit(member)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Modifier">
                                            <i className="fas fa-pen"></i>
                                        </button>
                                        <button type="button" onClick={() => destroy(member)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Supprimer">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le membre' : 'Ajouter un membre'}>
                <form onSubmit={submit} className="flex flex-col gap-5">
                    <div>
                        <label className={LABEL_CLASS}>Nom</label>
                        <input value={data.name} onChange={(e) => setData('name', e.target.value)} className={INPUT_CLASS} required />
                        {errors.name && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Rôle</label>
                        <input value={data.role} onChange={(e) => setData('role', e.target.value)} className={INPUT_CLASS} required />
                        {errors.role && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.role}</p>}
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Bio</label>
                        <textarea value={data.bio} onChange={(e) => setData('bio', e.target.value)} rows={4} className={`${INPUT_CLASS} resize-none`} />
                    </div>
                    <div>
                        <label className={LABEL_CLASS}>Photo {editing && '(laisser vide pour conserver)'}</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('photo', e.target.files[0] ?? null)} className={INPUT_CLASS} />
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
