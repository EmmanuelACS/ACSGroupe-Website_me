import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Contact() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        product_design: '',
        message: '',
        budget: '',
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
                                <Link href={route('contact')}>Contact Us</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Let&rsquo;s discuss your opportunity</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* contact */}
            <section className="mil-contact mil-p-120-0">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-8 col-xl-8 mil-mb-120">
                            <form onSubmit={submit}>
                                <h4 className="mil-mb-60">
                                    <span className="mil-accent">01.</span> Tell Us About Yourself
                                </h4>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6 mil-dark">
                                                <span>First Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                value={data.first_name}
                                                onChange={(e) => setData('first_name', e.target.value)}
                                            />
                                            {errors.first_name && <p className="mil-text-sm mil-accent">{errors.first_name}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6">
                                                <span>Last Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Jones"
                                                value={data.last_name}
                                                onChange={(e) => setData('last_name', e.target.value)}
                                            />
                                            {errors.last_name && <p className="mil-text-sm mil-accent">{errors.last_name}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6">
                                                <span>Email Address</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="doe@mydomain.com"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            {errors.email && <p className="mil-text-sm mil-accent">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6">
                                                <span>Phone</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter your phone number"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                            />
                                            {errors.phone && <p className="mil-text-sm mil-accent">{errors.phone}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6 mil-dark">
                                                <span>Company</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your company name"
                                                value={data.company}
                                                onChange={(e) => setData('company', e.target.value)}
                                            />
                                            {errors.company && <p className="mil-text-sm mil-accent">{errors.company}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mil-mb-30">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6 mil-dark">
                                                <span>Role</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your role"
                                                value={data.role}
                                                onChange={(e) => setData('role', e.target.value)}
                                            />
                                            {errors.role && <p className="mil-text-sm mil-accent">{errors.role}</p>}
                                        </div>
                                    </div>
                                </div>

                                <h4 className="mil-mb-60">
                                    <span className="mil-accent">02.</span> What Can We Help You With?
                                </h4>

                                <div className="row">
                                    <div className="col-lg-6 mil-mb-30">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6 mil-dark">
                                                <span>Product Design</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Web Designer"
                                                value={data.product_design}
                                                onChange={(e) => setData('product_design', e.target.value)}
                                            />
                                            {errors.product_design && <p className="mil-text-sm mil-accent">{errors.product_design}</p>}
                                        </div>
                                    </div>
                                </div>

                                <h4 className="mil-mb-60">
                                    <span className="mil-accent">03.</span> Tell Us About Your Project
                                </h4>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6">
                                                <span>Project Description</span>
                                            </label>
                                            <textarea
                                                placeholder="Your Message"
                                                className="mil-shortened"
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                            ></textarea>
                                            {errors.message && <p className="mil-text-sm mil-accent">{errors.message}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mil-attach-frame mil-dark mil-mb-30">
                                            <i className="fas fa-paperclip"></i>
                                            <label className={`mil-custom-file-input${data.attachment ? ' mil-with-file' : ''}`}>
                                                <span>{data.attachment ? data.attachment.name : 'Attach your file'}</span>
                                                <input
                                                    type="file"
                                                    id="mil-file-input"
                                                    onChange={(e) => setData('attachment', e.target.files[0] ?? null)}
                                                />
                                            </label>
                                            <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                                            {errors.attachment && <p className="mil-text-sm mil-accent">{errors.attachment}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mil-mb-30">
                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6 mil-dark">
                                                <span>Project Budget</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="123"
                                                value={data.budget}
                                                onChange={(e) => setData('budget', e.target.value)}
                                            />
                                            {errors.budget && <p className="mil-text-sm mil-accent">{errors.budget}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button className="mil-button mil-border mil-fw" disabled={processing}>
                                            <span>{recentlySuccessful ? 'Message envoyé !' : 'Submit Now'}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-xl-3 mil-mb-120">
                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                                <p className="mil-mb-20">Our experts are ready to answer your questions.</p>
                                <Link href={route('contact')} className="mil-link mil-link-sm">
                                    <span>Support Now</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="mil-divider mil-mb-60"></div>

                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/8.svg" alt="icon" />
                                </div>
                                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                                <p>For technical questions or billing questions, please contact Customer Care.</p>
                            </div>

                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/9.svg" alt="icon" />
                                </div>
                                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                                <p>For technical questions or billing questions, please contact Customer Care.</p>
                            </div>

                            <div className="mil-divider mil-mb-60"></div>

                            <Link href={route('contact')} className="mil-link mil-link-sm mil-mb-15">
                                <span>Legality Guide</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <br />
                            <Link href={route('contact')} className="mil-link mil-link-sm">
                                <span>Security Center</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact end */}

            {/* map */}
            <div>
                <div className="mil-map-frame">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.289421122936!2d-74.0577166!3d40.7107384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250aee3ee6da7%3A0xe8a316c6c836011f!2sBuddy's%20JC!5e0!3m2!1sen!2sua!4v1682071433844!5m2!1sen!2sua"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="container"></div>
            </div>
            {/* map end */}

            {/* contact info */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <h4 className="mil-mb-30">United States</h4>
                                <h5 className="mil-list-title mil-mb-15">New York</h5>
                                <p className="mil-mb-30">525, North Tryon Street, Suite 1600, Charlotte, NC 28202-0213</p>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>

                                <h6 className="mil-mb-15">
                                    <span className="mil-accent">+ 90</span> 700 300 000
                                </h6>
                                <h6>
                                    <span className="mil-accent">usa</span>
                                    <a href="mailto:support@mydomain.com">support@mydomain.com</a>
                                </h6>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <h4 className="mil-mb-30">Germany</h4>
                                <h5 className="mil-list-title mil-mb-15">Berlin</h5>
                                <p className="mil-mb-30">
                                    501, Satyamev Eminence, Science City Road, Ahmedabad, Gujarat - 380060
                                </p>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>

                                <h6 className="mil-mb-15">
                                    <span className="mil-accent">+ 90</span> 700 300 000
                                </h6>
                                <h6>
                                    <span className="mil-accent">germany</span>
                                    <a href="mailto:support@mydomain.com">support@mydomain.com</a>
                                </h6>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <h4 className="mil-mb-30">France</h4>
                                <h5 className="mil-list-title mil-mb-15">Paris</h5>
                                <p className="mil-mb-30">397 Bedford Highway, Suite 323 Halifax NS B3M 2L3 Science City Road</p>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>

                                <h6 className="mil-mb-15">
                                    <span className="mil-accent">+ 90</span> 700 300 000
                                </h6>
                                <h6>
                                    <span className="mil-accent">france</span>
                                    <a href="mailto:support@mydomain.com">support@mydomain.com</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact info end */}
        </MainLayout>
    );
}
