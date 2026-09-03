import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';

export default function TeamSingle() {
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
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 mil-adaptive-center">
                                <Link href={route('team')} className="mil-link link-left mil-mb-30">
                                    <i className="fas fa-arrow-left"></i>
                                    <span>Go Back</span>
                                </Link>
                                <h2 className="mil-uppercase mil-mb-30">Hayman Andrews</h2>
                                <p>Engineering</p>
                            </div>
                        </div>
                        <div className="mil-portrait-position">
                            <div className="mil-portrait-frame">
                                <img src="/img/faces/t1.png" alt="Hayman Andrews" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* team member */}
            <section className="mil-team mil-p-120-120">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-8 col-lg-8 col-xl-8">
                            <h3 className="mil-mb-30">Biography</h3>
                            <p className="mil-mb-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam id, repudiandae ducimus ipsam magni neque iste provident fugiat laboriosam officia repellendus dolores enim perspiciatis a cupiditate nihil.</p>
                            <ul className="mil-timeline">
                                <li>
                                    <h5 className="mil-mb-5">Capital Agency</h5>
                                    <p className="mil-text-sm">2014-1017</p>
                                </li>

                                <li>
                                    <h5 className="mil-mb-5">Under Inc</h5>
                                    <p className="mil-text-sm">2017-1019</p>
                                </li>
                                <li>
                                    <h5 className="mil-mb-5">Access Technologies Solutions Group</h5>
                                    <p className="mil-text-sm">2019-Today</p>
                                </li>
                            </ul>
                            <p className="mil-mb-60">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Duis autem vel eum iriure dolor in hendrerit.</p>

                            <div className="mil-divider mil-mb-60"></div>
                            <div className="row">
                                <div className="col-lg-4">

                                    <h6 className="mil-mb-30">Wearable Dev</h6>

                                    <div className="mil-skill-frame mil-mb-60">
                                        <div className="mil-skill-track">
                                            <div className="mil-skill-prog" style={{ width: '65%' }}></div>
                                        </div>
                                        <div className="mil-text-sm">65%</div>
                                    </div>

                                </div>
                                <div className="col-lg-4">

                                    <h6 className="mil-mb-30">Design Analytics</h6>

                                    <div className="mil-skill-frame mil-mb-60">
                                        <div className="mil-skill-track">
                                            <div className="mil-skill-prog" style={{ width: '65%' }}></div>
                                        </div>
                                        <div className="mil-text-sm">65%</div>
                                    </div>

                                </div>
                                <div className="col-lg-4">

                                    <h6 className="mil-mb-30">Content Strategy</h6>

                                    <div className="mil-skill-frame mil-mb-60">
                                        <div className="mil-skill-track">
                                            <div className="mil-skill-prog" style={{ width: '65%' }}></div>
                                        </div>
                                        <div className="mil-text-sm">65%</div>
                                    </div>

                                </div>
                            </div>
                            <div className="mil-divider mil-mb-60"></div>
                            <h3 className="mil-mb-30">Skills</h3>
                            <p className="mil-mb-60">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            <div className="mil-divider mil-mb-60"></div>
                            <h3 className="mil-mb-60">Social</h3>
                            <ul className="mil-social-links mil-mb-30">
                                <li><a href="#.">Facebook</a></li>
                                <li><a href="#.">Instagram</a></li>
                                <li><a href="#.">LinkedIn</a></li>
                                <li><a href="#.">Twitter</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-lg-3">

                            <div className="mil-icon-box mil-mt-60-adapt">
                                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                    <img src="/img/icons/md/7.svg" alt="icon" />
                                </div>
                                <h4 className="mil-mb-30">Access Technologies Solutions allowed me to grow and <span className="mil-accent">reach goals</span> that I never imagined.</h4>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                                <p>Hayman Andrews</p>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
            {/* team member end */}

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
                                    <input type="email" placeholder="Your Email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
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
