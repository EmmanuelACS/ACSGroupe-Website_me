import { useLanguage } from '@/Context/LanguageContext';
import ContactFormFields from '@/Components/UI/ContactFormFields';

const PILL_INPUT_CLASS =
    'w-full bg-[#1E293B] dark:bg-slate-800/90 border-2 border-slate-600/80 dark:border-slate-600 rounded-xl! px-5 py-3.5 text-sm text-white placeholder-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none transition-all duration-300 shadow-md';

const TEXTAREA_CLASS =
    'w-full h-44 bg-[#1E293B] dark:bg-slate-800/90 border-2 border-slate-600/80 dark:border-slate-600 rounded-xl! p-5 text-sm text-white placeholder-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none transition-all duration-300 shadow-md resize-none';

const PILL_PHONE_INPUT_CLASS = `${PILL_INPUT_CLASS} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`;

const THEME = {
    inputClassName: PILL_INPUT_CLASS,
    phoneInputClassName: PILL_PHONE_INPUT_CLASS,
    textareaClassName: TEXTAREA_CLASS,
    phoneWrapperClassName: 'mil-input-frame mil-mb-60',
    attachFrameClassName:
        'mil-attach-frame mil-mb-60 w-full border-2 border-dashed border-slate-500/70 hover:border-red-500 bg-[#1E293B]/60 rounded-xl! p-5 text-center cursor-pointer transition-all duration-300',
    checkboxClassName: 'mil-checkbox w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-600 bg-slate-900',
    buttonClassName:
        'w-full rounded-full! border border-red-500/40 bg-red-600/10 text-white font-bold text-sm py-3.5 transition-all duration-300 ease-out hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 cursor-pointer',
};

export default function ContactSection({ data, setData, errors, processing, recentlySuccessful, onSubmit }) {
    const { t } = useLanguage();

    const strings = {
        nameLabel: t('home.contactForm.name'),
        namePlaceholder: t('home.contactForm.namePlaceholder'),
        required: t('home.contactForm.required'),
        optional: t('home.contactForm.optional'),
        emailLabel: t('home.contactForm.emailAddress'),
        emailPlaceholder: t('home.contactForm.emailPlaceholder'),
        phoneLabel: t('home.contactForm.phone'),
        phonePlaceholder: t('home.contactForm.phonePlaceholder'),
        attachFile: t('home.contactForm.attachFile'),
        upTo20MB: t('home.contactForm.upTo20MB'),
        messageLabel: t('home.contactForm.emailAddress'),
        messagePlaceholder: t('home.contactForm.messagePlaceholder'),
        privacyNotice: t('home.contactForm.privacyNotice'),
        consentPrefix: t('home.contactForm.consentPrefix'),
        consentLink: t('home.contactForm.consentLink'),
        messageSent: t('home.contactForm.messageSent'),
        sendNow: t('cta.sendMessageNow'),
    };

    return (
        <section className="mil-contact mil-gradient-bg mil-p-120-0">
            <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
            <div className="container">
                <h2 className="mil-light mil-mb-90">{t('sections.contactTitle')}</h2>
                <ContactFormFields
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    recentlySuccessful={recentlySuccessful}
                    onSubmit={onSubmit}
                    strings={strings}
                    theme={THEME}
                />
            </div>
        </section>
    );
}
