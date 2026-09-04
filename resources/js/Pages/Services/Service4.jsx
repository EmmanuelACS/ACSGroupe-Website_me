import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';
import { THEME_E, THEME_F } from '@/data/acsExpertise';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export default function Service4() {
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
        <MainLayout title="Intelligence Artificielle — Access Technologies Solution (ACS)">
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
                        <h2 className="mil-uppercase">Intelligence Artificielle</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* about */}
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ bottom: 0, right: '20%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-4">
                            <div className="mil-circle-illustration mil-with-dots-2 mil-mb-60" data-swiper-parallax-scale=".8">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img src="/img/faces/t4.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <h2 className="mil-mb-30">
                                Protect Your IT Environments With <span className="mil-accent">Powerful Cloud Security</span> Solutions and Always on Support
                            </h2>
                            <div className="mil-hori-box mil-mb-30">
                                <div className="mil-mr-30">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                                        <img src="/img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <p>
                                    Our <span className="mil-accent">certified cloud security</span> experts help protect your environments across hyperscale public and private clouds so you can run your business confidence.
                                </p>
                            </div>
                            <a href="#." className="mil-button mil-border mil-mb-30">
                                <span>Get in Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* ??? */}
            <section className="mil-p-120-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Nos Offres</span>
                            <h2 className="mil-mb-30">
                                {THEME_E.title}
                            </h2>
                            <p className="mil-mb-90">L&apos;évolution constante des menaces impose une surveillance continue et une réponse outillée en temps réel.</p>
                        </div>
                    </div>
                    <div className="row">
                        {THEME_E.offers.map((label, i) => (
                            <div className="col-xl-4" key={label}>
                                <div className="mil-hover-card mil-box-center mil-mb-30">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <h3>{ROMAN[i]}</h3>
                                    </div>
                                    <h5 className="mil-mb-30">{label}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-deep-bg mil-p-120-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Nos Offres</span>
                            <h2 className="mil-mb-90">
                                {THEME_F.title}
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {THEME_F.offers.map((label, i) => (
                            <div className="col-xl-3 mil-mb-30" key={label}>
                                <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <h3>{ROMAN[i]}</h3>
                                </div>
                                <h5 className="mil-mb-30">{label}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* ??? */}
            <section className="mil-gradient-bg mil-p-120-90">
                <div className="mil-deco mil-deco-accent" style={{ bottom: 0, right: '20%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-4">
                            <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">Explore More Solutions</span>
                            <h2 className="mil-light mil-mb-90">
                                Do You Know what Your <span className="mil-accent">Cybersecurity</span> Risk Score Is?
                            </h2>
                        </div>
                        <div className="col-xl-7 mil-mb-30">
                            <p className="mil-light-soft mil-mb-30">
                                By answering these simple questions about your cybersecurity technology, processes, and people, you&apos;ll receive a cybersecurity risk score against our baseline that can help you identify common security gaps in your environment that you may not be aware of.
                            </p>
                            <a href="#." className="mil-button mil-border mil-light">
                                <span>Start Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* courses */}
            <section className="mil-courses mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
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
                        className="mil-courses-slider mil-mb-30"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-courses-prev', nextEl: '.mil-courses-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="#." className="mil-card">
                                    <div className="mil-cover-frame mil-mb-15">
                                        <img src="/img/blog/1.jpg" alt="project" />
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
                                            <div className="mil-text-lg mil-bold mil-accent">Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#." className="mil-card">
                                    <div className="mil-cover-frame mil-mb-15">
                                        <img src="/img/projects/2.jpg" alt="project" />
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
                                            <div className="mil-text-lg mil-dark mil-bold">$22.99 us</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#." className="mil-card">
                                    <div className="mil-cover-frame mil-mb-15">
                                        <img src="/img/projects/1.jpg" alt="project" />
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
                                            <div className="mil-text-lg mil-bold">
                                                <s className="mil-text-sm">$15.99 us</s> &nbsp; <span className="mil-accent">$50.99 us</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#." className="mil-card">
                                    <div className="mil-cover-frame mil-mb-15">
                                        <img src="/img/blog/3.jpg" alt="project" />
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
                                            <div className="mil-dark mil-bold">19.99 us$</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            {/* courses end */}

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
            {/* contact end */}
        </MainLayout>
    );
}
