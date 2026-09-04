import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

const MAN_1 = 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&h=500&fit=crop&crop=faces&auto=format&q=80';
const MAN_2 = 'https://images.unsplash.com/photo-1679117349740-c46c819d0373?w=500&h=500&fit=crop&crop=faces&auto=format&q=80';
const WOMAN_1 = 'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=500&h=500&fit=crop&crop=faces&auto=format&q=80';

// Photos HD Unsplash de professionnels afro-descendants en tech, en
// remplacement des visuels de remplissage d'origine.
const members = [
    { face: MAN_1, name: 'Andrew Kazantzis', role: 'CEO Access Technologies Solution', extraClass: '' },
    { face: WOMAN_1, name: 'Jane Meldrum', role: 'Designer', extraClass: '' },
    { face: MAN_2, name: 'Roy Ellawala', role: 'App Developer', extraClass: ' mil-mb-30' },
    { face: MAN_1, name: 'Andrew Kazantzis', role: 'CEO Access Technologies Solution', extraClass: '' },
    { face: WOMAN_1, name: 'Jane Meldrum', role: 'Designer', extraClass: '' },
    { face: MAN_2, name: 'Roy Ellawala', role: 'App Developer', extraClass: '' },
];

const values = [
    ['01.', 'Productivity'],
    ['02.', 'Transparency'],
    ['03.', 'Personality'],
    ['04.', 'Volition'],
];

export default function Team() {
    return (
        <MainLayout title="Équipe — Access Technologies Solution (ACS)">
            {/* banner */}
            <div className="mil-banner-sm mil-deep-bg">
                <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li>
                                <Link href={route('home')}>Accueil</Link>
                            </li>
                            <li>
                                <Link href={route('team')}>Team</Link>
                            </li>
                        </ul>
                        <h2 className="mil-uppercase">Leadership Team</h2>
                    </div>
                </div>
            </div>
            {/* banner end */}

            {/* team */}
            <section className="mil-team mil-p-120-60">
                <div className="container">
                    <h3 className="mil-text-center mil-mb-120">
                        It is a long established fact that a <span className="mil-accent">reader will be <br />distracted</span> by the readable content.
                    </h3>
                    <div className="row">
                        {members.map((m, i) => (
                            <div className="col-sm-6 col-lg-4" key={i}>
                                <Link href={route('team.single')} className={`mil-team-card mil-mb-60${m.extraClass}`}>
                                    <div className="mil-image-frame mil-mb-30">
                                        <img src={m.face} alt={m.name} loading="lazy" />
                                        <div className="mil-team-circle"></div>
                                    </div>
                                    <h4 className="mil-mb-10">{m.name}</h4>
                                    <p>{m.role}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* team end */}

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* icon boxes */}
            <section className="mil-icon-boxes mil-p-120-60">
                <div className="container">
                    <div className="row align-items-center justify-content-between mil-mb-90">
                        <div className="col-xl-6">
                            <h2>
                                Values that <span className="mil-accent">Lead Us</span>
                            </h2>
                        </div>
                        <div className="col-xl-5">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="row">
                        {values.map(([num, label]) => (
                            <div className="col-md-6 col-xl-3" key={label}>
                                <div className="mil-icon-box mil-center mil-mb-60">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                        <img src="/img/icons/md/5.svg" alt="icon" />
                                    </div>
                                    <h5 className="mil-mb-20">
                                        <span className="mil-accent">{num}</span>&nbsp; {label}
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* icon boxes end */}

            {/* call to action */}
            <section className="call-to-action mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: '15%' }}></div>
                <div className="container mil-text-center">
                    <div className="mil-cta-frame">
                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
                            <img src="/img/icons/md/6l.svg" alt="icon" />
                        </div>
                        <p className="mil-light mil-mb-30">Leadership Team</p>
                        <h2 className="mil-light mil-mb-30">
                            Let&rsquo;s <span className="mil-accent">Open the World</span> of IT to You
                        </h2>
                        <p className="mil-light-soft mil-mb-60">
                            It is a long established fact that a reader will be distracted by the readable content <br /> of a page when looking at its layout.
                        </p>
                        <a href="#." className="mil-button mil-border mil-light">
                            <span>Book an Appointment</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* call to action end */}
        </MainLayout>
    );
}
