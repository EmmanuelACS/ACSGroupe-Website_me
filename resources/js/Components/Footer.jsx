import { useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

const CONTACT = {
    email: 'Accesstechnology@acsgroupe.ci',
    phones: ['(+225) 07 77 44 91 91', '(+225) 27 22 54 81 81'],
    address: 'Abidjan, Cocody Danga, Côte d\u2019Ivoire',
};

export default function Footer() {
    const [email, setEmail] = useState('');
    const { t } = useLanguage();

    const submitSubscribe = (e) => {
        e.preventDefault();
        // Newsletter — pas de backend dédié dans le template d'origine.
        setEmail('');
    };

    return (
        <footer className="mil-dark-bg">
            <img src="/img/deco/map.png" alt="background" className="mil-footer-bg" />
            <div className="container">
                <div className="mil-footer-content mil-p-120-90">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-4 mil-mb-30">
                            <img src="/img/logo/logo-light.png" alt="Access Technologies Solution (ACS)" className="mil-logo mil-mb-30" style={{ width: 160, height: 'auto' }} />

                            <p className="mil-light-soft mil-mb-30">
                                Access Technologies Solution (ACS) — Accelerating Networks. Ne réagissez plus, anticipez.
                            </p>

                            <ul className="mil-light-soft mil-mb-30" style={{ listStyle: 'none', padding: 0 }}>
                                <li className="mil-mb-5">
                                    <span className="mil-accent">{t('contactInfo.email')} : </span>
                                    <a href={`mailto:${CONTACT.email}`} className="mil-light-soft">
                                        {CONTACT.email}
                                    </a>
                                </li>
                                <li className="mil-mb-5">
                                    <span className="mil-accent">{t('contactInfo.phone')} : </span>
                                    <a href={`tel:${CONTACT.phones[0].replace(/[^+\d]/g, '')}`} className="mil-light-soft">
                                        {CONTACT.phones[0]}
                                    </a>{' '}
                                    /{' '}
                                    <a href={`tel:${CONTACT.phones[1].replace(/[^+\d]/g, '')}`} className="mil-light-soft">
                                        {CONTACT.phones[1]}
                                    </a>
                                </li>
                                <li>
                                    <span className="mil-accent">{t('contactInfo.address')} : </span>
                                    {CONTACT.address}
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-7 mil-mt-60-adapt">
                            <div className="row">
                                <div className="col-lg-7 mil-mb-30">
                                    <h3 className="mil-light mil-up-font mil-mb-30">
                                        {t('footer.join')} <span className="mil-accent">{t('footer.company')}</span> <br />
                                        {t('footer.experience')}
                                    </h3>
                                    <p className="mil-light-soft">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        <br /> adipiscing elit, sed diam nonummy.
                                    </p>
                                </div>
                                <div className="col-lg-5 mil-mb-30">
                                    <form onSubmit={submitSubscribe}>
                                        <input
                                            className="mil-rounded-input mil-text-center mil-mb-5"
                                            type="email"
                                            placeholder={t('footer.emailPlaceholder')}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button className="mil-button mil-accent-bg mil-fw">
                                            <span>{t('cta.subscribeNow')}</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mil-divider mil-light"></div>

                <div className="mil-footer-links">
                    <ul className="mil-social mil-light">
                        <li className="mil-adapt-links">
                            <a href="#.">Facebook</a>
                            <a href="#.">FB</a>
                        </li>
                        <li className="mil-adapt-links">
                            <a href="#.">Instagram</a>
                            <a href="#.">IG</a>
                        </li>
                        <li className="mil-adapt-links">
                            <a href="#.">LinkedIn</a>
                            <a href="#.">IN</a>
                        </li>
                        <li className="mil-adapt-links">
                            <a href="#.">Twitter</a>
                            <a href="#.">TW</a>
                        </li>
                        <li className="mil-adapt-links">
                            <a href="#.">YouTube</a>
                            <a href="#.">YT</a>
                        </li>
                    </ul>
                    <ul className="mil-additional-links mil-light">
                        <li>
                            <a href="#.">{t('footer.terms')}</a>
                        </li>
                        <li>
                            <a href="#.">{t('footer.privacy')}</a>
                        </li>
                        <li>
                            <a href="#.">{t('footer.sitemap')}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mil-footer-bottom">
                <div className="container">
                    <p className="mil-text-sm mil-light">© Access Technologies Solution (ACS) 2026.</p>
                    <p className="mil-text-sm mil-light">{t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}
