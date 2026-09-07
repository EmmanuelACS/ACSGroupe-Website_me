import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

const tabIcons = [2, 1, 11, 3];
// Photos HD Unsplash de professionnels afro-descendants en cybersécurité / SOC.
const tabImgs = [
    'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=700&h=850&fit=crop&crop=faces&auto=format&q=80',
    'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=700&h=850&fit=crop&crop=faces&auto=format&q=80',
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=700&h=850&fit=crop&crop=faces&auto=format&q=80',
    'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=700&h=850&fit=crop&crop=faces&auto=format&q=80',
];
const boxIcons = [10, 11];
const boxSlides = [0, 1, 0, 1];
const industryIcons = [12, 13, 14, 2];
const techStack = ['JavaScript', 'Python', 'GCloud', 'Java', 'MySQL', 'ONNX', 'Kotlin', 'Swift', 'PHP', 'MariaDB', 'AWS', 'React'];

export default function Solution1() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    const tabs = t('solutions.tabs', []).map((tab, i) => ({
        hash: `tab${i + 1}`,
        icon: tabIcons[i],
        img: tabImgs[i],
        title: tab.title,
        text1: tab.text1,
        text2: tab.text2,
    }));
    const boxContent = t('solutions.boxes', []).map((box, i) => ({ ...box, icon: boxIcons[i] }));
    const industries = t('solutions.industries', []).map((ind, i) => ({ icon: industryIcons[i], title: ind.title, text: ind.text }));

    const handleTabChange = (i) => {
        console.info('[Solution1] Tab changed to:', tabs[i]?.title);
        setActiveTab(i);
    };

    return (
        <MainLayout title="Souveraineté des données — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>{t('solutions.breadcrumbHome')}</Link>
                            </li>
                            <li>
                                <Link href={route('services.service1')}>{t('solutions.breadcrumbLabel')}</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase dark:text-white">{t('solutions.bannerTitle')}</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* call to action */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ bottom: 0, right: '25%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mil-hori-box mil-mb-30">
                                <div className="mil-mr-30">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                                        <img src="/img/icons/md/11.svg" alt="icon" />
                                    </div>
                                </div>
                                <h5 className="dark:text-white">{t('solutions.introHeading')}</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                    <span>{t('solutions.ctaButton')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* title */}
            <section className="mil-p-120-0">
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solutions.sectionSuptitle')}</span>
                        <h2 className="dark:text-white">
                            {t('solutions.sectionHeadingLine1')} <br /> <span className="mil-accent">{t('solutions.sectionHeadingAccent')}</span>
                        </h2>
                    </div>
                </div>
            </section>
            {/* title end */}

            {/* about */}
            <section className="mil-deep-bg mil-p-120-0">
                <div className="container">
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
                            {tabs.map((tab) => (
                                <div className="swiper-slide" data-hash={tab.hash} key={tab.hash}>
                                    <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                        <div className="col-lg-7">
                                            <div className="mil-hori-box mil-mb-60">
                                                <div className="mil-mr-15">
                                                    <div className="mil-icon-frame mil-icon-frame-md">
                                                        <img src={`/img/icons/md/${tab.icon}.svg`} alt="icon" />
                                                    </div>
                                                </div>
                                                <h5 className="dark:text-white">{tab.title}</h5>
                                            </div>

                                            <div className="row mil-mb-60">
                                                <div className="col-lg-6">
                                                    <p className="dark:text-slate-300">{tab.text1}</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p className="dark:text-slate-300">{tab.text2}</p>
                                                </div>
                                            </div>

                                            <Link href={route('contact')} className="mil-link mil-mb-60">
                                                <span>{t('cta.contactUs')}</span>
                                                <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                                <div className="mil-circle-bg"></div>
                                                <div className="mil-image-frame">
                                                    <img src={tab.img} alt={tab.title} loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>

                    <div className="mil-tab-buttons mil-mt-60-adapt">
                        {tabs.map((tab, i) => (
                            <a
                                href={`#${tab.hash}`}
                                className={
                                    activeTab === i
                                        ? 'mil-active dark:bg-[#1A1A20] dark:border-white/10 dark:text-white'
                                        : 'dark:text-slate-300'
                                }
                                onClick={() => handleTabChange(i)}
                                key={tab.hash}
                            >
                                <span>{tab.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* title */}
            <section className="mil-p-120-0">
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solutions.focusSuptitle')}</span>
                        <h2 className="dark:text-white">{t('solutions.focusHeading')}</h2>
                    </div>
                </div>
            </section>
            {/* title end */}

            {/* ??? */}
            <section className="mil-awards">
                <div className="row m-0">
                    <div className="col-xl-6 p-0 mil-relative">
                        <img
                            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1400&h=1000&fit=crop&crop=faces&auto=format&q=80"
                            className="mil-background-image"
                            style={{ objectPosition: 'center' }}
                            data-swiper-parallax-scale="1.1"
                            alt="Expert en cybersécurité au travail — Access Technologies Solution (ACS)"
                        />
                        <div className="mil-overlay mil-gradient-bg"></div>

                        <div className="mil-fake-container mil-p-120-120">
                            <Slider
                                className="mil-box-slider mil-mb-120"
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
                                    {boxSlides.map((idx, i) => {
                                        const content = boxContent[idx];
                                        return (
                                            <div className="swiper-slide" key={i}>
                                                <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                                    <h3 className="mil-light mil-mb-120">
                                                        {content.h3a}
                                                        <span className="mil-accent">{content.h3span}</span>
                                                    </h3>
                                                    <div className="mil-hori-box mil-mb-30">
                                                        <div className="mil-mr-15">
                                                            <div className="mil-icon-frame mil-light mil-icon-frame-md">
                                                                <img src={`/img/icons/md/${content.icon}.svg`} alt="icon" />
                                                            </div>
                                                        </div>
                                                        <h5 className="mil-light">{content.heading}</h5>
                                                    </div>
                                                    <p className="mil-light-soft">{content.text}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Slider>
                            <div className="mil-slider-nav">
                                <div className="mil-slider-btn-prev mil-box-prev mil-light">
                                    <i className="fas fa-arrow-left"></i>
                                    <span className="mil-h6">Prev</span>
                                </div>
                                <div className="mil-slider-btn-next mil-box-next mil-light">
                                    <span className="mil-h6">Next</span>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 p-0 mil-relative" style={{ overflow: 'hidden' }}>
                        <img
                            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1400&h=1000&fit=crop&crop=faces&auto=format&q=80"
                            className="mil-background-image"
                            style={{ objectPosition: 'center' }}
                            data-swiper-parallax-scale="1.1"
                            alt="Expert en cybersécurité au travail — Access Technologies Solution (ACS)"
                        />
                        <div className="mil-overlay mil-with-deco mil-super-light"></div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
                <div className="container">
                    <div className="row align-items-end mil-mb-90">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solutions.industriesSuptitle')}</span>
                            <h2 className="dark:text-white">
                                {t('solutions.industriesHeading')} <span className="mil-accent">{t('solutions.industriesHeadingAccent')}</span>
                            </h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-revi-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">Prev</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-revi-next">
                                        <span className="mil-h6">Next</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider
                        className="mil-revi-slider mil-mb-90"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {industries.map((ind) => (
                                <div className="swiper-slide" key={ind.title}>
                                    <div className="mil-hover-card dark:bg-[#1A1A20] dark:border-white/10">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <img src={`/img/icons/md/${ind.icon}.svg`} alt="icon" />
                                        </div>
                                        <h5 className="mil-mb-30 dark:text-white">{ind.title}</h5>
                                        <p className="dark:text-slate-300">{ind.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <Link href={route('contact')} className="mil-link">
                        <span>{t('solutions.ctaSolveLink')}</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
            {/* ??? end */}

            {/* call to action */}
            <section className="call-to-action mil-gradient-bg mil-p-120-120">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: '15%' }}></div>
                <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: '15%', transform: 'rotate(180deg)' }}></div>
                <div className="container mil-text-center">
                    <div className="mil-cta-frame">
                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-50">
                            <img src="/img/icons/md/13l.svg" alt="icon" />
                        </div>
                        <p className="mil-light mil-mb-30">{t('solutions.cyberStat')}</p>
                        <h3 className="mil-light">
                            {t('solutions.cyberHeadingPrefix')} <span className="mil-accent">{t('solutions.cyberAccent')}</span> {t('solutions.cyberIs')}{' '}
                            <span className="mil-accent">{t('solutions.cyberAmount')}</span> <br />
                            {t('solutions.cyberAnd')} <span className="mil-accent">{t('solutions.cyberPercent')}</span> {t('solutions.cyberPerYear')}
                        </h3>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            {/* tech stack */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('solutions.techStackSuptitle')}</span>
                    <h2 className="mil-mb-90 dark:text-white">{t('solutions.techStackHeading')}</h2>

                    <div className="row mil-grid-lines">
                        {techStack.map((tech) => (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={tech}>
                                <div className="mil-item-card dark:bg-[#1A1A20] dark:border-white/10 dark:text-white">
                                    <h6 className="dark:text-white">{tech}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* tech stack end */}
        </MainLayout>
    );
}
