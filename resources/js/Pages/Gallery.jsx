import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data/galleryData';

export default function Gallery() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = useMemo(
        () => (activeCategory === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeCategory)),
        [activeCategory],
    );

    const handleFilter = (category) => {
        console.info('[Gallery] Filter selected:', category);
        setActiveCategory(category);
    };

    return (
        <MainLayout title={`${t('gallery.bannerTitle')} — Access Technologies Solution (ACS)`}>
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li><Link href={route('home')}>{t('about.breadcrumbHome')}</Link></li>
                            <li><Link href={route('gallery')}>{t('gallery.breadcrumbLabel')}</Link></li>
                        </ul>
                        <h2 className="mil-uppercase">{t('gallery.bannerTitle')}</h2>
                    </div>
                </div>
            </div>
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
                        {GALLERY_CATEGORIES.map((category) => (
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
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10"
                            >
                                <div className="relative h-80 sm:h-96 overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover rounded-t-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wide shadow-[0_0_12px_rgba(220,38,38,0.5)]">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="px-4 py-3">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white break-words whitespace-normal">{item.title}</h4>
                                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                                        <i className="fas fa-map-marker-alt text-red-600"></i>
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* gallery end */}
        </MainLayout>
    );
}
