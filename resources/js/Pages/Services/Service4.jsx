import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { SERVICE4_COURSES as COURSES, THEME_E, THEME_F } from '@/data/acsExpertise';
import { useLanguage } from '@/Context/LanguageContext';
import ContactSection from '@/Components/ContactSection';
import PageHeader from '@/Components/UI/PageHeader';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

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
            <PageHeader
                title={t('service4.pageTitle')}
                breadcrumbs={[
                    { label: t('nav.home'), href: route('home') },
                    { label: t('nav.services'), href: route('services.service1') },
                ]}
            />
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
                                        src="https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?auto=format&fit=crop&w=900&q=80"
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

            <ContactSection data={data} setData={setData} errors={errors} processing={processing} recentlySuccessful={recentlySuccessful} onSubmit={submit} />
        </MainLayout>
    );
}
