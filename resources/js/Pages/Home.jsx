import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';

const skills = [
    ['Software Development', 65],
    ['Web Development', 90],
    ['UX / UI Design', 50],
    ['App Development', 95],
    ['Internet of Things', 60],
    ['Artificial Intelligence', 90],
    ['Blockchain', 80],
];

const projects = [
    { img: 1, name: 'Jane Meldrum' },
    { img: 2, name: 'Nguta Ithya' },
    { img: 3, name: 'Roy Bricks' },
    { img: 4, name: 'Nguta Ithya' },
];

const posts = [
    { img: 1, size: 'mil-slide-50', reverse: false },
    { img: 2, size: 'mil-slide-25', reverse: true },
    { img: 3, size: 'mil-slide-25', reverse: false },
    { img: 4, size: 'mil-slide-50', reverse: false },
    { img: 5, size: 'mil-slide-25', reverse: true },
    { img: 6, size: 'mil-slide-25', reverse: false },
];

const reviews = [
    { face: 1, name: 'Tamzyn French' },
    { face: 2, name: 'Margaret Williams' },
    { face: 3, name: 'Tarryn Gillies' },
    { face: 4, name: 'Tamzyn French' },
    { face: 2, name: 'Margaret Williams' },
];

export default function Home() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        first_name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), { forceFormData: true });
    };

    return (
        <MainLayout title="Access Technologies Solutions">
            {/* banner */}
            <div className="mil-banner mil-top-space-0">
                <Slider
                    className="mil-banner-slideshow"
                    options={{
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 1500,
                        effect: 'fade',
                        parallax: true,
                        autoplay: { delay: 5000 },
                        loop: true,
                        pagination: { el: '.mil-pagination', type: 'bullets', clickable: true },
                    }}
                >
                    <div className="swiper-wrapper">
                        {[1, 2, 3].map((n) => (
                            <div className="swiper-slide" key={n}>
                                <img
                                    src={`/img/photo/${n}.jpg`}
                                    className="mil-background-image"
                                    style={{ objectPosition: 'center' }}
                                    data-swiper-parallax="-100"
                                    data-swiper-parallax-scale="1.1"
                                    alt="image"
                                />
                            </div>
                        ))}
                    </div>
                </Slider>
                <div className="mil-overlay"></div>

                <div className="mil-banner-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-8">
                                <span className="mil-suptitle mil-mb-60">
                                    <span className="mil-light">The Next</span> <span className="mil-accent">Gen</span>
                                </span>
                                <h1 className="mil-mb-60">
                                    <span className="mil-uppercase mil-light">
                                        We Provide Services <br />
                                        and Solutions
                                    </span>{' '}
                                    <span className="mil-font-3 mil-accent">To Enterprise</span>
                                </h1>
                                <div className="mil-flex-hori-center">
                                    <div>
                                        <Link href={route('contact')} className="mil-button mil-border mil-light">
                                            <span>Let&rsquo;s Talk</span>
                                        </Link>
                                    </div>
                                    <p className="mil-button-descr mil-light-soft">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="mil-illustration-1">
                                    {[
                                        ['Dedicated Team', 1],
                                        ['Developers', 2],
                                        ['Designers', 3],
                                    ].map(([label, n]) => (
                                        <div className={`mil-item mil-item-${n}`} key={n}>
                                            <div className="mil-plus">
                                                <div className="mil-hover-window">
                                                    <div className="mil-window-content">
                                                        <h5 className="mil-dark mil-mb-15">Experts</h5>
                                                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                                                        <p className="mil-text-sm">And here&apos;s some amazing content. It&apos;s very engaging. Right?</p>
                                                    </div>
                                                </div>
                                                <div className="mil-item-hover">
                                                    <div className="mil-plus-icon">+</div>
                                                    <h6 className="mil-light">{label}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* services */}
            <section className="mil-services mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <h2 className="mil-mb-30">
                        How We Can <span className="mil-accent">Help You</span>
                    </h2>
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <h4 className="mil-mb-60 mil-mt-30">IT Services</h4>
                            {[
                                ['01', 'Dedicated Team', 1],
                                ['02', 'QA and Testing', 2],
                                ['03', 'SaaS', 3],
                            ].map(([num, label, icon]) => (
                                <div key={label}>
                                    <div className="mil-divider mil-divider-left"></div>
                                    <div className="mil-service-item">
                                        <div className="mil-service-icon">
                                            <div className="mil-icon-frame mil-icon-frame-md">
                                                <img src={`/img/icons/md/${icon}.svg`} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="mil-service-text">
                                            <h5 className="mil-mb-30">
                                                <span className="mil-accent">{num}</span> {label}
                                            </h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h4 className="mil-mb-60 mil-mt-30">IT Solutions</h4>
                            {[
                                ['01', 'Blockchain', 4],
                                ['02', 'Artificial Intelligence', 5],
                                ['03', 'Internet of Things', 6],
                            ].map(([num, label, icon]) => (
                                <div key={label}>
                                    <div className="mil-divider mil-divider-left"></div>
                                    <div className="mil-service-item">
                                        <div className="mil-service-icon">
                                            <div className="mil-icon-frame mil-icon-frame-md">
                                                <img src={`/img/icons/md/${icon}.svg`} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="mil-service-text">
                                            <h5 className="mil-mb-30">
                                                <span className="mil-accent">{num}</span> {label}
                                            </h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* portfolio */}
            <section className="mil-works mil-p-120-90">
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
                                    <span>Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* how it works */}
            <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="mil-deco" style={{ bottom: 0, left: '30%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Discover Our Company</span>
                    <h2 className="mil-mb-90">
                        How We <span className="mil-accent">Collaborate</span> With You
                    </h2>
                    <div className="row">
                        {[
                            ['Thinking Big', 1],
                            ['Starting Small', 2],
                            ['Creating Fast', 3],
                            ['Innovating Scale', 4],
                        ].map(([label, n]) => (
                            <div className="col-md-6 col-xl-3" key={label}>
                                <div className="mil-mb-60">
                                    <div className="mil-icon-box-head mil-mb-30">
                                        <div className="mil-icon-frame mil-icon-frame-sm">
                                            <img src={`/img/icons/sm/${n}.svg`} alt="icon" />
                                        </div>
                                        <h5>{label}</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <a href="#." className="mil-link mil-mb-30">
                                <span>Learn More</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mb-30">
                                    <span>How We Work</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* skills */}
            <section className="mil-skills mil-p-120-90">
                <div className="container">
                    <div className="row align-items-end mil-mb-90">
                        <div className="col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Skill</span>
                            <h2>
                                Business <span className="mil-accent">Success</span> With <br />
                                Technology
                            </h2>
                        </div>
                        <div className="col-xl-6">
                            <p className="mil-mt-60-adapt">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using content here.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        {skills.map(([label, pct]) => (
                            <div className="col-md-6 col-xl-3" key={label}>
                                <h6 className="mil-mb-30">{label}</h6>
                                <div className="mil-skill-frame mil-mb-60">
                                    <div className="mil-skill-track">
                                        <div className="mil-skill-prog" style={{ width: `${pct}%` }}></div>
                                    </div>
                                    <div className="mil-text-sm">{pct}%</div>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-6 col-xl-3 mil-text-center">
                            <a href="#." className="mil-link mil-mb-30">
                                <span>More</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

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

            {/* reviews */}
            <section className="mil-reviews mil-deep-bg mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-90">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Testimonial</span>
                            <h2>
                                What Our <span className="mil-accent">Clients</span> Say
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
                        className="mil-revi-slider"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {reviews.map((r, i) => (
                                <div className="swiper-slide" key={i}>
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="/img/icons/sm/11.svg" alt="quote" />
                                            <ul>
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <li key={s}>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <div className="mil-author">
                                            <img src={`/img/faces/${r.face}.jpg`} alt="Customer" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">{r.name}</h6>
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

            {/* contact */}
            <section className="mil-contact mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">
                        Contact <span className="mil-accent">Us</span>
                    </h2>
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">Name</span>
                                        <span className="mil-accent">Required</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name Here"
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                    />
                                    {errors.first_name && <p className="mil-text-sm mil-accent">{errors.first_name}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">Email Adress</span>
                                        <span className="mil-accent">Required</span>
                                    </label>
                                    <input type="email" id="email" placeholder="Your Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    {errors.email && <p className="mil-text-sm mil-accent">{errors.email}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-60">
                                    <label>
                                        <span className="mil-light">Phone</span>
                                        <span className="mil-light-soft">Optional</span>
                                    </label>
                                    <input type="number" placeholder="Your Phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                </div>
                                <div className="mil-attach-frame mil-mb-60">
                                    <i className="fas fa-paperclip"></i>
                                    <label className={`mil-custom-file-input${data.attachment ? ' mil-with-file' : ''}`}>
                                        <span>{data.attachment ? data.attachment.name : 'Attach your file'}</span>
                                        <input type="file" id="mil-file-input" onChange={(e) => setData('attachment', e.target.files[0] ?? null)} />
                                    </label>
                                    <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">Email Adress</span>
                                        <span className="mil-accent">Required</span>
                                    </label>
                                    <textarea placeholder="Your Message" value={data.message} onChange={(e) => setData('message', e.target.value)}></textarea>
                                    {errors.message && <p className="mil-text-sm mil-accent">{errors.message}</p>}
                                </div>
                                <p className="mil-text-sm mil-light-soft mil-mb-15">We will process your personal information in accordance with our Privacy Policy.</p>

                                <div className="mil-checbox-frame mil-mb-60">
                                    <input className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" />
                                    <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                                        I would like to be contacted with news and updates about your{' '}
                                        <a href="#." className="mil-accent">
                                            events and services
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="mil-button mil-accent-bg mil-fw" disabled={processing}>
                                    <span>{recentlySuccessful ? 'Message envoyé !' : 'Send Message Now'}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}
