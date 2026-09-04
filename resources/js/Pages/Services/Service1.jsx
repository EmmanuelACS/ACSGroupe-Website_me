import MainLayout from '@/Layouts/MainLayout';
import Partners from '@/Components/Partners';
import { Link } from '@inertiajs/react';
import { THEME_A, THEME_B } from '@/data/acsExpertise';

export default function Service1() {
    return (
        <MainLayout title="Ingénierie logicielle — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li><Link href={route('home')}>Accueil</Link></li>
                            <li><Link href={route('services.service1')}>Services</Link></li>
                        </ul>
                        <h2 className="mil-uppercase">Ingénierie logicielle &amp; Outsourcing</h2>
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
                                        <img src="/img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <h5>Nous offrons des services complets et personnalisés de développement logiciel avec des modèles flexibles d'externalisation pour vos projets.</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mb-30"><span>Get in Touch</span></a>
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
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Nos Offres</span>
                            <h2 className="mil-mb-30">{THEME_A.title}</h2>
                            <p className="mil-dark">Une gouvernance de la sécurité pensée pour accompagner durablement vos enjeux métier.</p>
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

                            <a href="#." className="mil-button mil-border mil-mb-30"><span>Tell us about your project</span></a>

                        </div>
                        <div className="col-md-6 col-xl-6">

                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></a>
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
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Safeguard Modern</span>
                        <h2>Ready To Take The Next Step?</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">

                            <div className="mil-hover-card mil-mb-30">
                                <h4 className="mil-mb-30">Get a Live Demo</h4>
                                <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.</p>
                                <a href="#." className="mil-link"><span>Request a Free Demo</span><i className="fas fa-arrow-right"></i></a>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-hover-card mil-mb-30">
                                <h4 className="mil-mb-30">Start Now</h4>
                                <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.</p>
                                <a href="#." className="mil-link"><span>Get In Touch</span><i className="fas fa-arrow-right"></i></a>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* next step end */}

            {/* partners */}
            <div className="mil-partners mil-partners-spaces">
                <div className="container">
                    <Partners />
                </div>
            </div>
            {/* partners end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* services */}
            <section className="mil-services mil-p-120-90">
                <div className="mil-deco" style={{ bottom: 0, right: '40%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Nos Offres</span>
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

                            <a href="#." className="mil-button mil-border mil-mb-30"><span>Talk To Our SaaS Experts</span></a>

                        </div>
                        <div className="col-md-6 col-xl-6">

                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></a>
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
                        <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">Always The Best</span>
                        <h2 className="mil-light mil-mb-30">Types Of <span className="mil-accent">SaaS Applications</span> We Deliver</h2>
                        <p className="mil-light-soft">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/6.svg" alt="icon" />
                                </div>
                                <p className="mil-light">CRMs Platforms</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/2.svg" alt="icon" />
                                </div>
                                <p className="mil-light">ERPs Platforms</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/7.svg" alt="icon" />
                                </div>
                                <p className="mil-light">Marketing Software</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/3.svg" alt="icon" />
                                </div>
                                <p className="mil-light">Project Management Systems</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/5.svg" alt="icon" />
                                </div>
                                <p className="mil-light">Accounting Systems</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/1.svg" alt="icon" />
                                </div>
                                <p className="mil-light">Document Auto. Solutions</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/4.svg" alt="icon" />
                                </div>
                                <p className="mil-light">Cybersecurity Platforms</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src="/img/icons/sm/8.svg" alt="icon" />
                                </div>
                                <p className="mil-light">HR/HRM Software</p>
                            </div>

                        </div>
                    </div>
                    <div className="mil-text-center">
                        <a href="#." className="mil-button mil-border mil-light mil-mb-30"><span>Talk To Our SaaS Experts</span></a>
                    </div>
                </div>
            </section>
            {/* services end */}
        </MainLayout>
    );
}
