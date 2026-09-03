import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const projects = [
    { img: 1, name: 'Jane Meldrum' },
    { img: 2, name: 'Nguta Ithya' },
    { img: 3, name: 'Roy Bricks' },
    { img: 4, name: 'Nguta Ithya' },
];

const tabs = [
    { hash: 'tab-l-1', label: 'Discovery & R&D' },
    { hash: 'tab-l-2', label: 'UX/UI Design' },
    { hash: 'tab-l-3', label: 'Development' },
    { hash: 'tab-l-4', label: 'QA' },
    { hash: 'tab-l-5', label: 'Launch' },
    { hash: 'tab-l-6', label: 'Maintenance & Support' },
];

export default function Service3() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <MainLayout title="Cloud & Infrastructure — Access Technologies Solutions">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>Accueil</Link>
                            </li>
                            <li>
                                <Link href={route('services.service1')}>Services</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Infrastructure & Cloud sur mesure</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* ??? */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Data Analytics Expertise</span>
                        <h2 className="mil-mb-30">
                            Custom <span className="mil-accent">App Solutions</span> For any Mobile Platform
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/22.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">Android Platform</h5>
                                <p className="mil-mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis.
                                </p>
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
                                <h5 className="mil-mb-20">Android Platform</h5>
                                <p className="mil-mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis.
                                </p>
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
                                <h5 className="mil-mb-20">Cross Platform</h5>
                                <p className="mil-mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis.
                                </p>
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
                            <h2 className="mil-mb-30">Latest Projects</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <div className="mil-slider-nav mil-mb-30">
                                    <div className="mil-slider-btn-prev mil-works-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">Prev</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-works-next">
                                        <span className="mil-h6">Next</span>
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
                            {projects.map((p, i) => (
                                <div className="swiper-slide" key={i}>
                                    <Link href={route('project')} className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src={`/img/projects/${p.img}.jpg`} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">Easy &amp; Most Powerful Server Platform.</h4>
                                                <h6>
                                                    by: <span className="mil-accent">{p.name}</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                <span>View All Cases</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                    <span>Start Your Innovation Journey</span>
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
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">All Devices</span>
                    <h2 className="mil-mb-90">
                        <span className="mil-accent">End-to-End</span> Mobile Development Services
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
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                                                        humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                                                        to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
                                                    </p>
                                                </div>
                                                <Link href={route('about')} className="mil-link">
                                                    <span>See More</span>
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
                            Delivering <span className="mil-accent">Industry Specific</span> Mobile <br />
                            App Solutions
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/23.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">eCcommerce</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/24.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">Entertainment</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/6.svg" alt="icon" />
                                </div>
                                <h5 className="mil-mb-20">Enterprise</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis. </p>
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
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Tech, Business and Talents</span>
                            <h2 className="mil-mb-30">
                                Next <span className="mil-accent">Gen Tech</span> For Mobile App Development
                            </h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                    <span>Learn More</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/1.svg" alt="icon" />
                                </div>
                                <h6>Cloud</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/11.svg" alt="icon" />
                                </div>
                                <h6>AI / ML</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/2.svg" alt="icon" />
                                </div>
                                <h6>AR / VR</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/4.svg" alt="icon" />
                                </div>
                                <h6>IoT</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}
        </MainLayout>
    );
}
