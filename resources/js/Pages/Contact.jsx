import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import InputField from '@/Components/InputField';

const LABEL_CLASS = 'text-slate-700 dark:text-slate-200 font-semibold mb-2 block';
const FIELD_CLASS =
    'bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border-2 border-slate-300 dark:border-slate-700 focus:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-3 w-full shadow-sm';
const FIELD_WRAPPER_CLASS = 'mil-input-frame mil-dark-input mil-mb-30';

export default function Contact() {
    const { t, language } = useLanguage();
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

    useEffect(() => {
        console.info('[Language] Rendering contact/global page in:', language);
    }, [language]);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), { forceFormData: true });
    };

    return (
        <MainLayout title="Contact — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>{t('contact.breadcrumbHome')}</Link>
                            </li>
                            <li>
                                <Link href={route('contact')}>{t('contact.breadcrumbLabel')}</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">{t('contact.bannerTitle')}</h2>
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
                                    <span className="mil-accent">01.</span> {t('contact.step1')}
                                </h4>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <InputField
                                            label={t('contact.firstName')}
                                            placeholder={t('contact.firstNamePlaceholder')}
                                            value={data.first_name}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                            error={errors.first_name}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputField
                                            label={t('contact.lastName')}
                                            placeholder={t('contact.lastNamePlaceholder')}
                                            value={data.last_name}
                                            onChange={(e) => setData('last_name', e.target.value)}
                                            error={errors.last_name}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputField
                                            label={t('contact.emailAddress')}
                                            type="email"
                                            placeholder={t('contact.emailPlaceholder')}
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            error={errors.email}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputField
                                            label={t('contact.phone')}
                                            type="number"
                                            placeholder={t('contact.phonePlaceholder')}
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            error={errors.phone}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputField
                                            label={t('contact.company')}
                                            placeholder={t('contact.companyPlaceholder')}
                                            value={data.company}
                                            onChange={(e) => setData('company', e.target.value)}
                                            error={errors.company}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                    <div className="col-lg-6 mil-mb-30">
                                        <InputField
                                            label={t('contact.role')}
                                            placeholder={t('contact.rolePlaceholder')}
                                            value={data.role}
                                            onChange={(e) => setData('role', e.target.value)}
                                            error={errors.role}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                </div>

                                <h4 className="mil-mb-60">
                                    <span className="mil-accent">02.</span> {t('contact.step2')}
                                </h4>

                                <div className="row">
                                    <div className="col-lg-6 mil-mb-30">
                                        <InputField
                                            label={t('contact.productDesign')}
                                            placeholder={t('contact.productDesignPlaceholder')}
                                            value={data.product_design}
                                            onChange={(e) => setData('product_design', e.target.value)}
                                            error={errors.product_design}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>
                                </div>

                                <h4 className="mil-mb-60">
                                    <span className="mil-accent">03.</span> {t('contact.step3')}
                                </h4>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <InputField
                                            as="textarea"
                                            label={t('contact.projectDescription')}
                                            placeholder={t('contact.projectMessagePlaceholder')}
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            error={errors.message}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={`mil-shortened ${FIELD_CLASS}`}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mil-attach-frame mil-dark mil-mb-30">
                                            <i className="fas fa-paperclip"></i>
                                            <label className={`mil-custom-file-input${data.attachment ? ' mil-with-file' : ''}`}>
                                                <span>{data.attachment ? data.attachment.name : t('contact.attachFile')}</span>
                                                <input
                                                    type="file"
                                                    id="mil-file-input"
                                                    onChange={(e) => setData('attachment', e.target.files[0] ?? null)}
                                                />
                                            </label>
                                            <p className="mil-text-sm mil-light-soft">{t('contact.upTo20MB')}</p>
                                            {errors.attachment && <p className="mil-text-sm mil-accent">{errors.attachment}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mil-mb-30">
                                        <InputField
                                            label={t('contact.projectBudget')}
                                            type="number"
                                            placeholder={t('contact.budgetPlaceholder')}
                                            value={data.budget}
                                            onChange={(e) => setData('budget', e.target.value)}
                                            error={errors.budget}
                                            wrapperClassName={FIELD_WRAPPER_CLASS}
                                            inputClassName={FIELD_CLASS}
                                            labelClassName={LABEL_CLASS}
                                            labelTextClassName=""
                                        />
                                    </div>

                                    <div className="col-lg-12">
                                        <button className="mil-button mil-border mil-fw" disabled={processing}>
                                            <span>{recentlySuccessful ? t('home.contactForm.messageSent') : t('contact.submitNow')}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-xl-3 mil-mb-120">
                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">{t('contact.sidebarSupportTitle')}</h5>
                                <p className="mil-mb-20">{t('contact.sidebarSupportText')}</p>
                                <Link href={route('contact')} className="mil-link mil-link-sm">
                                    <span>{t('contact.supportNow')}</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="mil-divider mil-mb-60"></div>

                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/8.svg" alt="icon" />
                                </div>
                                <h5 className="mil-list-title mil-mb-30">{t('contact.needHelpTitle')}</h5>
                                <p>{t('contact.needHelpText')}</p>
                            </div>

                            <div className="mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                    <img src="/img/icons/md/9.svg" alt="icon" />
                                </div>
                                <h5 className="mil-list-title mil-mb-30">{t('contact.needMoreInfoTitle')}</h5>
                                <p>{t('contact.needMoreInfoText')}</p>
                            </div>

                            <div className="mil-divider mil-mb-60"></div>

                            <Link href={route('contact')} className="mil-link mil-link-sm mil-mb-15">
                                <span>{t('contact.legalityGuide')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <br />
                            <Link href={route('contact')} className="mil-link mil-link-sm">
                                <span>{t('contact.securityCenter')}</span>
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
                        src="https://www.google.com/maps?q=Cocody+Danga,+Abidjan,+C%C3%B4te+d%27Ivoire&output=embed"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Access Technologies Solution (ACS) — Cocody Danga, Abidjan"
                    ></iframe>
                </div>
                <div className="container"></div>
            </div>
            {/* map end */}

            {/* contact info */}
            <section className="mil-p-120-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 mil-mb-60">
                            <div className="mil-mb-60">
                                <h4 className="mil-mb-30">{t('contact.countryTitle')}</h4>
                                <h5 className="mil-list-title mil-mb-15">{t('contact.cityTitle')}</h5>
                                <p className="mil-mb-30">{t('contact.address')}</p>
                                <div className="mil-divider mil-divider-left mil-mb-30"></div>

                                <h6 className="mil-mb-15">
                                    <span className="mil-accent">(+225)</span> 07 77 44 91 91
                                </h6>
                                <h6 className="mil-mb-15">
                                    <span className="mil-accent">(+225)</span> 27 22 54 81 81
                                </h6>
                                <h6>
                                    <span className="mil-accent">{t('contact.emailLabel')}</span>
                                    <a href="mailto:Accesstechnology@acsgroupe.ci">Accesstechnology@acsgroupe.ci</a>
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
