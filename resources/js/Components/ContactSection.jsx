import { useLanguage } from '@/Context/LanguageContext';
import InputField from '@/Components/InputField';
import Button from '@/Components/Button';

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
                            />
                            <InputField
                                label={t('home.contactForm.phone')}
                                badge={t('home.contactForm.optional')}
                                badgeClassName="mil-light-soft"
                                type="number"
                                placeholder={t('home.contactForm.phonePlaceholder')}
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                wrapperClassName="mil-input-frame mil-mb-60"
                            />
                            <div className="mil-attach-frame mil-mb-60">
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
                            />
                            <p className="mil-text-sm mil-light-soft mil-mb-15">{t('home.contactForm.privacyNotice')}</p>
                            <div className="mil-checbox-frame mil-mb-60">
                                <input className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" />
                                <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                                    {t('home.contactForm.consentPrefix')}{' '}
                                    <a href="#." className="mil-accent">
                                        {t('home.contactForm.consentLink')}
                                    </a>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <Button type="submit" disabled={processing} className="mil-fw">
                                {recentlySuccessful ? t('home.contactForm.messageSent') : t('cta.sendMessageNow')}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
