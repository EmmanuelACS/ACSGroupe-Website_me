import AdminLayout from '@/Layouts/AdminLayout';
import AdminIconButton from '@/Components/Admin/AdminIconButton';
import AdminSubmitButton from '@/Components/Admin/AdminSubmitButton';
import { ADMIN_INPUT_CLASS, ADMIN_LABEL_CLASS } from '@/Components/Admin/formStyles';
import { useAdminReorder } from '@/Components/Admin/useAdminReorder';
import { router, useForm } from '@inertiajs/react';

export default function SlideshowIndex({ images, delayMs }) {
    const uploadForm = useForm({ image: null });
    const delayForm = useForm({ delay_ms: delayMs });
    const move = useAdminReorder(images, 'admin.slideshow.reorder');

    const upload = (e) => {
        e.preventDefault();
        uploadForm.post(route('admin.slideshow.store'), { forceFormData: true, onSuccess: () => uploadForm.reset() });
    };

    const saveDelay = (e) => {
        e.preventDefault();
        delayForm.put(route('admin.slideshow.delay'));
    };

    const destroy = (image) => {
        if (!confirm('Retirer cette image du diaporama ?')) return;
        router.delete(route('admin.slideshow.destroy', image.id));
    };

    return (
        <AdminLayout title="Diaporama d'arrière-plan">
            <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <form onSubmit={upload} className="flex items-end gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex-1">
                        <label className={ADMIN_LABEL_CLASS}>Ajouter une image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => uploadForm.setData('image', e.target.files[0] ?? null)}
                            className={ADMIN_INPUT_CLASS}
                            required
                        />
                        {uploadForm.errors.image && <p className="mt-1.5 text-sm font-medium text-red-600">{uploadForm.errors.image}</p>}
                    </div>
                    <AdminSubmitButton processing={uploadForm.processing}>Ajouter</AdminSubmitButton>
                </form>

                <form onSubmit={saveDelay} className="flex items-end gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex-1">
                        <label className={ADMIN_LABEL_CLASS}>Délai de transition (ms)</label>
                        <input
                            type="number"
                            min={1000}
                            max={15000}
                            step={500}
                            value={delayForm.data.delay_ms}
                            onChange={(e) => delayForm.setData('delay_ms', Number(e.target.value))}
                            className={ADMIN_INPUT_CLASS}
                        />
                        {delayForm.errors.delay_ms && <p className="mt-1.5 text-sm font-medium text-red-600">{delayForm.errors.delay_ms}</p>}
                    </div>
                    <AdminSubmitButton processing={delayForm.processing} tone="dark">
                        Enregistrer
                    </AdminSubmitButton>
                </form>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <div key={image.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <img src={image.image} alt={`Diaporama ${index + 1}`} className="h-44 w-full object-cover" />
                        <div className="flex items-center justify-between p-4">
                            <span className="text-sm font-semibold text-slate-400">#{index + 1}</span>
                            <div className="flex items-center gap-4">
                                <AdminIconButton icon="fa-arrow-up" label="Monter" variant="move" onClick={() => move(index, -1)} />
                                <AdminIconButton icon="fa-arrow-down" label="Descendre" variant="move" onClick={() => move(index, 1)} />
                                <AdminIconButton icon="fa-trash" label="Supprimer" onClick={() => destroy(image)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}
