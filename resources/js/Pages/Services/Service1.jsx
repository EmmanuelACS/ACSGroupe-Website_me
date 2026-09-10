import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { useEffect } from 'react';
import { THEME_A, THEME_B } from '@/data/acsExpertise';
import { useLanguage } from '@/Context/LanguageContext';
import PageHeader from '@/Components/UI/PageHeader';

export default function Service1() {
    const { t, language } = useLanguage();

    useEffect(() => {
        console.info('[Language] Loaded page translation for:', window.location.pathname, 'in language:', language);
    }, [language]);

    return (
        <MainLayout title="Ingénierie logicielle — Access Technologies Solution (ACS)">
            {/* banner */}
            <PageHeader
                title={t('service1.bannerTitle')}
                breadcrumbs={[
                    { label: t('nav.home'), href: route('home') },
                    { label: t('nav.services'), href: route('services.service1') },
                ]}
            />
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
                                        <img src="/img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <h5>{t('service1.introText')}</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30"><span>{t('common.getInTouch')}</span></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* steps */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ bottom: 0, right: '35%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mil-mb-90">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('common.ourOffers')}</span>
                            <h2 className="mil-mb-30">{THEME_A.title}</h2>
                            <p className="mil-dark">{t('service1.offersIntro')}</p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        {THEME_A.offers.map((offer, i) => (
                            <div className="col-xl-4" key={offer}>
                                <div className="mil-mb-60">
                                    <div className={`mil-number-icon${i % 3 === 0 ? ' mil-circle' : i % 3 === 1 ? ' mil-lines' : ''} mil-mb-30`}>
                                        <span>{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h4 className="mil-mb-15">{offer}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">

                            <Link href={route('contact')} className="mil-button mil-border mil-mb-30"><span>{t('service1.tellUsProject')}</span></Link>

                        </div>
                        <div className="col-md-6 col-xl-6">

                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-link mil-mb-30"><span>{t('common.seeMore')}</span><i className="fas fa-arrow-right"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* steps end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* next step */}
            <section className="mil-p-120-0">
                <div className="container">

                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('service1.nextStepSuptitle')}</span>
                        <h2>{t('service1.nextStepHeading')}</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">

                            <div className="mil-hover-card mil-mb-30">
                                <h4 className="mil-mb-30">{t('service1.demoTitle')}</h4>
                                <p className="mil-mb-30">{t('service1.demoText')}</p>
                                <Link href={route('contact')} className="mil-link"><span>{t('service1.requestDemo')}</span><i className="fas fa-arrow-right"></i></Link>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-hover-card mil-mb-30">
                                <h4 className="mil-mb-30">{t('service1.startNowTitle')}</h4>
                                <p className="mil-mb-30">{t('service1.startNowText')}</p>
                                <Link href={route('contact')} className="mil-link"><span>{t('common.getInTouch')}</span><i className="fas fa-arrow-right"></i></Link>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* next step end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* services */}
            <section className="mil-services mil-p-120-90">
                <div className="mil-deco" style={{ bottom: 0, right: '40%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('common.ourOffers')}</span>
                    <h2 className="mil-mb-90">{THEME_B.title}</h2>
                    <div className="row mil-mb-30-adapt">
                        {THEME_B.offers.map((offer, i) => (
                            <div className="col-lg-6 col-xl-6" key={offer}>
                                <div className="mil-service-item mil-without-lines mil-mb-60">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src={`/img/icons/md/${i + 1}.svg`} alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30"><span className="mil-accent">{String(i + 1).padStart(2, '0')}</span> {offer}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">

                            <Link href={route('contact')} className="mil-button mil-border mil-mb-30"><span>{t('service1.talkToSaasExperts')}</span></Link>

                        </div>
                        <div className="col-md-6 col-xl-6">

                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-link mil-mb-30"><span>{t('common.seeMore')}</span><i className="fas fa-arrow-right"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* services end */}

            {/* services */}
            <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: '5%' }}></div>
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">{t('service1.saasSuptitle')}</span>
                        <h2 className="mil-light mil-mb-30">{t('service1.saasHeadingPrefix')} <span className="mil-accent">{t('service1.saasHeadingAccent')}</span> {t('service1.saasHeadingSuffix')}</h2>
                        <p className="mil-light-soft">{t('service1.saasText')}</p>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        {t('service1.saasTypes', []).map((type, i) => (
                            <div className="col-lg-3" key={type}>

                                <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                        <img src={`/img/icons/sm/${[6, 2, 7, 3, 5, 1, 4, 8][i]}.svg`} alt="icon" />
                                    </div>
                                    <p className="mil-light">{type}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="mil-text-center">
                        <Link href={route('contact')} className="mil-button mil-border mil-light mil-mb-30"><span>{t('service1.talkToSaasExperts')}</span></Link>
                    </div>
                </div>
            </section>
            {/* services end */}
        </MainLayout>
    );
}
