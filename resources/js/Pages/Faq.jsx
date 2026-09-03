import MainLayout from '@/Layouts/MainLayout';
import Accordion from '@/Components/Accordion';
import { Link, useForm } from '@inertiajs/react';

export default function Faq() {
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
                                <Link href={route('home')}>Accueil</Link>
                            </li>
                            <li>
                                <Link href={route('faq')}>FAQs</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">FAQS</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* faq */}
            <section className="mil-faqs mil-p-0-120">
                <div className="mil-deco" style={{ bottom: 0, left: '10%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <div className="mil-tabs">
                        <input type="radio" name="tabs" id="tab1" defaultChecked />
                        <label htmlFor="tab1">Information</label>
                        <div className="mil-tab">
                            <div className="row justify-content-between">
                                <div className="col-lg-4">
                                    <h3 className="mil-up-font mil-mb-30">
                                        <span className="mil-accent">Access Technologies Solutions Connects</span> The Entire Organization From End To End.
                                    </h3>
                                    <p className="mil-mb-60">
                                        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod
                                        ii legunt saepius.
                                    </p>
                                </div>
                                <div className="col-lg-7">
                                    <Accordion title="Information about Access Technologies Solutions">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="What are the benefits of using Access Technologies Solutions?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How much does Access Technologies Solutions cost?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="Who owns the information created by staff?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How do I delete my account?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="tabs" id="tab2" />
                        <label htmlFor="tab2">Pricing Plans</label>
                        <div className="mil-tab">
                            <div className="row justify-content-between">
                                <div className="col-lg-4">
                                    <h3 className="mil-up-font mil-mb-30">
                                        <span className="mil-accent">Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit.
                                    </h3>
                                    <p className="mil-mb-60">
                                        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod
                                        ii legunt saepius.
                                    </p>
                                </div>
                                <div className="col-lg-7">
                                    <Accordion title="How much does Access Technologies Solutions cost?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="What are the benefits of using Access Technologies Solutions?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="Information about Access Technologies Solutions">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="Lorem Ipsum, you need to be sure there">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How do I delete my account?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="tabs" id="tab3" />
                        <label htmlFor="tab3">Data and Privacy</label>
                        <div className="mil-tab">
                            <div className="row justify-content-between">
                                <div className="col-lg-4">
                                    <h3 className="mil-up-font mil-mb-30">
                                        <span className="mil-accent">Lorem Ipsum</span> available, but the majority have suffered
                                    </h3>
                                    <p className="mil-mb-60">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                                </div>
                                <div className="col-lg-7">
                                    <Accordion title="What are the benefits of using Access Technologies Solutions?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="Who owns the information created by staff?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How much does Access Technologies Solutions cost?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How do I delete my account?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="Information about Access Technologies Solutions">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="tabs" id="tab4" />
                        <label htmlFor="tab4">Security</label>
                        <div className="mil-tab">
                            <div className="row justify-content-between">
                                <div className="col-lg-4">
                                    <h3 className="mil-up-font mil-mb-30">
                                        <span className="mil-accent">Aliquam aut natus</span> perspiciatis corporis sunt alias cumques.
                                    </h3>
                                    <p className="mil-mb-60">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                                </div>
                                <div className="col-lg-7">
                                    <Accordion title="Information about Access Technologies Solutions">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="What are the benefits of using Access Technologies Solutions?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How much does Access Technologies Solutions cost?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="Who owns the information created by staff?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>

                                    <Accordion title="How do I delete my account?">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                            structures.
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq end */}

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
