export default function InputField({
    label,
    badge,
    badgeClassName = 'mil-accent',
    type = 'text',
    id,
    placeholder,
    value,
    onChange,
    error,
    as = 'input',
    wrapperClassName = 'mil-input-frame mil-mb-30',
    inputClassName = '',
}) {
    const Field = as;

    return (
        <div className={wrapperClassName}>
            <label>
                <span className="mil-light">{label}</span>
                {badge && <span className={badgeClassName}>{badge}</span>}
            </label>
            <Field
                type={as === 'input' ? type : undefined}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={inputClassName || undefined}
            />
            {error && <p className="mil-text-sm mil-accent">{error}</p>}
        </div>
    );
}
