import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';

const reviews = [
    { face: '/img/staff/1H5A0308.jpg', name: 'Margaret Williams' },
    { face: '/img/staff/1H5A0333.jpg', name: 'Tamzyn French' },
    { face: '/img/staff/1H5A0381.jpg', name: 'Margaret Williams' },
    { face: '/img/staff/1H5A0543.jpg', name: 'Tamzyn French' },
    { face: '/img/staff/1H5A0308.jpg', name: 'Margaret Williams' },
];

export default function Prices() {
    return (
        <MainLayout title="Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home2')}>Accueil</Link>
                            </li>
                            <li>
                                <Link href={route('prices')}>Pricing</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Pricing and plans</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* prices */}
            <section className="mil-prices mil-p-120-0">
                <div className="container">
                    <h3 className="mil-text-center mil-mb-120">
                        Get <span className="mil-accent">2 months</span> free by choosing Access Technologies Solution (ACS) annual plan
                    </h3>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="mil-hover-card mil-price-card mil-mb-30">
                                <p className="mil-mb-15">For People</p>
                                <h2>PLUS</h2>
                                <div className="mil-plan-price mil-mb-15">
                                    <h3 className="mil-accent">$9</h3>
                                    <span>Per Month</span>
                                </div>
                                <p className="mil-text-sm mil-mb-60">2TB (2000 GB), 1 User</p>
                                <a href="#." className="mil-button mil-border mil-fw mil-mb-60">
                                    <span>Get Started</span>
                                </a>
                                <ul className="mil-check-list">
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                    <li className="mil-empty">There many variations of passages</li>
                                    <li className="mil-empty">All the lorem ipsum generators</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-hover-card mil-price-card mil-mb-30">
                                <p className="mil-mb-15">For Independent Workers</p>
                                <h2>PRO</h2>
                                <div className="mil-plan-price mil-mb-15">
                                    <h3 className="mil-accent">$99</h3>
                                    <span>Per Month</span>
                                </div>
                                <p className="mil-text-sm mil-mb-60">4TB (4000 GB), 4 User</p>
                                <a href="#." className="mil-button mil-border mil-fw mil-mb-60">
                                    <span>Get Started</span>
                                </a>
                                <ul className="mil-check-list">
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                    <li>There many variations of passages</li>
                                    <li className="mil-empty">All the lorem ipsum generators</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-hover-card mil-price-card mil-mb-30">
                                <p className="mil-mb-15">Startup</p>
                                <h2>GOLD</h2>
                                <div className="mil-plan-price mil-mb-15">
                                    <h3 className="mil-accent">$299</h3>
                                    <span>Per Month</span>
                                </div>
                                <p className="mil-text-sm mil-mb-60">All the necessary space, Unlimited</p>
                                <a href="#." className="mil-button mil-border mil-fw mil-mb-60">
                                    <span>Get Started</span>
                                </a>
                                <ul className="mil-check-list">
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                    <li>There many variations of passages</li>
                                    <li>All the lorem ipsum generators</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lx-12 mil-p-90-120">
                            <h3 className="mil-text-center">
                                Do you only need <span className="mil-accent">9GB</span> to save and share your files?
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* prices end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* reviews */}
            <section className="mil-reviews mil-p-120-120">
                <div className="container">
                    <Slider
                        className="mil-revi-slider-2"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            autoplay: { delay: 5000 },
                            loop: true,
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {reviews.map((r, i) => (
                                <div className="swiper-slide" key={i}>
                                    <div className="mil-review mil-text-center">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <img src="/img/icons/md/7.svg" alt="icon" />
                                        </div>
                                        <p className="mil-mb-30">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words slightly believable.
                                        </p>
                                        <div className="mil-stars mil-mb-30">
                                            <ul>
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <li key={s}>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mil-author">
                                            <img src={r.face} alt="Customer" />
                                            <div className="mil-name">
                                                <h6>{r.name}</h6>
                                                <span className="mil-text-sm">Agency Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>
            {/* reviews end */}

            {/* call to action */}
            <section className="call-to-action mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: '15%' }}></div>
                <div className="container mil-text-center">
                    <div className="mil-cta-frame">
                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
                            <img src="/img/icons/md/6l.svg" alt="icon" />
                        </div>
                        <p className="mil-light mil-mb-30">Leadership Team</p>
                        <h2 className="mil-light mil-mb-30">
                            <span className="mil-accent">Access Technologies Solution (ACS)</span> in The Future
                        </h2>
                        <p className="mil-light-soft mil-mb-60">
                            It is a long established fact that a reader will be distracted by the readable content <br /> of a page when looking at its layout.
                        </p>
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
            </section>
            {/* call to action end */}
        </MainLayout>
    );
}
