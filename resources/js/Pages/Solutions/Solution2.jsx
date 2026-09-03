import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import { Link, useForm } from '@inertiajs/react';

export default function Solution2() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeLeftTab, setActiveLeftTab] = useState(0);

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
        <MainLayout title="Modernisation SI — Access Technologies Solutions">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li><Link href={route('home')}>Accueil</Link></li>
                            <li><Link href={route('services.service1')}>Solutions</Link></li>
                        </ul>
                        <h2 className="mil-uppercase">Modernisation des systèmes d'information</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* ??? */}
            <section className="mil-p-120-90">
                <div className="container">
                    <h2 className="mil-mb-60">Making <span className="mil-accent">Business</span> Sense of <span className="mil-accent">Your Data</span> for Any User,<br /> Anytime, Anywhere</h2>
                    <p className="mil-mb-60">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                                <div className="mil-icon-box-2">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/17.svg" alt="icon" />
                                    </div>
                                    <div className="mil-box-text">
                                        <h6 className="mil-box-text">Enable a Single Source <br />of Truth</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                                <div className="mil-icon-box-2">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/19.svg" alt="icon" />
                                    </div>
                                    <div className="mil-box-text">
                                        <h6 className="mil-box-text">Democratize Your <br />Data Safely</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                                <div className="mil-icon-box-2">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/18.svg" alt="icon" />
                                    </div>
                                    <div className="mil-box-text">
                                        <h6 className="mil-box-text">Foster a Data Culture For Efficiency</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                                <div className="mil-icon-box-2">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <img src="/img/icons/md/11.svg" alt="icon" />
                                    </div>
                                    <div className="mil-box-text">
                                        <h6 className="mil-box-text">Scale UP With an AI-Ready Infrastructure</h6>
                                    </div>
                                </div>
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
            <section className="mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <div className="row align-items-end mil-mb-90">
                        <div className="col-md-6 col-xl-7">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">An Ocean Data For You</span>
                            <h2>Our Big Data Development Solutions to <span className="mil-accent">Power Your Business</span></h2>
                        </div>
                        <div className="col-md-6 col-xl-5">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-revi-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">Prev</span></div>
                                    <div className="mil-slider-btn-next mil-revi-next"><span className="mil-h6">Next</span><i className="fas fa-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider
                        className="mil-revi-slider mil-mb-30"
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
                                        <h3>I</h3>
                                    </div>
                                    <h5 className="mil-mb-30">Data Management</h5>
                                    <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <h3>II</h3>
                                    </div>
                                    <h5 className="mil-mb-30">Data Integration</h5>
                                    <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <h3>III</h3>
                                    </div>
                                    <h5 className="mil-mb-30">Data Security</h5>
                                    <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="mil-hover-card">
                                    <div className="mil-deco mil-deco-accent" style={{ top: '-10%', right: '-10%' }}></div>
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                        <h3>IV</h3>
                                    </div>
                                    <h5 className="mil-mb-30">Data Visualization</h5>
                                    <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            {/* ??? end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* ??? */}
            <section className="mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, left: '15%' }}></div>
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">A Great Service</span>
                        <h2 className="mil-mb-30">Supercharge <span className="mil-accent">Your Data</span> With</h2>
                    </div>

                    <div className="mil-tab-buttons mil-tab-buttons-2 mil-mb-90">
                        <a href="#tab1" className={activeTab === 0 ? 'mil-active' : ''} onClick={() => setActiveTab(0)}>
                            <div>
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                                    <img src="/img/icons/md/20.svg" alt="icon" />
                                </div>
                                <h6>DataOps</h6>
                            </div>
                        </a>
                        <a href="#tab2" className={activeTab === 1 ? 'mil-active' : ''} onClick={() => setActiveTab(1)}>
                            <div>
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                                    <img src="/img/icons/md/21.svg" alt="icon" />
                                </div>
                                <h6>MLOps</h6>
                            </div>
                        </a>
                    </div>

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
                            <div className="swiper-slide" data-hash="tab1">
                                <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                            </div>

                            <div className="swiper-slide" data-hash="tab2">
                                <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
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
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">An Ocean Data For You</span>
                    <h2 className="mil-mb-90">Our Data <span className="mil-accent">Ecosystem Development</span> Approach</h2>

                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <ul className="mil-tabs-left-nav mil-mb-60">
                                <li><a href="#tab-l-1" className={`mil-h4${activeLeftTab === 0 ? ' mil-active' : ''}`} onClick={() => setActiveLeftTab(0)}>Starting Small</a></li>
                                <li><a href="#tab-l-2" className={`mil-h4${activeLeftTab === 1 ? ' mil-active' : ''}`} onClick={() => setActiveLeftTab(1)}>Building a Scale-Ready MVP</a></li>
                                <li><a href="#tab-l-3" className={`mil-h4${activeLeftTab === 2 ? ' mil-active' : ''}`} onClick={() => setActiveLeftTab(2)}>Improving Your Data Ecosystem Iteratively</a></li>
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
                                    <div className="swiper-slide" data-hash="tab-l-1">
                                        <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-hash="tab-l-2">
                                        <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-hash="tab-l-3">
                                        <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        </div>
                                    </div>
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
                <div className="mil-deco" style={{ top: 0, left: '15%' }}></div>
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">A Great Service</span>
                        <h2 className="mil-mb-30">Values That <span className="mil-accent">Lead Us</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <h3>I</h3>
                                </div>
                                <h5 className="mil-mb-20">Productivity</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <h3>II</h3>
                                </div>
                                <h5 className="mil-mb-20">Transparency</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <h3>III</h3>
                                </div>
                                <h5 className="mil-mb-20">Personality</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="mil-box-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                                    <h3>IV</h3>
                                </div>
                                <h5 className="mil-mb-20">Volition</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ??? end */}

            {/* contact */}
            <section className="mil-contact mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">Contact <span className="mil-accent">Me</span></h2>
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
