import AdminLayout from '@/Layouts/AdminLayout';
import { router, useForm } from '@inertiajs/react';

const INPUT_CLASS =
    'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

const LABEL_CLASS = 'mb-2 block text-sm font-medium text-slate-600';

export default function SlideshowIndex({ images, delayMs }) {
    const uploadForm = useForm({ image: null });
    const delayForm = useForm({ delay_ms: delayMs });

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

    const move = (index, direction) => {
        const order = images.map((img) => img.id);
        const target = index + direction;
        if (target < 0 || target >= order.length) return;
        [order[index], order[target]] = [order[target], order[index]];
        router.post(route('admin.slideshow.reorder'), { order }, { preserveScroll: true });
    };

    return (
        <AdminLayout title="Diaporama d'arrière-plan">
            <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <form onSubmit={upload} className="flex items-end gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex-1">
                        <label className={LABEL_CLASS}>Ajouter une image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => uploadForm.setData('image', e.target.files[0] ?? null)}
                            className={INPUT_CLASS}
                            required
                        />
                        {uploadForm.errors.image && <p className="mt-1.5 text-sm font-medium text-red-600">{uploadForm.errors.image}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={uploadForm.processing}
                        className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 disabled:opacity-50 cursor-pointer"
                    >
                        Ajouter
                    </button>
                </form>

                <form onSubmit={saveDelay} className="flex items-end gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex-1">
                        <label className={LABEL_CLASS}>Délai de transition (ms)</label>
                        <input
                            type="number"
                            min={1000}
                            max={15000}
                            step={500}
                            value={delayForm.data.delay_ms}
                            onChange={(e) => delayForm.setData('delay_ms', Number(e.target.value))}
                            className={INPUT_CLASS}
                        />
                        {delayForm.errors.delay_ms && <p className="mt-1.5 text-sm font-medium text-red-600">{delayForm.errors.delay_ms}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={delayForm.processing}
                        className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <div key={image.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <img src={image.image} alt={`Diaporama ${index + 1}`} className="h-44 w-full object-cover" />
                        <div className="flex items-center justify-between p-4">
                            <span className="text-sm font-semibold text-slate-400">#{index + 1}</span>
                            <div className="flex items-center gap-4">
                                <button type="button" onClick={() => move(index, -1)} className="text-slate-400 hover:text-slate-900 cursor-pointer" aria-label="Monter">
                                    <i className="fas fa-arrow-up"></i>
                                </button>
                                <button type="button" onClick={() => move(index, 1)} className="text-slate-400 hover:text-slate-900 cursor-pointer" aria-label="Descendre">
                                    <i className="fas fa-arrow-down"></i>
                                </button>
                                <button type="button" onClick={() => destroy(image)} className="text-slate-500 hover:text-red-600 cursor-pointer" aria-label="Supprimer">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}
