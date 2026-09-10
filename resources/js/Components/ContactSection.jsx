import { useLanguage } from '@/Context/LanguageContext';
import InputField from '@/Components/InputField';

const PILL_INPUT_CLASS =
    'w-full bg-[#1E293B] dark:bg-slate-800/90 border-2 border-slate-600/80 dark:border-slate-600 rounded-xl! px-5 py-3.5 text-sm text-white placeholder-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none transition-all duration-300 shadow-md';

const TEXTAREA_CLASS =
    'w-full h-44 bg-[#1E293B] dark:bg-slate-800/90 border-2 border-slate-600/80 dark:border-slate-600 rounded-xl! p-5 text-sm text-white placeholder-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none transition-all duration-300 shadow-md resize-none';

export default function ContactSection({ data, setData, errors, processing, recentlySuccessful, onSubmit }) {
    const { t } = useLanguage();

    return (
        <section className="mil-contact mil-gradient-bg mil-p-120-0">
            <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
            <div className="container">
                <h2 className="mil-light mil-mb-90">{t('sections.contactTitle')}</h2>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <InputField
                                label={t('home.contactForm.name')}
                                badge={t('home.contactForm.required')}
                                placeholder={t('home.contactForm.namePlaceholder')}
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                error={errors.first_name}
                                inputClassName={PILL_INPUT_CLASS}
                            />
                            <InputField
                                label={t('home.contactForm.emailAddress')}
                                badge={t('home.contactForm.required')}
                                type="email"
                                id="email"
                                placeholder={t('home.contactForm.emailPlaceholder')}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                error={errors.email}
                                inputClassName={PILL_INPUT_CLASS}
                            />
                            <InputField
                                label={t('home.contactForm.phone')}
                                badge={t('home.contactForm.optional')}
                                badgeClassName="mil-light-soft"
                                type="tel"
                                placeholder={t('home.contactForm.phonePlaceholder')}
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                wrapperClassName="mil-input-frame mil-mb-60"
                                inputClassName={`${PILL_INPUT_CLASS} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                            />
                            <div className="mil-attach-frame mil-mb-60 w-full border-2 border-dashed border-slate-500/70 hover:border-red-500 bg-[#1E293B]/60 rounded-xl! p-5 text-center cursor-pointer transition-all duration-300">
                                <i className="fas fa-paperclip"></i>
                                <label className={`mil-custom-file-input${data.attachment ? ' mil-with-file' : ''}`}>
                                    <span>{data.attachment ? data.attachment.name : t('home.contactForm.attachFile')}</span>
                                    <input type="file" id="mil-file-input" onChange={(e) => setData('attachment', e.target.files[0] ?? null)} />
                                </label>
                                <p className="mil-text-sm mil-light-soft">{t('home.contactForm.upTo20MB')}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <InputField
                                as="textarea"
                                label={t('home.contactForm.emailAddress')}
                                badge={t('home.contactForm.required')}
                                placeholder={t('home.contactForm.messagePlaceholder')}
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                error={errors.message}
                                inputClassName={TEXTAREA_CLASS}
                            />
                            <p className="mil-text-sm mil-light-soft mil-mb-15">{t('home.contactForm.privacyNotice')}</p>
                            <div className="mil-checbox-frame mil-mb-60">
                                <input
                                    className="mil-checkbox w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-600 bg-slate-900"
                                    id="checkbox-1"
                                    type="checkbox"
                                    value="value"
                                />
                                <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                                    {t('home.contactForm.consentPrefix')}{' '}
                                    <a href="#." className="mil-accent">
                                        {t('home.contactForm.consentLink')}
                                    </a>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-full! border border-red-500/40 bg-red-600/10 text-white font-bold text-sm py-3.5 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 cursor-pointer"
                            >
                                {recentlySuccessful ? t('home.contactForm.messageSent') : t('cta.sendMessageNow')}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
