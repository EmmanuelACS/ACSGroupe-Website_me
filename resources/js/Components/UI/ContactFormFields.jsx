import InputField from '@/Components/InputField';

// Corps de formulaire de contact "court" (Nom / Email / Téléphone / Pièce jointe / Message /
// consentement / bouton d'envoi), partagé entre ContactSection.jsx (bas de page) et
// TeamSingle.jsx. Chaque appelant fournit ses propres libellés et classes pour préserver
// son thème visuel exact (pilule Tailwind vs style historique du template).
export default function ContactFormFields({
    data,
    setData,
    errors,
    processing,
    recentlySuccessful,
    onSubmit,
    strings,
    theme = {},
}) {
    const {
        wrapperClassName = 'mil-input-frame mil-mb-30',
        phoneWrapperClassName = 'mil-input-frame mil-mb-60',
        inputClassName = '',
        phoneInputClassName = inputClassName,
        textareaClassName = inputClassName,
        attachFrameClassName = 'mil-attach-frame mil-mb-60',
        checkboxClassName = 'mil-checkbox',
        checkboxFrameClassName = 'mil-checbox-frame mil-mb-60',
        buttonClassName = 'mil-button mil-accent-bg mil-fw',
    } = theme;

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <InputField
                        label={strings.nameLabel}
                        badge={strings.required}
                        placeholder={strings.namePlaceholder}
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        error={errors.first_name}
                        wrapperClassName={wrapperClassName}
                        inputClassName={inputClassName}
                    />
                    <InputField
                        label={strings.emailLabel}
                        badge={strings.required}
                        type="email"
                        placeholder={strings.emailPlaceholder}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                        wrapperClassName={wrapperClassName}
                        inputClassName={inputClassName}
                    />
                    <InputField
                        label={strings.phoneLabel}
                        badge={strings.optional}
                        badgeClassName="mil-light-soft"
                        type="number"
                        placeholder={strings.phonePlaceholder}
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        wrapperClassName={phoneWrapperClassName}
                        inputClassName={phoneInputClassName}
                    />
                    <div className={attachFrameClassName}>
                        <i className="fas fa-paperclip"></i>
                        <label className={`mil-custom-file-input${data.attachment ? ' mil-with-file' : ''}`}>
                            <span>{data.attachment ? data.attachment.name : strings.attachFile}</span>
                            <input type="file" id="mil-file-input" onChange={(e) => setData('attachment', e.target.files[0] ?? null)} />
                        </label>
                        <p className="mil-text-sm mil-light-soft">{strings.upTo20MB}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <InputField
                        as="textarea"
                        label={strings.messageLabel}
                        badge={strings.required}
                        placeholder={strings.messagePlaceholder}
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        error={errors.message}
                        wrapperClassName={wrapperClassName}
                        inputClassName={textareaClassName}
                    />
                    <p className="mil-text-sm mil-light-soft mil-mb-15">{strings.privacyNotice}</p>
                    <div className={checkboxFrameClassName}>
                        <input className={checkboxClassName} id="checkbox-1" type="checkbox" value="value" />
                        <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                            {strings.consentPrefix}{' '}
                            <a href="#." className="mil-accent">
                                {strings.consentLink}
                            </a>
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" disabled={processing} className={buttonClassName}>
                        <span>{recentlySuccessful ? strings.messageSent : strings.sendNow}</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
