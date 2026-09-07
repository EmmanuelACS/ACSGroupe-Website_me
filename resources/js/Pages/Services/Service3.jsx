import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

const projects = [
    { img: 1, name: 'Jane Meldrum' },
    { img: 2, name: 'Nguta Ithya' },
    { img: 3, name: 'Roy Bricks' },
    { img: 4, name: 'Nguta Ithya' },
];

export default function Service3() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    const tabs = t('service3.tabs', []).map((tab, i) => ({ hash: `tab-l-${i + 1}`, label: tab.label }));

    return (
        <MainLayout title="Cloud & Infrastructure — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>{t('nav.home')}</Link>
                            </li>
                            <li>
                                <Link href={route('services.service1')}>{t('nav.services')}</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">{t('service3.bannerTitle')}</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* ??? */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service3.appsSuptitle')}</span>
                        <h2 className="mil-mb-30">
                            <span className="mil-accent">{t('service3.appsHeadingAccent')}</span> {t('service3.appsHeadingSuffix')}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/22.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">{t('service3.androidTitle')}</h5>
                                <p className="mil-mb-30">{t('service3.androidText')}</p>
                                <ul className="mil-dot-list">
                                    <li className="mil-text-sm mil-bold mil-dark">Java</li>
                                    <li className="mil-text-sm mil-bold mil-dark">Kotlin</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/22.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">{t('service3.iosTitle')}</h5>
                                <p className="mil-mb-30">{t('service3.iosText')}</p>
                                <ul className="mil-dot-list">
                                    <li className="mil-text-sm mil-bold mil-dark">Swift</li>
                                    <li className="mil-text-sm mil-bold mil-dark">Objective-C</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/22.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">{t('service3.crossTitle')}</h5>
                                <p className="mil-mb-30">{t('service3.crossText')}</p>
                                <ul className="mil-dot-list">
                                    <li className="mil-text-sm mil-bold mil-dark">React Native</li>
                                    <li className="mil-text-sm mil-bold mil-dark">Flutter</li>
                                    <li className="mil-text-sm mil-bold mil-dark">Xamarin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* portfolio */}
            <section className="mil-works mil-deep-bg mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-60-adapt">
                        <div className="col-md-6 col-xl-6">
                            <h2 className="mil-mb-30">{t('home.portfolio.heading')}</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <div className="mil-slider-nav mil-mb-30">
                                    <div className="mil-slider-btn-prev mil-works-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">{t('common.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-works-next">
                                        <span className="mil-h6">{t('common.next')}</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
                        className="mil-works-slider mil-mb-90"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-works-prev', nextEl: '.mil-works-next' },
                            breakpoints: { 768: { slidesPerView: 2 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {projects.map((p) => (
                                <div className="swiper-slide" key={p.img}>
                                    <Link href={route('project')} className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src={`/img/projects/${p.img}.jpg`} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">{t('home.portfolio.cardTitle')}</h4>
                                                <h6>
                                                    {t('home.portfolio.cardBy')} <span className="mil-accent">{p.name}</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>{t('home.portfolio.cardText')}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <Link href={route('portfolio')} className="mil-link mil-mb-30">
                                <span>{t('home.portfolio.viewAllCases')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                    <span>{t('service3.startInnovation')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio end */}

            {/* left nav tabs */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service3.allDevices')}</span>
                    <h2 className="mil-mb-90">
                        <span className="mil-accent">{t('service3.mobileHeadingAccent')}</span> {t('service3.mobileHeadingSuffix')}
                    </h2>

                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <ul className="mil-tabs-left-nav mil-mb-60">
                                {tabs.map((tab, i) => (
                                    <li key={tab.hash}>
                                        <a
                                            href={`#${tab.hash}`}
                                            className={`mil-h4${activeTab === i ? ' mil-active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveTab(i);
                                            }}
                                        >
                                            {tab.label}
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
                                    {tabs.map((tab) => (
                                        <div className="swiper-slide" data-hash={tab.hash} key={tab.hash}>
                                            <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0">
                                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                                    <img src="/img/icons/md/22.svg" alt="icon" />
                                                </div>
                                                <div className="mil-mb-30">
                                                    <p>{t('service3.tabsText')}</p>
                                                </div>
                                                <Link href={route('about')} className="mil-link">
                                                    <span>{t('common.seeMore')}</span>
                                                    <i className="fas fa-arrow-right"></i>
                                                </Link>
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

            {/* ??? */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <div className="mil-mb-90">
                        <h2 className="mil-mb-30">
                            {t('service3.industryDeliverPrefix')} <span className="mil-accent">{t('service3.industryDeliverAccent')}</span> <br />
                            {t('service3.industryDeliverSuffix')}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/23.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">{t('service3.ecommerceTitle')}</h5>
                                <p>{t('service3.ecommerceText')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/24.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">{t('service3.entertainmentTitle')}</h5>
                                <p>{t('service3.entertainmentText')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/6.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">{t('service3.enterpriseTitle')}</h5>
                                <p>{t('service3.enterpriseText')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* ??? */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="row align-items-end mil-mb-60-adapt">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service3.techSuptitle')}</span>
                            <h2 className="mil-mb-30">
                                <span className="mil-accent">{t('service3.techHeadingAccent')}</span> {t('service3.techHeadingSuffix')}
                            </h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                    <span>{t('common.learnMore')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {t('service3.techTags', []).map((tag, i) => (
                            <div className="col-lg-3" key={tag}>
                                <div className="mil-box-center mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                        <img src={`/img/icons/md/${[1, 11, 2, 4][i]}.svg`} alt="icon" />
                                    </div>
                                    <h6>{tag}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ??? end */}
        </MainLayout>
    );
}
