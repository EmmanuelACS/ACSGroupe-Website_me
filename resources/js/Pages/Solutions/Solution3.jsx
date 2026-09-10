import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

const roadmapIcons = [24, 22, 21, 20, 19];
const industryIcons = [12, 25, 6, 23];

export default function Solution3() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    const tabs = t('solution3.roadmapTabs', []).map((tab, i) => ({ hash: `tab-l-${i + 1}`, label: tab.label, text: tab.text, icon: roadmapIcons[i] }));
    const projects = t('solution3.projects', []);
    const industries = t('solution3.industries', []);

    return (
        <MainLayout title="IA & Data en production — Access Technologies Solution (ACS)">
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
                                <Link href={route('services.service1')}>{t('nav.solutions')}</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">{t('solution3.bannerTitle')}</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* iot software */}
            <section className="mil-p-120-90">
                <div className="container">
                    <h2 className="mil-text-center mil-mb-90">
                        <span className="mil-accent">{t('solution3.iotHeadingAccent')}</span> {t('solution3.iotHeadingSuffix')}
                    </h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mil-hover-card mil-box-center mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>I</h3>
                                </div>
                                <h5 className="mil-mb-30">
                                    {t('solution3.embeddedTitle')} <br />
                                    {t('solution3.embeddedTitleAccent')}
                                </h5>
                                <p>{t('solution3.embeddedText')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-hover-card mil-box-center mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>II</h3>
                                </div>
                                <h5 className="mil-mb-30">{t('solution3.cloudTitle')}</h5>
                                <p>{t('solution3.cloudText')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-hover-card mil-box-center mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>III</h3>
                                </div>
                                <h5 className="mil-mb-30">
                                    {t('solution3.appsTitle')} <br />
                                    {t('solution3.appsTitleAccent')}
                                </h5>
                                <p>{t('solution3.appsText')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* iot software end */}

            {/* projects */}
            <section className="mil-p-0-90">
                <div className="container">
                    <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">{projects[0]?.title}</h3>
                            <p className="mil-mb-30">{projects[0]?.text}</p>
                            <a href="#." className="mil-link">
                                <span>{t('common.seeMore')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover mil-type-2">
                                <img src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?auto=format&fit=crop&w=900&q=80" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">{projects[1]?.title}</h3>
                            <p className="mil-mb-30">{projects[1]?.text}</p>
                            <a href="#." className="mil-link">
                                <span>{t('common.seeMore')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                                    alt="Professionnelle santé connectée — Access Technologies Solution (ACS)"
                                />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">{projects[2]?.title}</h3>
                            <p className="mil-mb-30">{projects[2]?.text}</p>
                            <a href="#." className="mil-link">
                                <span>{t('common.seeMore')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover">
                                <img src="https://images.unsplash.com/photo-1691435828932-911a7801adfb?auto=format&fit=crop&w=900&q=80" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">{projects[3]?.title}</h3>
                            <p className="mil-mb-30">{projects[3]?.text}</p>
                            <a href="#." className="mil-link">
                                <span>{t('common.seeMore')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* projects end */}

            {/* industries */}
            <section className="mil-p-0-90">
                <div className="mil-deco" style={{ bottom: 0, right: '40%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <h2 className="mil-mb-60">
                        <span className="mil-accent">{t('solution3.industryHeadingAccent')}</span> {t('solution3.industrySuffix')}
                    </h2>

                    <Slider
                        className="mil-revi-slider mil-mb-60"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {industries.map((ind, i) => (
                                <div className="swiper-slide" key={ind.title}>
                                    <div className="mil-hover-card">
                                        <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                        <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                            <img src={`/img/icons/md/${industryIcons[i]}.svg`} alt="icon" />
                                        </div>
                                        <p className="mil-mb-30">{ind.text}</p>
                                        <h6>{ind.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row align-items-center flex-sm-row-reverse">
                        <div className="col-lg-6">
                            <div className="mil-adaptive-right mil-mb-30">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-revi-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">{t('common.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-revi-next">
                                        <span className="mil-h6">{t('common.next')}</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Link href={route('contact')} className="mil-link mil-mb-30">
                                <span>{t('solution3.talkToAgent')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* industries end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* left nav tabs */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solution3.roadmapSuptitle')}</span>
                    <h2 className="mil-mb-90">
                        {t('solution3.roadmapHeading')} <span className="mil-accent">{t('solution3.roadmapHeadingAccent')}</span>
                    </h2>

                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <ul className="mil-tabs-left-nav mil-mb-60">
                                {tabs.map((tab, i) => (
                                    <li key={tab.hash}>
                                        <a
                                            href={`#${tab.hash}`}
                                            className={`mil-h4${activeTab === i ? ' mil-active' : ''}`}
                                            onClick={() => setActiveTab(i)}
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
                                                    <img src={`/img/icons/md/${tab.icon}.svg`} alt="icon" />
                                                </div>
                                                <div className="mil-mb-30">
                                                    <p>{tab.text}</p>
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

            {/* reviews */}
            <section className="mil-gradient-bg mil-p-120-120">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '30%' }}></div>
                <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: '20%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <Slider
                        className="mil-box-slider"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            parallax: true,
                            effect: 'fade',
                            navigation: { prevEl: '.mil-box-prev', nextEl: '.mil-box-next' },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {[
                                { name: 'Victoria Oldman', face: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?auto=format&fit=crop&w=900&q=80' },
                                { name: 'John Doe', face: 'https://images.unsplash.com/photo-1786340436214-76fd497c650b?auto=format&fit=crop&w=900&q=80' },
                                { name: 'Oscar Trueman', face: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?auto=format&fit=crop&w=900&q=80' },
                            ].map((r) => (
                                <div className="swiper-slide" key={r.name}>
                                    <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                        <div className="col-lg-3 offset-lg-1">
                                            <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                                <div className="mil-circle-bg"></div>
                                                <div className="mil-image-frame">
                                                    <img src={r.face} alt={r.name} loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                                                <img src="/img/icons/sm/11.svg" alt="icon" />
                                            </div>
                                            <p className="mil-text-lg mil-light mil-mb-60">{t('solution3.reviewText')}</p>
                                            <h3 className="mil-light mil-mb-15">{r.name}</h3>
                                            <p className="mil-light-soft">{t('solution3.reviewRole')}</p>
                                            <p className="mil-accent">Access Technologies Solution (ACS)</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mil-slider-nav justify-content-lg-center mil-reviews-btns-space">
                                <div className="mil-slider-btn-prev mil-box-prev mil-light">
                                    <i className="fas fa-arrow-left"></i>
                                    <span className="mil-h6">{t('common.prev')}</span>
                                </div>
                                <div className="mil-slider-btn-next mil-box-next mil-light">
                                    <span className="mil-h6">{t('common.next')}</span>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* reviews end */}
        </MainLayout>
    );
}
