import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const tabTextP1 =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.";
const tabTextP2 =
    'Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.';

const tabs = [
    { hash: 'tab1', icon: 2, title: 'Machine Learning', img: 't3.png' },
    { hash: 'tab2', icon: 1, title: 'Deep Learning', img: 't4.png' },
    { hash: 'tab3', icon: 11, title: 'Natural Language', img: 't2.png' },
    { hash: 'tab4', icon: 3, title: 'Computer Vision', img: 't5.png' },
];

const boxContent = [
    { h3a: 'AI Solutions To Analyze and Understand The ', h3span: 'Physical World', icon: 10, heading: 'Facial Recognition' },
    { h3a: 'Industry Specific AI Consulting and ', h3span: 'Development', icon: 11, heading: 'Artificial Intelligence' },
];

const boxSlides = [0, 1, 0, 1];

const industries = [
    { icon: 12, title: 'Retail and eCommerce' },
    { icon: 13, title: 'Education and eLearning' },
    { icon: 14, title: 'Finance and Banking' },
    { icon: 2, title: 'Life Sciences' },
];

const techStack = ['JavaScript', 'Python', 'GCloud', 'Java', 'MySQL', 'ONNX', 'Kotlin', 'Swift', 'PHP', 'MariaDB', 'AWS', 'React'];

export default function Solution1() {
    const [activeTab, setActiveTab] = useState(0);

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
                                <Link href={route('home')}>Accueil</Link>
                            </li>
                            <li>
                                <Link href={route('services.service1')}>Solutions</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Souveraineté &amp; sécurité des données</h2>
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
                                <h5>Cybermenaces, dépendance aux clouds étrangers, exigences de conformité : la maîtrise de vos données est devenue un enjeu stratégique.</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mb-30">
                                    <span>Get in Touch</span>
                                </a>
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
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Consulting and Development</span>
                        <h2>
                            AI Consulting and Development Company <br /> With <span className="mil-accent">Extensive Know How</span>
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
                                                <h5>{tab.title}</h5>
                                            </div>

                                            <div className="row mil-mb-60">
                                                <div className="col-lg-6">
                                                    <p>{tabTextP1}</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>{tabTextP2}</p>
                                                </div>
                                            </div>

                                            <a href="#." className="mil-link mil-mb-60">
                                                <span>See More</span>
                                                <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                                <div className="mil-circle-bg"></div>
                                                <div className="mil-image-frame">
                                                    <img src={`/img/faces/${tab.img}`} alt="img" />
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
                            <a href={`#${tab.hash}`} className={activeTab === i ? 'mil-active' : ''} onClick={() => setActiveTab(i)} key={tab.hash}>
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
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Artificial Intelligence Consulting</span>
                        <h2>Artificial Intelligence Solutions in Focus</h2>
                    </div>
                </div>
            </section>
            {/* title end */}

            {/* ??? */}
            <section className="mil-awards">
                <div className="row m-0">
                    <div className="col-xl-6 p-0 mil-relative">
                        <img src="/img/photo/14.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} data-swiper-parallax-scale="1.1" alt="image" />
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
                                                    <p className="mil-light-soft">
                                                        Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.
                                                    </p>
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
                        <img src="/img/photo/14.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} data-swiper-parallax-scale="1.1" alt="image" />
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
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Solutions of Consulting</span>
                            <h2>
                                <span className="mil-accent">Industry Specific</span> AI Consulting and Development
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
                                    <div className="mil-hover-card">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <img src={`/img/icons/md/${ind.icon}.svg`} alt="icon" />
                                        </div>
                                        <h5 className="mil-mb-30">{ind.title}</h5>
                                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <a href="#." className="mil-link">
                        <span>Let’s Solve Your Challenges With AI</span>
                        <i className="fas fa-arrow-right"></i>
                    </a>
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
                        <p className="mil-light mil-mb-30">Cybersecurity Ventures</p>
                        <h3 className="mil-light">
                            The Estimated Global Cost of <span className="mil-accent">Cybercrime</span> is <span className="mil-accent">$6T</span> <br />
                            and Climbing <span className="mil-accent">+ 15%</span> a Year.
                        </h3>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            {/* tech stack */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Tools</span>
                    <h2 className="mil-mb-90">
                        AI Development <span className="mil-accent">Tech Stack</span>
                    </h2>

                    <div className="row mil-grid-lines">
                        {techStack.map((tech) => (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={tech}>
                                <div className="mil-item-card">
                                    <h6>{tech}</h6>
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
