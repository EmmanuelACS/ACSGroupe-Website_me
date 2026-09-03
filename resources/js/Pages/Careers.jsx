import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link } from '@inertiajs/react';

const vacancies = [
    { badge: 'Full Time', badgeClass: '', location: 'New York', title: 'UI and Web Developer' },
    { badge: 'Full Time', badgeClass: '', location: 'Miami', title: 'App Developer' },
    { badge: 'Remote', badgeClass: 'mil-badge-dark', location: 'Whole world', title: 'Sell Agent' },
    { badge: 'Full Time', badgeClass: '', location: 'Toronto', title: 'UI/UX Designer' },
];

const benefits = [
    { img: 10, icon: 1, title: 'Continuous Learning' },
    { img: 11, icon: 2, title: 'Consectetur adipiscing elit' },
    { img: 12, icon: 3, title: 'Dolore magna aliqua' },
];

const posts = [
    { img: 1, size: 'mil-slide-50', reverse: false },
    { img: 2, size: 'mil-slide-25', reverse: true },
    { img: 3, size: 'mil-slide-25', reverse: false },
    { img: 4, size: 'mil-slide-50', reverse: false },
    { img: 5, size: 'mil-slide-25', reverse: true },
    { img: 6, size: 'mil-slide-25', reverse: false },
];

export default function Careers() {
    return (
        <MainLayout title="Access Technologies Solutions">
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
                                <Link href={route('careers')}>Careers</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Careers</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* careers */}
            <section className="mil-careers mil-p-120-90">
                <div className="container">
                    <div className="row justify-content-between mil-mb-90">
                        <div className="col-xl-6">
                            <h3 className="mil-mb-30">
                                Inspire and Get Inspired by <br />
                                <span className="mil-accent">Professional</span> Experts
                            </h3>
                        </div>
                        <div className="col-xl-4">
                            <p>
                                It uses a dictionary of over <span className="mil-accent">200 Latin words</span>, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                                reasonable.
                            </p>
                        </div>
                    </div>
                    <ul className="mil-vacancies-frame">
                        {vacancies.map((v, i) => (
                            <li className="mil-vacancy" key={i}>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                                        <div className="mil-vacancy-head mil-mb-15">
                                            <span className={`mil-badge${v.badgeClass ? ` ${v.badgeClass}` : ''}`}>{v.badge}</span>
                                            <span className="mil-text-sm mil-dark">{v.location}</span>
                                        </div>
                                        <h4>{v.title}</h4>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                                        <div className="mil-adaptive-right">
                                            <Link href={route('contact')} className="mil-button mil-border">
                                                <span>Apply Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* careers end */}

            {/* about */}
            <section className="mil-about mil-deep-bg mil-p-120-0">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 mil-mb-60">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Work With Us</span>
                            <h2 className="mil-mb-30">
                                Why <span className="mil-accent">Choose</span> Us?
                            </h2>
                            <p className="mil-mb-15">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                            </p>
                            <p className="mil-mb-50">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod facer possim assum.</p>
                            <div className="mil-buttons-frame">
                                <a href="#." className="mil-button mil-border">
                                    <span>Read more</span>
                                </a>
                                <a href="#." className="mil-link">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="mil-about-illustration-2">
                                <div className="mil-image-frame">
                                    <img src="/img/photo/8.jpg" alt="Office" />
                                </div>
                                <a href="#." className="mil-play-button">
                                    <i className="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* counters */}
            <section className="mil-counters mil-deep-bg mil-p-120-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="mil-mb-30">
                                <h2 className="mil-mb-20">20</h2>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                                <p>Years of Experience In The IT Industry</p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="mil-mb-30">
                                <h2 className="mil-mb-20">705</h2>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                                <p>Satisfied Clients We Have Served Globally</p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="mil-mb-30">
                                <h2 className="mil-mb-20">280</h2>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                                <p>Recognitions Over Two Decades</p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="mil-mb-30">
                                <h2 className="mil-mb-20">72</h2>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                                <p>Awards &amp; Certifications Of Our Work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* counters end */}

            {/* banners slider */}
            <section className="mil-banners mil-p-120-0">
                <div className="container">
                    <div className="mil-text-center mil-mb-120">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">We Offer You</span>
                        <h2 className="mil-mb-30">
                            Great Benefits for <span className="mil-accent">Working</span> With Us
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                            Itaque eveniet, officiis voluptate voluptatum.
                        </p>
                    </div>

                    <Slider
                        className="mil-banners-slider"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            autoplay: { delay: 5000 },
                            effect: 'fade',
                            parallax: true,
                            loop: true,
                            pagination: { el: '.mil-banners-pagination', type: 'bullets', clickable: true },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {benefits.map((b, i) => (
                                <div className="swiper-slide" key={i}>
                                    <div className="mil-banner-slide">
                                        <img src={`/img/photo/${b.img}.jpg`} alt="banner" className="mil-banner-bg" data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" />
                                        <div className="mil-overlay"></div>
                                        <div className="row justify-content-end align-items-center">
                                            <div className="col-lg-8 col-xl-6" data-swiper-parallax-y="-300">
                                                <div className="mil-icon-box mil-sb-inner mil-relative">
                                                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                                        <img src={`/img/icons/md/${b.icon}.svg`} alt="icon" />
                                                    </div>
                                                    <h4 className="mil-mb-30">{b.title}</h4>
                                                    <div className="mil-divider mil-divider-left mil-mb-30"></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida risus commodo viverra.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="mil-banners-pagination"></div>
                </div>
            </section>
            {/* banners slider end */}

            {/* partners */}
            <div className="mil-partners mil-p-90-60">
                <div className="container">
                    <div className="mil-partners-frame">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <a href="#." key={n}>
                                <img src={`/img/partners/${n}.png`} alt="partner" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* partners end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* blog */}
            <section className="mil-blog mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-90">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Latest News</span>
                            <h2>Latest Thinking</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-blog-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">Prev</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-blog-next">
                                        <span className="mil-h6">Next</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider
                        className="mil-blog-slider mil-mb-90"
                        options={{
                            spaceBetween: 30,
                            speed: 800,
                            slidesPerView: 1,
                            navigation: { prevEl: '.mil-blog-prev', nextEl: '.mil-blog-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 2 }, 1200: { slidesPerView: 'auto' } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {posts.map((post, i) => (
                                <div className={`swiper-slide ${post.size}`} key={i}>
                                    <Link href={route('publication')} className={`mil-card${post.size === 'mil-slide-25' ? ' mil-card-sm' : ''}${post.reverse ? ' mil-reverse-sm' : ''}`}>
                                        {!post.reverse && (
                                            <div className="mil-cover-frame">
                                                <img src={`/img/blog/${post.img}.jpg`} alt="project" />
                                            </div>
                                        )}
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">Easy &amp; Most Powerful Server Platform.</h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        {post.reverse && (
                                            <div className="mil-cover-frame">
                                                <img src={`/img/blog/${post.img}.jpg`} alt="project" />
                                            </div>
                                        )}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <Link href={route('blog')} className="mil-link">
                                <span>View More Insights</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog end */}
        </MainLayout>
    );
}
