import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import Partners from '@/Components/Partners';
import { Link } from '@inertiajs/react';

const serviceCards = [
    'Data Secuity',
    'SEO and Optimazation',
    'Analytics and Research',
    'IT Management Services',
    'Web Development',
    'UI/UX Design',
];

const eventCards = [
    { img: 1, speakers: [1, 2, 3] },
    { img: 2, speakers: [1, 3] },
    { img: 3, speakers: [1, 2, 3] },
    { img: 4, speakers: [1] },
];

const courseCards = [
    { img: '/img/blog/1.jpg', price: <div className="mil-text-lg mil-bold mil-accent">Free</div> },
    { img: '/img/projects/2.jpg', price: <div className="mil-text-lg mil-dark mil-bold">$22.99 us</div> },
    {
        img: '/img/projects/1.jpg',
        price: (
            <div className="mil-text-lg mil-bold">
                <s className="mil-text-sm">$15.99 us</s> &nbsp; <span className="mil-accent">$50.99 us</span>
            </div>
        ),
    },
    { img: '/img/blog/3.jpg', price: <div className="mil-dark mil-bold">19.99 us$</div> },
];

const iconBoxes = [
    [1, 'Data Security'],
    [6, 'SEO and Optimazation'],
    [4, 'Analytics and Research'],
    [2, 'IT Management Services'],
];

const awardsBoxes = [
    { title: 'CSS Design', box2: false, extra: '' },
    { title: 'W3 Design Award', box2: true, extra: '' },
    { title: 'The FWA Award', box2: false, extra: '' },
    { title: 'WWW Awards', box2: true, extra: ' mil-pb-60-adapt' },
];

export default function Home2() {
    return (
        <MainLayout title="Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner mil-top-space-100">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: '12%' }}></div>
                <Slider
                    className="mil-banner-slider"
                    options={{
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 1500,
                        effect: 'fade',
                        parallax: true,
                        autoplay: { delay: 5000 },
                        loop: true,
                        navigation: { prevEl: '.mil-banner-prev', nextEl: '.mil-banner-next' },
                    }}
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/img/photo/4.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} data-swiper-parallax-scale="1.1" alt="image" />
                            <div className="mil-overlay"></div>

                            <div className="mil-banner-content-2" data-swiper-parallax-y="300" data-swiper-parallax-duration="600" data-swiper-parallax-opacity="0">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center mil-text-center">
                                        <div className="col-xl-8">
                                            <span className="mil-suptitle mil-mb-60">
                                                <span className="mil-light">Our</span> <span className="mil-accent">Inspiration</span>
                                            </span>
                                            <h1 className="mil-mb-50">
                                                <span className="mil-uppercase mil-light">The</span> <span className="mil-font-3 mil-accent">Freedom</span>
                                                <span className="mil-uppercase mil-light">
                                                    {' '}
                                                    to focus on <br />
                                                    improving
                                                </span>{' '}
                                                <span className="mil-font-3 mil-accent">Your</span> <span className="mil-uppercase mil-light">business or idea </span>
                                            </h1>
                                            <p className="mil-light-soft mil-mb-60">
                                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br /> molestie consequat, vel illum dolore eu feugiat nulla.
                                            </p>
                                            <div className="mil-buttons-frame mil-buttons-frame-center">
                                                <a href="#." className="mil-button mil-accent-bg">
                                                    <span>Read More</span>
                                                </a>
                                                <a href="#." className="mil-button-with-label">
                                                    <div className="mil-button mil-border mil-icon-button mil-light">
                                                        <span>
                                                            <i className="fas fa-play"></i>
                                                        </span>
                                                    </div>
                                                    <span className="mil-light">Watch Video</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/img/photo/5.jpg" className="mil-background-image" style={{ objectPosition: 'bottom' }} data-swiper-parallax-scale="1.1" alt="image" />
                            <div className="mil-overlay"></div>

                            <div
                                className="mil-banner-content-2"
                                data-swiper-parallax-y="300"
                                data-swiper-parallax-duration="600"
                                data-swiper-parallax-opacity="0"
                                data-swiper-parallax-delay="2000"
                            >
                                <div className="container">
                                    <div className="row align-items-center justify-content-center mil-text-center">
                                        <div className="col-xl-8">
                                            <span className="mil-suptitle mil-mb-60">
                                                <span className="mil-light">Our</span> <span className="mil-accent">Inspiration</span>
                                            </span>
                                            <h1 className="mil-mb-50">
                                                <span className="mil-uppercase mil-light">The</span> <span className="mil-font-3 mil-accent">Freedom</span>
                                                <span className="mil-uppercase mil-light">
                                                    {' '}
                                                    to focus on <br />
                                                    improving
                                                </span>{' '}
                                                <span className="mil-font-3 mil-accent">Your</span> <span className="mil-uppercase mil-light">business or idea </span>
                                            </h1>
                                            <p className="mil-light-soft mil-mb-60">
                                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br /> molestie consequat, vel illum dolore eu feugiat nulla.
                                            </p>
                                            <a href="#." className="mil-button mil-accent-bg">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src="/img/photo/6.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} data-swiper-parallax-scale="1.1" alt="image" />
                            <div className="mil-overlay"></div>

                            <div className="mil-banner-content-2" data-swiper-parallax-y="300" data-swiper-parallax-duration="600" data-swiper-parallax-opacity="0">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center mil-text-center">
                                        <div className="col-xl-8">
                                            <span className="mil-suptitle mil-mb-60">
                                                <span className="mil-light">Our</span> <span className="mil-accent">Inspiration</span>
                                            </span>
                                            <h1 className="mil-mb-50">
                                                <span className="mil-uppercase mil-light">The</span> <span className="mil-font-3 mil-accent">Freedom</span>
                                                <span className="mil-uppercase mil-light">
                                                    {' '}
                                                    to focus on <br />
                                                    improving
                                                </span>{' '}
                                                <span className="mil-font-3 mil-accent">Your</span> <span className="mil-uppercase mil-light">business or idea </span>
                                            </h1>
                                            <p className="mil-light-soft mil-mb-60">
                                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br /> molestie consequat, vel illum dolore eu feugiat nulla.
                                            </p>
                                            <div className="mil-buttons-frame mil-buttons-frame-center">
                                                <a href="#." className="mil-button-with-label">
                                                    <div className="mil-button mil-border mil-icon-button mil-light">
                                                        <span>
                                                            <i className="fas fa-play"></i>
                                                        </span>
                                                    </div>
                                                    <span className="mil-light">Watch Video</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

                <div className="mil-banner-nav">
                    <div className="container">
                        <div className="mil-banner-button mil-banner-prev">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="mil-banner-button mil-banner-next">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* services */}
            <section className="mil-services mil-deep-bg mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-90">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Services and Solutions</span>
                            <h2>Technological Applications</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-services-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">Prev</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-services-next">
                                        <span className="mil-h6">Next</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
                        className="mil-services-slider"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-services-prev', nextEl: '.mil-services-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {serviceCards.map((title) => (
                                <div className="swiper-slide" key={title}>
                                    <div className="mil-hover-card">
                                        <h4 className="mil-mb-30">{title}</h4>
                                        <p className="mil-mb-50">Accelerate innovation with world class tech teams our all service.</p>
                                        <div className="mil-divider mil-divider-left mil-mb-50"></div>
                                        <ul className="mil-simple-list mil-mb-50">
                                            <li>Accelerate innovation.</li>
                                            <li>With world-class tech teams.</li>
                                            <li>Our all service offerings to enhance.</li>
                                            <li>Simply drag, drop and customize.</li>
                                        </ul>
                                        <a href="#." className="mil-link">
                                            <span>Learn More</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>

            {/* call to action */}
            <section className="mil-call-to-action mil-p-120-120">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: '12%' }}></div>
                <img src="/img/photo/7.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} alt="image" />
                <div className="mil-overlay"></div>
                <div className="container">
                    <div className="mil-cta-content">
                        <span className="mil-suptitle mil-light-soft mil-suptitle-2 mil-mb-30">Our Services and Solutions</span>
                        <h2 className="mil-h1 mil-light mil-mb-30">
                            Compare <span className="mil-accent">Access Technologies Solution (ACS)</span> Plans
                        </h2>
                        <Link href={route('prices')} className="mil-link">
                            <span className="mil-light">Learn More</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* partners */}
            <div className="mil-partners mil-p-90-60">
                <div className="container">
                    <Partners />
                </div>
            </div>

            {/* events */}
            <section className="mil-events mil-deep-bg mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <div className="row align-items-end mil-mb-60-adapt">
                        <div className="col-md-4 col-xl-4">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">We Share Knowledge</span>
                            <h2 className="mil-mb-30">Virtual Events</h2>
                        </div>
                        <div className="col-md-5 col-xl-5">
                            <p className="mil-mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="col-md-3 col-xl-3">
                            <div className="mil-adaptive-right mil-mb-30">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-events-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">Prev</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-events-next">
                                        <span className="mil-h6">Next</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
                        className="mil-events-slider"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-events-prev', nextEl: '.mil-events-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {eventCards.map((ev, i) => (
                                <div className="swiper-slide" key={i}>
                                    <Link href={route('event')} className="mil-card-2">
                                        <div className="mil-cover-frame">
                                            <img src={`/img/projects/${ev.img}.jpg`} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <ul className="mil-speakers">
                                                {ev.speakers.map((s) => (
                                                    <li className="mil-speaker" key={s}>
                                                        <img src={`/img/faces/${s}.jpg`} alt="speaker" />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mil-card-title">
                                                <p className="mil-category mil-text-sm mil-mb-15">Data Security</p>
                                                <h4>Development for the next era of the Internet economy</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>

            {/* about */}
            <section className="mil-about mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 col-xl-5">
                            <div className="mil-about-illustration mil-mb-60">
                                <div className="mil-image-frame">
                                    <img src="/img/photo/8.jpg" alt="Office" />
                                </div>
                                <div className="mil-window">
                                    <ul className="mil-speakers">
                                        {[1, 2, 3, 4].map((n) => (
                                            <li className="mil-speaker" key={n}>
                                                <img src={`/img/faces/${n}.jpg`} alt="speaker" />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mil-window-bottom">
                                        <h3>4.5</h3>
                                        <div>
                                            <ul className="mil-stars">
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li className="mil-empty">
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <p className="mil-text-sm">From +5000 reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Designed for Developers</span>
                            <h2 className="mil-mb-30">Powerful and Easy</h2>
                            <p className="mil-mb-30">
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many
                                web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of
                                passages majority.
                            </p>
                            <ul className="mil-simple-list mil-mb-60">
                                <li>Accelerate innovation.</li>
                                <li>With world-class tech teams.</li>
                                <li>Our all service offerings to enhance.</li>
                                <li>Simply drag, drop and customize.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* icon boxes */}
            <section className="mil-icon-boxes mil-p-120-60">
                <div className="container">
                    <div className="row">
                        {iconBoxes.map(([n, label]) => (
                            <div className="col-md-6 col-xl-3" key={label}>
                                <div className="mil-icon-box mil-center mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                        <img src={`/img/icons/md/${n}.svg`} alt="icon" />
                                    </div>
                                    <p className="mil-text-sm mil-mb-20">{label}</p>
                                    <h5>
                                        Quis ipsum suspendisse <br />
                                        ultrices gravida
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* courses */}
            <section className="mil-courses mil-deep-bg mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
                <div className="mil-deco" style={{ bottom: 0, right: '15%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-60-adapt">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Unlimited Training</span>
                            <h2 className="mil-mb-30">Latest Courses</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <div className="mil-slider-nav mil-mb-30">
                                    <div className="mil-slider-btn-prev mil-courses-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">Prev</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-courses-next">
                                        <span className="mil-h6">Next</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
                        className="mil-courses-slider mil-mb-90"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-courses-prev', nextEl: '.mil-courses-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {courseCards.map((c, i) => (
                                <div className="swiper-slide" key={i}>
                                    <a href="#." className="mil-card">
                                        <div className="mil-cover-frame mil-mb-15">
                                            <img src={c.img} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-fw-descr">
                                                <div className="mil-card-top">
                                                    <ul className="mil-bages mil-mb-15">
                                                        <li className="mil-dark">Security</li>
                                                        <li className="mil-dark">Team</li>
                                                    </ul>
                                                    <div className="mil-stars mil-mb-15">
                                                        <span className="mil-dark">4.5</span>
                                                        <ul>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li className="mil-empty">
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mil-divider mil-divider-left mil-mb-20"></div>
                                                <h4 className="mil-mb-15">Cibersecurity Premium</h4>
                                                <p className="mil-text-sm mil-mb-15">John Stone</p>
                                                {c.price}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <a href="#." className="mil-link">
                                <span>See More Courses</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* awards */}
            <section className="mil-awards">
                <div className="row m-0">
                    <div className="col-xl-6 p-0 mil-relative">
                        <img src="/img/photo/9.jpg" className="mil-background-image" style={{ objectPosition: 'center' }} data-swiper-parallax-scale="1.1" alt="image" />
                        <div className="mil-overlay"></div>

                        <div className="mil-fake-container">
                            <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">Hard Work</span>
                            <h2 className="mil-light mil-mb-30">
                                Our <span className="mil-accent">Awards</span> and Tecognitions
                            </h2>
                            <p className="mil-light-soft mil-mb-30">
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many
                                web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                            </p>
                            <a href="#." className="mil-link">
                                <span className="mil-light">About us</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 p-0">
                        <div className="row m-0">
                            {awardsBoxes.map((box) => (
                                <div className="col-md-6 col-xl-6 p-0" key={box.title}>
                                    <div className={`mil-awards-box${box.box2 ? ' mil-box-2' : ''}${box.extra} mil-gradient-bg`}>
                                        <div className="mil-icon-box mil-center">
                                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                                <img src="/img/icons/md/6l.svg" alt="icon" />
                                            </div>
                                            <h5 className="mil-light mil-mb-20">{box.title}</h5>
                                            <p className="mil-text-sm mil-light-soft">Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
