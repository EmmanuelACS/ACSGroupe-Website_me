import { useEffect, useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';
import { useLanguage } from '@/Context/LanguageContext';
import ContactSection from '@/Components/ContactSection';

const pillarIcons = [17, 19, 18, 11];
const dataItemIcons = ['I', 'II', 'III', 'IV'];

export default function Solution2() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);
    const [activeLeftTab, setActiveLeftTab] = useState(0);

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    const pillars = t('solution2.pillars', []).map((p, i) => ({ ...p, icon: pillarIcons[i] }));
    const dataItems = t('solution2.dataItems', []);
    const ecosystemTabs = t('solution2.ecosystemTabs', []);
    const values = t('solution2.values', []);

    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        first_name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), { forceFormData: true });
    };

    return (
        <MainLayout title="Modernisation SI — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li><Link href={route('home')}>{t('nav.home')}</Link></li>
                            <li><Link href={route('services.service1')}>{t('nav.solutions')}</Link></li>
                        </ul>
                        <h2 className="mil-uppercase">{t('solution2.bannerTitle')}</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* intro */}
            <section className="mil-p-120-90">
                <div className="container">
                    <h2 className="mil-mb-60">{t('solution2.heading1')} <span className="mil-accent">{t('solution2.headingAccent')}</span> {t('solution2.headingSuffix')}</h2>
                    <p className="mil-mb-60">{t('solution2.introText')}</p>
                    <div className="row">
                        {pillars.map((pillar) => (
                            <div className="col-lg-3" key={pillar.title}>
                                <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                                    <div className="mil-icon-box-2">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                            <img src={`/img/icons/md/${pillar.icon}.svg`} alt="icon" />
                                        </div>
                                        <div className="mil-box-text">
                                            <h6 className="mil-box-text">{pillar.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* intro end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* data items */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <div className="row align-items-end mil-mb-90">
                        <div className="col-md-6 col-xl-7">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solution2.dataSuptitle')}</span>
                            <h2>{t('solution2.dataHeading')} <span className="mil-accent">{t('solution2.dataHeadingAccent')}</span></h2>
                        </div>
                        <div className="col-md-6 col-xl-5">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-revi-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">{t('common.prev')}</span></div>
                                    <div className="mil-slider-btn-next mil-revi-next"><span className="mil-h6">{t('common.next')}</span><i className="fas fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider
                        className="mil-revi-slider mil-mb-30"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {dataItems.map((item, i) => (
                                <div className="swiper-slide" key={item.title}>
                                    <div className="mil-hover-card">
                                        <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                        <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                            <h3>{dataItemIcons[i]}</h3>
                                        </div>
                                        <h5 className="mil-mb-30">{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>
            {/* data items end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* dataops / mlops */}
            <section className="mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, left: '15%' }}></div>
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solution2.greatService')}</span>
                        <h2 className="mil-mb-30">{t('solution2.supercharge')} <span className="mil-accent">{t('solution2.yourData')}</span> {t('solution2.withPrefix')}</h2>
                    </div>

                    <div className="mil-tab-buttons mil-tab-buttons-2 mil-mb-90">
                        <a href="#tab1" className={activeTab === 0 ? 'mil-active' : ''} onClick={() => setActiveTab(0)}>
                            <div>
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                                    <img src="/img/icons/md/20.svg" alt="icon" />
                                </div>
                                <h6>{t('solution2.dataOps')}</h6>
                            </div>
                        </a>
                        <a href="#tab2" className={activeTab === 1 ? 'mil-active' : ''} onClick={() => setActiveTab(1)}>
                            <div>
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                                    <img src="/img/icons/md/21.svg" alt="icon" />
                                </div>
                                <h6>{t('solution2.mlOps')}</h6>
                            </div>
                        </a>
                    </div>

                    <Slider
                        className="mil-tabs-slider"
                        options={{
                            slidesPerView: 1,
                            speed: 800,
                            allowTouchMove: false,
                            hashNavigation: { watchState: true },
                            effect: 'fade',
                            parallax: true,
                        }}
                    >
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" data-hash="tab1">
                                <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <p>{t('solution2.dataOpsText')}</p>
                                </div>
                            </div>

                            <div className="swiper-slide" data-hash="tab2">
                                <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <p>{t('solution2.mlOpsText')}</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            {/* dataops / mlops end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* left nav tabs */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solution2.ecosystemSuptitle')}</span>
                    <h2 className="mil-mb-90">{t('solution2.ecosystemHeading')} <span className="mil-accent">{t('solution2.ecosystemHeadingAccent')}</span></h2>

                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <ul className="mil-tabs-left-nav mil-mb-60">
                                {ecosystemTabs.map((tab, i) => (
                                    <li key={tab.title}>
                                        <a
                                            href={`#tab-l-${i + 1}`}
                                            className={`mil-h4${activeLeftTab === i ? ' mil-active' : ''}`}
                                            onClick={() => setActiveLeftTab(i)}
                                        >
                                            {tab.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <Slider
                                className="mil-tabs-slider mil-mb-60"
                                options={{
                                    slidesPerView: 1,
                                    speed: 800,
                                    allowTouchMove: false,
                                    hashNavigation: { watchState: true },
                                    effect: 'fade',
                                    parallax: true,
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {ecosystemTabs.map((tab, i) => (
                                        <div className="swiper-slide" data-hash={`tab-l-${i + 1}`} key={tab.title}>
                                            <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                                <p>{tab.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* left nav tabs end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* values */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, left: '15%' }}></div>
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solution2.greatService')}</span>
                        <h2 className="mil-mb-30">{t('solution2.valuesHeadingPrefix')} <span className="mil-accent">{t('solution2.valuesHeadingAccent')}</span></h2>
                    </div>
                    <div className="row">
                        {values.map((value, i) => (
                            <div className="col-lg-3" key={value.title}>
                                <div className="mil-box-center mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                        <h3>{['I', 'II', 'III', 'IV'][i]}</h3>
                                    </div>
                                    <h5 className="mil-mb-20">{value.title}</h5>
                                    <p>{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* values end */}

            <ContactSection data={data} setData={setData} errors={errors} processing={processing} recentlySuccessful={recentlySuccessful} onSubmit={submit} />
        </MainLayout>
    );
}
