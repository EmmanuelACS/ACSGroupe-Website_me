import { Link } from '@inertiajs/react';

export default function Button({ variant = 'primary', href, onClick, type = 'button', disabled = false, className = '', children }) {
    const variantClass = variant === 'primary' ? 'mil-button mil-accent-bg' : 'mil-button mil-border';
    const classes = `${variantClass}${className ? ` ${className}` : ''}`;

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                <span>{children}</span>
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            <span>{children}</span>
        </button>
    );
}
