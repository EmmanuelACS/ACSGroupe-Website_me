import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const tabs = [
    {
        hash: 'tab-l-1',
        label: 'Discovery & R&D',
        icon: 24,
    },
    {
        hash: 'tab-l-2',
        label: 'MVP Development',
        icon: 22,
    },
    {
        hash: 'tab-l-3',
        label: 'MVP Rollout and Testing',
        icon: 21,
    },
    {
        hash: 'tab-l-4',
        label: 'IoT Scaling',
        icon: 20,
    },
    {
        hash: 'tab-l-5',
        label: 'IoT Ecosystem Setup',
        icon: 19,
    },
];

export default function Solution3() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <MainLayout title="IA & Data en production — Access Technologies Solutions">
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
                                <Link href={route('services.service1')}>Solutions</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Mettre l&apos;IA et la donnée au travail</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* ??? */}
            <section className="mil-p-120-90">
                <div className="container">
                    <h2 className="mil-text-center mil-mb-90">
                        End-to-End <span className="mil-accent">IoT Software</span> Development
                    </h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mil-hover-card mil-box-center mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>I</h3>
                                </div>
                                <h5 className="mil-mb-30">
                                    Embedded <br />
                                    IoT Solutions
                                </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-hover-card mil-box-center mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>II</h3>
                                </div>
                                <h5 className="mil-mb-30">IoT Cloud Platforms and Dashboards</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-hover-card mil-box-center mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>III</h3>
                                </div>
                                <h5 className="mil-mb-30">
                                    IoT Mobile <br />
                                    App Development
                                </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-p-0-90">
                <div className="container">
                    <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover">
                                <img src="/img/photo/16.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">Smarthome Technology</h3>
                            <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#." className="mil-link">
                                <span>See More</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover mil-type-2">
                                <img src="/img/photo/17.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">Medical IoT</h3>
                            <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#." className="mil-link">
                                <span>See More</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row flex-sm-row-reverse justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover">
                                <img src="/img/photo/18.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">Apps For Wearables</h3>
                            <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#." className="mil-link">
                                <span>See More</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 mil-mb-30">
                            <div className="mil-project-cover">
                                <img src="/img/photo/19.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 mil-mb-30">
                            <h3 className="mil-mb-30">Industrial IoT Solutions</h3>
                            <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#." className="mil-link">
                                <span>See More</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-p-0-90">
                <div className="mil-deco" style={{ bottom: 0, right: '40%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <h2 className="mil-mb-60">
                        Industry <span className="mil-accent">Specific IoT</span> Development
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
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/12.svg" alt="icon" />
                                    </div>
                                    <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    <h6>Retail IoT</h6>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/25.svg" alt="icon" />
                                    </div>
                                    <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    <h6>Healthcare IoT</h6>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/6.svg" alt="icon" />
                                    </div>
                                    <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    <h6>IoT For Education</h6>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/23.svg" alt="icon" />
                                    </div>
                                    <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    <h6>IoT Driven Supply Chain</h6>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="row align-items-center flex-sm-row-reverse">
                        <div className="col-lg-6">
                            <div className="mil-adaptive-right mil-mb-30">
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
                        <div className="col-lg-6">
                            <a href="#." className="mil-link mil-mb-30">
                                <span>Talk to Our IoT Agent</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* left nav tabs */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Data Analytics Expertise</span>
                    <h2 className="mil-mb-90">
                        IoT Development and Implementation <span className="mil-accent">Roadmap</span>
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
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                                        alteration in some form, by injected humour, or randomised words which don&apos;t look even
                                                        slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                                        isn&apos;t anything embarrassing hidden in the middle of text.
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
                            <div className="swiper-slide">
                                <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <div className="col-lg-3 offset-lg-1">
                                        <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                            <div className="mil-circle-bg"></div>
                                            <div className="mil-image-frame">
                                                <img src="/img/faces/t6.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                                            <img src="/img/icons/sm/11.svg" alt="icon" />
                                        </div>
                                        <p className="mil-text-lg mil-light mil-mb-60">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas.
                                        </p>
                                        <h3 className="mil-light mil-mb-15">Victoria Oldman</h3>
                                        <p className="mil-light-soft">Director of Product Management</p>
                                        <p className="mil-accent">ITAgency, Inc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <div className="col-lg-3 offset-lg-1">
                                        <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                            <div className="mil-circle-bg"></div>
                                            <div className="mil-image-frame">
                                                <img src="/img/faces/t1.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                                            <img src="/img/icons/sm/11.svg" alt="icon" />
                                        </div>
                                        <p className="mil-text-lg mil-light mil-mb-60">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas.
                                        </p>
                                        <h3 className="mil-light mil-mb-15">John Doe</h3>
                                        <p className="mil-light-soft">Director of Product Management</p>
                                        <p className="mil-accent">ITAgency, Inc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row justify-content-between align-items-center" data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <div className="col-lg-3 offset-lg-1">
                                        <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                            <div className="mil-circle-bg"></div>
                                            <div className="mil-image-frame">
                                                <img src="/img/faces/t2.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                                            <img src="/img/icons/sm/11.svg" alt="icon" />
                                        </div>
                                        <p className="mil-text-lg mil-light mil-mb-60">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas.
                                        </p>
                                        <h3 className="mil-light mil-mb-15">Oscar Trueman</h3>
                                        <p className="mil-light-soft">Director of Product Management</p>
                                        <p className="mil-accent">ITAgency, Inc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mil-slider-nav justify-content-lg-center mil-reviews-btns-space">
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
                </div>
            </section>
            {/* reviews end */}
        </MainLayout>
    );
}
