import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { THEME_C, THEME_D } from '@/data/acsExpertise';
import { useLanguage } from '@/Context/LanguageContext';

const processIcons = ['1', '4', '10', '13'];
const processItems = THEME_C.offers.map((title, i) => [processIcons[i % processIcons.length], title]);

const techStack = ['Figma', 'Photoshop', 'Sketch', 'Adobe XD', 'Zeppelin', 'Illustrator', 'Kotlin', 'Swift', 'PHP', 'MariaDB', 'AWS', 'React'];

const enterpriseExtraClasses = ['mil-circle', 'mil-lines', ''];
const enterpriseItems = THEME_D.offers.map((title, i) => [String(i + 1).padStart(2, '0'), enterpriseExtraClasses[i % enterpriseExtraClasses.length], title]);

const tabImgs = ['t5', 't4', 't3', 't2'];

const reviews = [
    { face: 't6', name: 'Victoria Oldman' },
    { face: 't1', name: 'John Doe' },
    { face: 't2', name: 'Oscar Trueman' },
];

const projects = [
    { img: 1, name: 'Jane Meldrum' },
    { img: 2, name: 'Nguta Ithya' },
    { img: 3, name: 'Roy Bricks' },
    { img: 4, name: 'Nguta Ithya' },
];

export default function Service2() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState('tab1');

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    const tabs = t('service2.tabs', []).map((tab, i) => ({ id: `tab${i + 1}`, label: tab.label, text1: tab.text1, text2: tab.text2, img: tabImgs[i] }));

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
        <MainLayout title="Transformation digitale — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li><Link href={route('home')}>{t('nav.home')}</Link></li>
                            <li><Link href={route('services.service1')}>{t('nav.services')}</Link></li>
                        </ul>
                        <h2 className="mil-uppercase">{t('service2.bannerTitle')}</h2>
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
                                        <img src="/img/icons/md/13.svg" alt="icon" />
                                    </div>
                                </div>
                                <h5>{t('service2.introText')}</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30"><span>{t('service2.hireDesigners')}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* process */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('common.ourOffers')}</span>
                    <h2 className="mil-mb-120">{THEME_C.title}</h2>

                    <div className="row">
                        {processItems.map(([icon, title]) => (
                            <div className="col-md-6 col-xl-4" key={title}>
                                <div className="mil-icon-box-2 mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src={`/img/icons/md/${icon}.svg`} alt="icon" />
                                    </div>
                                    <div className="mil-box-text">
                                        <h4 className="mil-mb-30">{title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* process end */}

            {/* call to action */}
            <section className="mil-call-to-action mil-p-120-90">
                <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: '35%', transform: 'rotate(180deg)' }}></div>
                <img src="/img/photo/15.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} alt="image" />
                <div className="mil-overlay"></div>
                <div className="container mil-relative">
                    <div className="row">
                        <div className="col-lg-6 mil-mb-30">
                            <h3 className="mil-light mil-mb-15">{t('service2.ctaHeadingLine1')} <span className="mil-accent">{t('service2.ctaHeadingAccent')}</span> {t('service2.ctaHeadingLine2')}</h3>
                            <p className="mil-light-soft">{t('service2.ctaText')}</p>
                        </div>
                        <div className="col-lg-6 mil-mb-30">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-light"><span>{t('common.getStarted')}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            {/* tech stack */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service2.toolsSuptitle')}</span>
                    <h2 className="mil-mb-90">{t('service2.toolsHeading')} <span className="mil-accent">{t('service2.toolsHeadingAccent')}</span></h2>

                    <div className="row mil-grid-lines">
                        {techStack.map((name) => (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={name}>
                                <div className="mil-item-card">
                                    <h6>{name}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* tech stack end */}

            {/* ??? */}
            <section className="mil-gradient-bg mil-p-120-60">
                <div className="container">
                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30 mil-light">{t('common.ourOffers')}</span>
                        <h2 className="mil-light">{THEME_D.title}</h2>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        {enterpriseItems.map(([num, extraClass, title]) => (
                            <div className="col-xl-4" key={num}>
                                <div className="mil-mb-60">
                                    <div className={`mil-number-icon mil-light${extraClass ? ` ${extraClass}` : ''} mil-mb-30`}>
                                        <span>{num}</span>
                                    </div>
                                    <h4 className="mil-light mil-mb-15">{title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* steps */}
            <section className="mil-deep-bg mil-p-120-0">
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service2.deliverSuptitle')}</span>
                    <h2 className="mil-mb-120">{t('service2.deliverHeading')} <span className="mil-accent">{t('service2.deliverHeadingAccent')}</span></h2>

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
                                <div className="swiper-slide" data-hash={tab.id} key={tab.id}>
                                    <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                        <div className="col-lg-7">
                                            <div className="mil-hori-box mil-mb-60">
                                                <h3>{tab.label}</h3>
                                            </div>

                                            <div className="row mil-mb-60">
                                                <div className="col-lg-6">
                                                    <p>{tab.text1}</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>{tab.text2}</p>
                                                </div>
                                            </div>

                                            <Link href={route('contact')} className="mil-button mil-border mil-mb-15 mil-mr-30"><span>{t('service2.hireDesigners')}</span></Link>
                                            <Link href={route('contact')} className="mil-link mil-mb-60"><span>{t('common.seeMore')}</span><i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                                <div className="mil-circle-bg"></div>
                                                <div className="mil-image-frame">
                                                    <img src={`/img/faces/${tab.img}.png`} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>

                    <div className="mil-tab-buttons mil-mt-60-adapt">
                        {tabs.map((tab) => (
                            <a
                                href={`#${tab.id}`}
                                className={activeTab === tab.id ? 'mil-active' : ''}
                                onClick={() => setActiveTab(tab.id)}
                                key={tab.id}
                            >
                                <span>{tab.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            {/* steps end */}

            {/* reviews */}
            <section className="mil-gradient-bg mil-p-120-120">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '30%' }}></div>
                <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: '10%', transform: 'rotate(180deg)' }}></div>
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
                            {reviews.map((r, i) => (
                                <div className="swiper-slide" key={i}>
                                    <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                        <div className="col-lg-3 offset-lg-1">
                                            <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                                <div className="mil-circle-bg"></div>
                                                <div className="mil-image-frame">
                                                    <img src={`/img/faces/${r.face}.png`} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                                                <img src="/img/icons/sm/11.svg" alt="icon" />
                                            </div>

                                            <p className="mil-text-lg mil-light mil-mb-60">{t('service2.reviewText')}</p>

                                            <h3 className="mil-light mil-mb-15">{r.name}</h3>
                                            <p className="mil-light-soft">{t('service2.reviewRole')}</p>
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
                                <div className="mil-slider-btn-prev mil-box-prev mil-light"><i className="fas fa-arrow-left"></i><span className="mil-h6">{t('common.prev')}</span></div>
                                <div className="mil-slider-btn-next mil-box-next mil-light"><span className="mil-h6">{t('common.next')}</span><i className="fas fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* reviews end */}

            {/* portfolio */}
            <section className="mil-works mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-60-adapt">
                        <div className="col-md-6 col-xl-6">
                            <h2 className="mil-mb-30">{t('home.portfolio.heading')}</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <div className="mil-slider-nav mil-mb-30">
                                    <div className="mil-slider-btn-prev mil-works-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">{t('common.prev')}</span></div>
                                    <div className="mil-slider-btn-next mil-works-next"><span className="mil-h6">{t('common.next')}</span><i className="fas fa-arrow-right"></i></div>
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
                            {projects.map((p, i) => (
                                <div className="swiper-slide" key={i}>
                                    <Link href={route('project')} className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src={`/img/projects/${p.img}.jpg`} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">{t('home.portfolio.cardTitle')}</h4>
                                                <h6>{t('home.portfolio.cardBy')} <span className="mil-accent">{p.name}</span></h6>
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
                            <Link href={route('portfolio')} className="mil-link mil-mb-30"><span>{t('home.portfolio.viewAllCases')}</span><i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30"><span>{t('common.getStarted')}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio end */}

            {/* contact */}
            <section className="mil-contact mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">{t('sections.contactTitle')}</h2>
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mil-input-frame mil-mb-30">
                                    <label><span className="mil-light">{t('home.contactForm.name')}</span><span className="mil-accent">{t('home.contactForm.required')}</span></label>
                                    <input
                                        type="text"
                                        placeholder={t('home.contactForm.namePlaceholder')}
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                    />
                                    {errors.first_name && <p className="mil-text-sm mil-accent">{errors.first_name}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-30">
                                    <label><span className="mil-light">{t('home.contactForm.emailAddress')}</span><span className="mil-accent">{t('home.contactForm.required')}</span></label>
                                    <input type="email" id="email" placeholder={t('home.contactForm.emailPlaceholder')} value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    {errors.email && <p className="mil-text-sm mil-accent">{errors.email}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-60">
                                    <label><span className="mil-light">{t('home.contactForm.phone')}</span><span className="mil-light-soft">{t('home.contactForm.optional')}</span></label>
                                    <input type="number" placeholder={t('home.contactForm.phonePlaceholder')} value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                </div>
                                <div className="mil-attach-frame mil-mb-60">
                                    <i className="fas fa-paperclip"></i>
                                    <label className={`mil-custom-file-input${data.attachment ? ' mil-with-file' : ''}`}>
                                        <span>{data.attachment ? data.attachment.name : t('home.contactForm.attachFile')}</span>
                                        <input type="file" id="mil-file-input" onChange={(e) => setData('attachment', e.target.files[0] ?? null)} />
                                    </label>
                                    <p className="mil-text-sm mil-light-soft">{t('home.contactForm.upTo20MB')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mil-input-frame mil-mb-30">
                                    <label><span className="mil-light">{t('home.contactForm.emailAddress')}</span><span className="mil-accent">{t('home.contactForm.required')}</span></label>
                                    <textarea placeholder={t('home.contactForm.messagePlaceholder')} value={data.message} onChange={(e) => setData('message', e.target.value)}></textarea>
                                    {errors.message && <p className="mil-text-sm mil-accent">{errors.message}</p>}
                                </div>
                                <p className="mil-text-sm mil-light-soft mil-mb-15">{t('home.contactForm.privacyNotice')}</p>

                                <div className="mil-checbox-frame mil-mb-60">
                                    <input className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" />
                                    <label htmlFor="checkbox-1" className="mil-text-sm mil-light">{t('home.contactForm.consentPrefix')} <a href="#." className="mil-accent">{t('home.contactForm.consentLink')}</a></label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="mil-button mil-accent-bg mil-fw" disabled={processing}>
                                    <span>{recentlySuccessful ? t('home.contactForm.messageSent') : t('cta.sendMessageNow')}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* contact end */}
        </MainLayout>
    );
}
