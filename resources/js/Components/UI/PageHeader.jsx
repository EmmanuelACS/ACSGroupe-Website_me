import { Link } from '@inertiajs/react';

// Bannière de haut de page (titre + fil d'Ariane + image de fond) commune à
// About, Gallery, Team et aux pages Services/Solutions.
export default function PageHeader({ title, breadcrumbs }) {
    return (
        <div className="mil-banner-sm mil-deep-bg">
            <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
            <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
            <div className="mil-banner-content">
                <div className="container mil-relative">
                    <ul className="mil-breadcrumbs mil-mb-30">
                        {breadcrumbs.map((crumb) => (
                            <li key={crumb.label}>
                                <Link href={crumb.href}>{crumb.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <h2 className="mil-uppercase">{title}</h2>
                </div>
            </div>
        </div>
    );
}
