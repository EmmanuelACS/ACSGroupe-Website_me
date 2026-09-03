import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';

export default function About() {
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
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>Home</Link>
                            </li>
                            <li>
                                <Link href={route('about')}>About us</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Enterprise</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* call to action */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <h4 className="mil-mb-60">
                                Lorem ipsum dolor sit amet, <span className="mil-accent">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labor aliqua.
                            </h4>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mr-15 mil-mb-30">
                                    <span>Talk To an Expert</span>
                                </a>
                                <a href="#." className="mil-button-with-label mil-mb-60">
                                    <div className="mil-button mil-border mil-icon-button">
                                        <span>
                                            <i className="fas fa-play"></i>
                                        </span>
                                    </div>
                                    <span className="mil-dark">Watch Video</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            {/* about */}
            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, left: '35%' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mil-mb-60">
                            <div className="mil-circle-illustration">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img src="/img/faces/t3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Firm Overview</span>
                            <h2 className="mil-mb-50">
                                We Specialize in <br />
                                <span className="mil-accent">Transforming Your Idea</span> or Business in The Current
                                <br /> Digital Era.
                            </h2>

                            <p className="mil-mb-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                accumsan lacus vel facilisis.{' '}
                            </p>

                            <div className="row align-items-end">
                                <div className="col-xl-7">
                                    <ul className="mil-check-icon-list mil-mb-60">
                                        <li>
                                            <img src="/img/icons/sm/12.svg" alt="icon" />
                                            <span className="mil-dark">Quis suspendisse ultrices gravida.</span>
                                        </li>
                                        <li>
                                            <img src="/img/icons/sm/12.svg" alt="icon" />
                                            <span className="mil-dark">Consectetur adipiscing elit.</span>
                                        </li>
                                        <li>
                                            <img src="/img/icons/sm/12.svg" alt="icon" />
                                            <span className="mil-dark">Quis suspendisse ultrices gravida.</span>
                                        </li>
                                        <li>
                                            <img src="/img/icons/sm/12.svg" alt="icon" />
                                            <span className="mil-dark">Consectetur adipiscing elit.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-5">
                                    <Link href={route('team.single')} className="mil-post-sm mil-mb-60">
                                        <div className="mil-cover-frame">
                                            <img src="/img/faces/1.jpg" alt="cover" />
                                        </div>
                                        <div className="mil-description">
                                            <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                                            <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* counters */}
            <section className="mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, left: '25%' }}></div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="mil-h1">
                                8<span className="mil-accent">+</span>
                            </div>
                            <h6 className="mil-mb-60">Years Experience</h6>

                            <h2 className="mil-mb-60">We Run All Kinds of IT Services That Vow Your Success</h2>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mil-mb-60">
                                Accelerate <span className="mil-accent">Innovation</span> with world class tech teams We&rsquo;ll match you to an entire <span className="mil-accent">Remote Technology</span>
                            </h3>

                            <div className="row">
                                <div className="col-lg-6">
                                    <h6 className="mil-mb-30">
                                        <span className="mil-accent">16+</span>&nbsp; Software Development
                                    </h6>

                                    <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="mil-mb-30">
                                        <span className="mil-accent">3+</span>&nbsp; Years Client Engagement
                                    </h6>

                                    <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="mil-mb-30">
                                        <span className="mil-accent">360+</span>&nbsp; App Development
                                    </h6>

                                    <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="mil-mb-30">
                                        <span className="mil-accent">520+</span>&nbsp; Web Development
                                    </h6>

                                    <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* counters end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* partners */}
            <div className="mil-partners mil-p-120-90">
                <div className="container">
                    <div className="mil-partners-frame">
                        <a href="#.">
                            <img src="/img/partners/1.png" alt="partner" />
                        </a>
                        <a href="#.">
                            <img src="/img/partners/2.png" alt="partner" />
                        </a>
                        <a href="#.">
                            <img src="/img/partners/3.png" alt="partner" />
                        </a>
                        <a href="#.">
                            <img src="/img/partners/4.png" alt="partner" />
                        </a>
                        <a href="#.">
                            <img src="/img/partners/5.png" alt="partner" />
                        </a>
                        <a href="#.">
                            <img src="/img/partners/6.png" alt="partner" />
                        </a>
                    </div>
                </div>
            </div>
            {/* partners end */}

            {/* about */}
            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mil-mb-60">
                            <div className="mil-circle-illustration">
                                <div className="mil-circle-bg"></div>
                                <div className="mil-image-frame">
                                    <img src="/img/faces/t2.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mil-mb-60">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">IT Enterprise</span>
                            <h2 className="mil-mb-50">Our Mission</h2>

                            <p className="mil-mb-50">
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &lsquo;lorem ipsum&rsquo; will uncover many web sites still in their
                                infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of passages majority.
                            </p>

                            <ul className="mil-simple-list">
                                <li>Accelerate innovation.</li>
                                <li>With world class tech teams.</li>
                                <li>Our all service offerings to enhance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* features */}
            <section className="mil-p-120-120">
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Discover Our Company</span>
                    <h2 className="mil-mb-120">Why Work With Us</h2>

                    <div className="mil-divider"></div>
                    <div className="mil-line-icon-box">
                        <div className="row align-items-center">
                            <div className="col-xl-2">
                                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/6.svg" alt="icon" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <h4 className="mil-mb-30">Top Expertise</h4>
                            </div>
                            <div className="col-xl-6">
                                <p className="mil-box-text mil-mb-30">
                                    Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                                    facilisis at vero eros et accumsan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mil-divider"></div>
                    <div className="mil-line-icon-box">
                        <div className="row align-items-center">
                            <div className="col-xl-2">
                                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <h4 className="mil-mb-30">Quality Management</h4>
                            </div>
                            <div className="col-xl-6">
                                <p className="mil-box-text mil-mb-30">
                                    Facilisis at vero eros et accumsan et iusto odio dignissim. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla qui
                                    blandit praesent luptatum zzril delenit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mil-divider"></div>
                    <div className="mil-line-icon-box">
                        <div className="row align-items-center">
                            <div className="col-xl-2">
                                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/2.svg" alt="icon" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <h4 className="mil-mb-30">Utmost Flexibility</h4>
                            </div>
                            <div className="col-xl-6">
                                <p className="mil-box-text mil-mb-30">
                                    Dolore eu feugiat nulla facilisis at. Quis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum vero eros et accumsan et iusto odio dignissim qui
                                    blandit praesent luptatum zzril delenit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mil-divider"></div>
                    <div className="mil-line-icon-box">
                        <div className="row align-items-center">
                            <div className="col-xl-2">
                                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/4.svg" alt="icon" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <h4 className="mil-mb-30">Agility</h4>
                            </div>
                            <div className="col-xl-6">
                                <p className="mil-box-text mil-mb-30">
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                    blandit praesent luptatum zzril.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mil-divider"></div>
                    <div className="mil-line-icon-box">
                        <div className="row align-items-center">
                            <div className="col-xl-2">
                                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/5.svg" alt="icon" />
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <h4 className="mil-mb-30">Innovation</h4>
                            </div>
                            <div className="col-xl-6">
                                <p className="mil-box-text mil-mb-30">
                                    Blandit praesent luptatum zzril. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                                    et iusto odio dignissim qui delenit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mil-divider"></div>
                </div>
            </section>
            {/* features end */}

            {/* features */}
            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">For Enterprise</span>
                    <h2 className="mil-mb-120">
                        We Live by <span className="mil-accent">Powerful</span> Values
                    </h2>

                    <div className="row">
                        <div className="col-md-6 col-xl-4">
                            <div className="mil-icon-box-2 mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                                <div className="mil-box-text">
                                    <h4 className="mil-mb-30">We Are</h4>
                                    <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="mil-icon-box-2 mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                                <div className="mil-box-text">
                                    <h4 className="mil-mb-30">We Deep Dive</h4>
                                    <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="mil-icon-box-2 mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                                <div className="mil-box-text">
                                    <h4 className="mil-mb-30">We Take</h4>
                                    <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="mil-icon-box-2 mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                                <div className="mil-box-text">
                                    <h4 className="mil-mb-30">We Value</h4>
                                    <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="mil-icon-box-2 mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                                <div className="mil-box-text">
                                    <h4 className="mil-mb-30">We Believe</h4>
                                    <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="mil-icon-box-2 mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/10.svg" alt="icon" />
                                </div>
                                <div className="mil-box-text">
                                    <h4 className="mil-mb-30">We Say &ldquo;We&rdquo;</h4>
                                    <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* features end */}

            {/* contact */}
            <section className="mil-contact mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">
                        Contact <span className="mil-accent">Me</span>
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
