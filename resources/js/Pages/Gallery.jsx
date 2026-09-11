import MainLayout from '@/Layouts/MainLayout';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { resolveImagePath } from '@/utils/image';
import PageHeader from '@/Components/UI/PageHeader';
import { GalleryCard } from '@/Components/UI/ContentCard';

// Gallery({ items, categories }) : alimentée depuis la base de données par
// PageController@gallery, administrable depuis /admin/gallery.
export default function Gallery({ items, categories }) {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = useMemo(
        () => (activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory)),
        [activeCategory, items],
    );

    const handleFilter = (category) => {
        console.info('[Gallery] Filter selected:', category);
        setActiveCategory(category);
    };

    return (
        <MainLayout title={`${t('gallery.bannerTitle')} — Access Technologies Solution (ACS)`}>
            {/* banner */}
            <PageHeader
                title={t('gallery.bannerTitle')}
                breadcrumbs={[
                    { label: t('about.breadcrumbHome'), href: route('home') },
                    { label: t('gallery.breadcrumbLabel'), href: route('gallery') },
                ]}
            />
            {/* banner end */}

            {/* gallery */}
            <section className="mil-p-120-120">
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30 block text-center">{t('gallery.suptitle')}</span>
                    <h2 className="mil-mb-30 text-center">{t('gallery.heading')}</h2>
                    <p className="mil-text-center mil-dark-soft mil-mb-60 max-w-2xl mx-auto">{t('gallery.description')}</p>

                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        <button
                            type="button"
                            onClick={() => handleFilter('all')}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all duration-300 cursor-pointer ${
                                activeCategory === 'all'
                                    ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                                    : 'border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:border-red-500/60 hover:text-red-600'
                            }`}
                        >
                            {t('gallery.filterAll')}
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => handleFilter(category)}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all duration-300 cursor-pointer ${
                                    activeCategory === category
                                        ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                                        : 'border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:border-red-500/60 hover:text-red-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredItems.map((item) => (
                            <GalleryCard key={item.id} src={resolveImagePath(item.photo)} title={item.title} category={item.category} location={item.location} />
                        ))}
                    </div>
                </div>
            </section>
            {/* gallery end */}
        </MainLayout>
    );
}
