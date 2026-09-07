import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { ABOUT_TEXT, STATS } from '@/data/acsExpertise';
import { useLanguage } from '@/Context/LanguageContext';
import ContactSection from '@/Components/ContactSection';
import Button from '@/Components/Button';

export default function About() {
    const { t, language } = useLanguage();
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        first_name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null,
    });

    useEffect(() => {
        console.info('[Language] Rendering contact/global page in:', language);
    }, [language]);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), { forceFormData: true });
    };

    const checklist = t('about.checklist', []);
    const features = t('about.features', []);
    const featureIcons = [6, 10, 2, 4, 5];
    const values = t('about.values', []);

    return (
        <MainLayout title="A propos — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>{t('about.breadcrumbHome')}</Link>
                            </li>
                            <li>
                                <Link href={route('about')}>{t('about.breadcrumbLabel')}</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">{t('about.bannerTitle')}</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* call to action */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <h4 className="mil-mb-60">{t('about.heroLine')}</h4>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Button variant="secondary" href={route('contact')} className="mil-mr-15 mil-mb-30">
                                    {t('about.talkToExpert')}
                                </Button>
                                <a href="#." className="mil-button-with-label mil-mb-60">
                                    <div className="mil-button mil-border mil-icon-button">
                                        <span>
                                            <i className="fas fa-play"></i>
                                        </span>
                                    </div>
                                    <span className="mil-dark">{t('about.watchVideo')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            {/* about */}
            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, left: '35%' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mil-mb-60">
                            <div className="mil-circle-illustration">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img
                                        src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=700&h=850&fit=crop&crop=faces&auto=format&q=80"
                                        alt="Professionnelle tech chez Access Technologies Solution (ACS)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('about.whoWeAreSuptitle')}</span>
                            <h2 className="mil-mb-50">
                                {t('about.whoWeAreHeadingLine1')} <br />
                                <span className="mil-accent">{t('about.whoWeAreHeadingAccent')}</span>
                                <br /> {t('about.whoWeAreHeadingLine2')}
                            </h2>

                            <p className="mil-mb-50">{ABOUT_TEXT}</p>

                            <div className="row align-items-end">
                                <div className="col-xl-7">
                                    <ul className="mil-check-icon-list mil-mb-60">
                                        {checklist.map((item) => (
                                            <li key={item}>
                                                <img src="/img/icons/sm/12.svg" alt="icon" />
                                                <span className="mil-dark">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-xl-5">
                                    <Link href={route('team.single')} className="mil-post-sm mil-mb-60">
                                        <div className="mil-cover-frame">
                                            <img
                                                src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&h=200&fit=crop&crop=faces&auto=format&q=80"
                                                alt={t('about.founderName')}
                                            />
                                        </div>
                                        <div className="mil-description">
                                            <h4 className="mil-font-3 mil-accent">{t('about.founderName')}</h4>
                                            <p className="mil-text-sm">{t('about.founderRole')}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* counters */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, left: '25%' }}></div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="mil-h1">
                                35<span className="mil-accent">+</span>
                            </div>
                            <h6 className="mil-mb-60">{t('about.professionalsLabel')}</h6>

                            <h2 className="mil-mb-60">{t('about.statsHeading')}</h2>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mil-mb-60">{t('about.statsText')}</h3>

                            <div className="row">
                                {STATS.map((stat) => (
                                    <div className="col-lg-6" key={stat.label}>
                                        <h6 className="mil-mb-30">
                                            <span className="mil-accent">{stat.value}</span>&nbsp; {stat.label}
                                        </h6>

                                        <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* counters end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* director's word */}
            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mil-mb-60">
                            <div className="mil-circle-illustration">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img
                                        src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=700&h=850&fit=crop&crop=faces&auto=format&q=80"
                                        alt={t('about.founderName')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mil-mb-60">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('about.directorWordSuptitle')}</span>
                            <h2 className="mil-mb-50">{t('about.directorWordTitle')}</h2>
                            <p className="mil-mb-50">{t('about.directorWordText')}</p>
                            <h4 className="mil-font-3 mil-accent mil-mb-5">{t('about.directorWordSignatureName')}</h4>
                            <p className="mil-text-sm">{t('about.directorWordSignatureRole')}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* director's word end */}

            {/* mission */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mil-mb-60">
                            <div className="mil-circle-illustration">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img
                                        src="https://images.unsplash.com/photo-1679117349740-c46c819d0373?w=700&h=850&fit=crop&crop=faces&auto=format&q=80"
                                        alt="Expert IT chez Access Technologies Solution (ACS)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mil-mb-60">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('about.missionSuptitle')}</span>
                            <h2 className="mil-mb-50">{t('about.missionHeading')}</h2>

                            <p className="mil-mb-50">{t('about.missionText')}</p>

                            <ul className="mil-simple-list">
                                {t('about.missionList', []).map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* mission end */}

            {/* features */}
            <section className="mil-p-120-120">
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('about.whySuptitle')}</span>
                    <h2 className="mil-mb-120">{t('about.whyHeading')}</h2>

                    <div className="mil-divider"></div>
                    {features.map((feature, i) => (
                        <div key={feature.title}>
                            <div className="mil-line-icon-box">
                                <div className="row align-items-center">
                                    <div className="col-xl-2">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <img src={`/img/icons/md/${featureIcons[i]}.svg`} alt="icon" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <h4 className="mil-mb-30">{feature.title}</h4>
                                    </div>
                                    <div className="col-xl-6">
                                        <p className="mil-box-text mil-mb-30">{feature.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mil-divider"></div>
                        </div>
                    ))}
                </div>
            </section>
            {/* features end */}

            {/* values */}
            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('about.valuesSuptitle')}</span>
                    <h2 className="mil-mb-120">
                        {t('about.valuesHeadingLine1')} <span className="mil-accent">{t('about.valuesHeadingAccent')}</span>
                    </h2>

                    <div className="row">
                        {values.map((value) => (
                            <div className="col-md-6 col-xl-4" key={value.title}>
                                <div className="mil-icon-box-2 mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/10.svg" alt="icon" />
                                    </div>
                                    <div className="mil-box-text">
                                        <h4 className="mil-mb-30">{value.title}</h4>
                                        <p className="mil-box-text">{value.text}</p>
                                    </div>
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
