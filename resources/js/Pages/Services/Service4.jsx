import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { THEME_E, THEME_F } from '@/data/acsExpertise';
import { useLanguage } from '@/Context/LanguageContext';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

const COURSES = [
    { img: '/img/blog/1.jpg', priceKey: 'free' },
    { img: '/img/projects/2.jpg', price: '$22.99 us' },
    { img: '/img/projects/1.jpg', price: '$50.99 us', oldPrice: '$15.99 us' },
    { img: '/img/blog/3.jpg', price: '19.99 us$' },
];

export default function Service4() {
    const { t, language } = useLanguage();
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        first_name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null,
    });

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), { forceFormData: true });
    };

    return (
        <MainLayout title="Intelligence Artificielle — Access Technologies Solution (ACS)">
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
                        <h2 className="mil-uppercase">{t('service4.pageTitle')}</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* about */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ bottom: 0, right: '20%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-4">
                            <div className="mil-circle-illustration mil-with-dots-2 mil-mb-60" data-swiper-parallax-scale=".8">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img
                                        src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=700&h=850&fit=crop&crop=faces&auto=format&q=80"
                                        alt="Expert en cybersécurité — Access Technologies Solution (ACS)"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <h2 className="mil-mb-30">
                                {t('service4.bannerHeading')} <span className="mil-accent">{t('service4.bannerHeadingAccent')}</span> {t('service4.bannerHeadingSuffix')}
                            </h2>
                            <div className="mil-hori-box mil-mb-30">
                                <div className="mil-mr-30">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                                        <img src="/img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <p>{t('service4.bannerText')}</p>
                            </div>
                            <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                <span>{t('common.getInTouch')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* ??? */}
            <section className="mil-p-120-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('common.ourOffers')}</span>
                            <h2 className="mil-mb-30">
                                {THEME_E.title}
                            </h2>
                            <p className="mil-mb-90">{t('service4.offersIntro')}</p>
                        </div>
                    </div>
                    <div className="row">
                        {THEME_E.offers.map((label, i) => (
                            <div className="col-xl-4" key={label}>
                                <div className="mil-hover-card mil-box-center mil-mb-30">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <h3>{ROMAN[i]}</h3>
                                    </div>
                                    <h5 className="mil-mb-30">{label}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-deep-bg mil-p-120-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('common.ourOffers')}</span>
                            <h2 className="mil-mb-90">
                                {THEME_F.title}
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {THEME_F.offers.map((label, i) => (
                            <div className="col-xl-3 mil-mb-30" key={label}>
                                <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>{ROMAN[i]}</h3>
                                </div>
                                <h5 className="mil-mb-30">{label}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-gradient-bg mil-p-120-90">
                <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: '20%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-4">
                            <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">{t('service4.exploreSuptitle')}</span>
                            <h2 className="mil-light mil-mb-90">
                                {t('service4.riskHeadingPrefix')} <span className="mil-accent">{t('service4.riskHeadingAccent')}</span> {t('service4.riskHeadingSuffix')}
                            </h2>
                        </div>
                        <div className="col-xl-7 mil-mb-30">
                            <p className="mil-light-soft mil-mb-30">{t('service4.riskText')}</p>
                            <Link href={route('contact')} className="mil-button mil-border mil-light">
                                <span>{t('service4.startNow')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* courses */}
            <section className="mil-courses mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-60-adapt">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service4.coursesSuptitle')}</span>
                            <h2 className="mil-mb-30">{t('service4.coursesHeading')}</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <div className="mil-slider-nav mil-mb-30">
                                    <div className="mil-slider-btn-prev mil-courses-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">{t('common.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-courses-next">
                                        <span className="mil-h6">{t('common.next')}</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
                        className="mil-courses-slider mil-mb-30"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-courses-prev', nextEl: '.mil-courses-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {COURSES.map((course, i) => (
                                <div className="swiper-slide" key={course.img}>
                                    <a href="#." className="mil-card">
                                        <div className="mil-cover-frame mil-mb-15">
                                            <img src={course.img} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-fw-descr">
                                                <div className="mil-card-top">
                                                    <ul className="mil-bages mil-mb-15">
                                                        <li className="mil-dark">{t('service4.badgeSecurity')}</li>
                                                        <li className="mil-dark">{t('service4.badgeTeam')}</li>
                                                    </ul>
                                                    <div className="mil-stars mil-mb-15">
                                                        <span className="mil-dark">4.5</span>
                                                        <ul>
                                                            {[1, 2, 3, 4].map((s) => (
                                                                <li key={s}>
                                                                    <i className="fas fa-star"></i>
                                                                </li>
                                                            ))}
                                                            <li className="mil-empty">
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mil-divider mil-divider-left mil-mb-20"></div>
                                                <h4 className="mil-mb-15">{t('service4.courseTitle')}</h4>
                                                <p className="mil-text-sm mil-mb-15">John Stone</p>
                                                {course.priceKey ? (
                                                    <div className="mil-text-lg mil-bold mil-accent">{t('service4.free')}</div>
                                                ) : course.oldPrice ? (
                                                    <div className="mil-text-lg mil-bold">
                                                        <s className="mil-text-sm">{course.oldPrice}</s> &nbsp; <span className="mil-accent">{course.price}</span>
                                                    </div>
                                                ) : i === 1 ? (
                                                    <div className="mil-text-lg mil-dark mil-bold">{course.price}</div>
                                                ) : (
                                                    <div className="mil-dark mil-bold">{course.price}</div>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>
            {/* courses end */}

            {/* contact */}
            <section className="mil-contact mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">{t('sections.contactTitle')}</h2>
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.name')}</span>
                                        <span className="mil-accent">{t('home.contactForm.required')}</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={t('home.contactForm.namePlaceholder')}
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                    />
                                    {errors.first_name && <p className="mil-text-sm mil-accent">{errors.first_name}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.emailAddress')}</span>
                                        <span className="mil-accent">{t('home.contactForm.required')}</span>
                                    </label>
                                    <input type="email" id="email" placeholder={t('home.contactForm.emailPlaceholder')} value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    {errors.email && <p className="mil-text-sm mil-accent">{errors.email}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-60">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.phone')}</span>
                                        <span className="mil-light-soft">{t('home.contactForm.optional')}</span>
                                    </label>
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
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.emailAddress')}</span>
                                        <span className="mil-accent">{t('home.contactForm.required')}</span>
                                    </label>
                                    <textarea placeholder={t('home.contactForm.messagePlaceholder')} value={data.message} onChange={(e) => setData('message', e.target.value)}></textarea>
                                    {errors.message && <p className="mil-text-sm mil-accent">{errors.message}</p>}
                                </div>
                                <p className="mil-text-sm mil-light-soft mil-mb-15">{t('home.contactForm.privacyNotice')}</p>

                                <div className="mil-checbox-frame mil-mb-60">
                                    <input className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" />
                                    <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                                        {t('home.contactForm.consentPrefix')}{' '}
                                        <a href="#." className="mil-accent">
                                            {t('home.contactForm.consentLink')}
                                        </a>
                                    </label>
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
