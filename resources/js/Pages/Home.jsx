import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import Partners from '@/Components/Partners';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { DOMAINS } from '@/data/acsExpertise';

const skillPct = [65, 90, 50, 95, 60, 90, 80];

// Photos HD Unsplash de professionnels afro-descendants en tech / cloud / cybersécurité,
// en remplacement des visuels de remplissage d'origine.
const projects = [
    { img: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=900&h=700&fit=crop&auto=format&q=80', name: 'Jane Meldrum' },
    { img: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=900&h=700&fit=crop&auto=format&q=80', name: 'Nguta Ithya' },
    { img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900&h=700&fit=crop&auto=format&q=80', name: 'Roy Bricks' },
    { img: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=900&h=700&fit=crop&auto=format&q=80', name: 'Nguta Ithya' },
];

const posts = [
    { img: 1, size: 'mil-slide-50', reverse: false },
    { img: 2, size: 'mil-slide-25', reverse: true },
    { img: 3, size: 'mil-slide-25', reverse: false },
    { img: 4, size: 'mil-slide-50', reverse: false },
    { img: 5, size: 'mil-slide-25', reverse: true },
    { img: 6, size: 'mil-slide-25', reverse: false },
];

// Photos HD Unsplash (professionnels afro-descendants en tech), en remplacement
// des visuels de remplissage d'origine.
const reviews = [
    { face: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=200&h=200&fit=crop&crop=faces&auto=format&q=80', name: 'Tamzyn French' },
    { face: 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=200&h=200&fit=crop&crop=faces&auto=format&q=80', name: 'Margaret Williams' },
    { face: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=200&h=200&fit=crop&crop=faces&auto=format&q=80', name: 'Tarryn Gillies' },
    { face: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?w=200&h=200&fit=crop&crop=faces&auto=format&q=80', name: 'Tamzyn French' },
    { face: 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=200&h=200&fit=crop&crop=faces&auto=format&q=80', name: 'Margaret Williams' },
];

export default function Home() {
    const { t, language } = useLanguage();
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        first_name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null,
    });

    useEffect(() => {
        console.info('[Language] Rendering page in language:', language);
    }, [language]);

    useEffect(() => {
        console.info('[Home] Partners section rendered below Business Success With Technology');
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), { forceFormData: true });
    };

    const illustrationItems = [
        [t('home.illustration.dedicatedTeam'), 1],
        [t('home.illustration.developers'), 2],
        [t('home.illustration.designers'), 3],
    ];
    const skills = t('home.skills.labels', []).map((label, i) => [label, skillPct[i]]);
    const howItWorksItems = t('home.howItWorks.items', []);

    return (
        <MainLayout title="Access Technologies Solution (ACS) - Accelerating Networks">
            {/* banner */}
            <div className="mil-banner mil-top-space-0">
                <Slider
                    className="mil-banner-slideshow"
                    options={{
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 1500,
                        effect: 'fade',
                        parallax: true,
                        autoplay: { delay: 5000 },
                        loop: true,
                        pagination: { el: '.mil-pagination', type: 'bullets', clickable: true },
                    }}
                >
                    <div className="swiper-wrapper">
                        {[
                            'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=1600&h=900&fit=crop&auto=format&q=80',
                            '/img/photo/2.jpg',
                            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&h=900&fit=crop&auto=format&q=80',
                        ].map((src, i) => (
                            <div className="swiper-slide" key={i}>
                                <img
                                    src={src}
                                    className="mil-background-image"
                                    style={{ objectPosition: 'center' }}
                                    data-swiper-parallax="-100"
                                    data-swiper-parallax-scale="1.1"
                                    alt="image"
                                />
                            </div>
                        ))}
                    </div>
                </Slider>
                <div className="mil-overlay"></div>

                <div className="mil-banner-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-8">
                                <span className="mil-suptitle mil-mb-60">
                                    <span className="mil-light">{t('hero.suptitleSoft')}</span> <span className="mil-accent">{t('hero.suptitleAccent')}</span>
                                </span>
                                <h1 className="mil-mb-30">
                                    <span className="mil-uppercase mil-light">
                                        {t('hero.titleLine1')} <br />
                                        {t('hero.titleLine2')}
                                    </span>{' '}
                                    <span className="mil-font-3 mil-accent">{t('hero.titleAccent')}</span>
                                </h1>
                                <p className="mil-light mil-mb-60" style={{ fontWeight: 600, letterSpacing: '.02em' }}>
                                    {t('hero.tagline')} — {t('hero.slogan')}
                                </p>
                                <div className="mil-flex-hori-center">
                                    <div>
                                        <Link href={route('contact')} className="mil-button mil-border mil-light">
                                            <span>{t('cta.letsTalk')}</span>
                                        </Link>
                                    </div>
                                    <p className="mil-button-descr mil-light-soft">{t('hero.descr')}</p>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="mil-illustration-1">
                                    {illustrationItems.map(([label, n]) => (
                                        <div className={`mil-item mil-item-${n}`} key={n}>
                                            <div className="mil-plus">
                                                <div className="mil-hover-window">
                                                    <div className="mil-window-content">
                                                        <h5 className="mil-dark mil-mb-15">{t('home.illustration.expertsTitle')}</h5>
                                                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                                                        <p className="mil-text-sm">{t('home.illustration.expertsText')}</p>
                                                    </div>
                                                </div>
                                                <div className="mil-item-hover">
                                                    <div className="mil-plus-icon">+</div>
                                                    <h6 className="mil-light">{label}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* services */}
            <section className="mil-services mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="container">
                    <h2 className="mil-mb-30">
                        {t('home.services.headingLine1')} <span className="mil-accent">{t('home.services.headingAccent')}</span>
                    </h2>
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <h4 className="mil-mb-60 mil-mt-30">{t('home.services.groupConseil')}</h4>
                            {DOMAINS.slice(0, 3).map((domain, i) => (
                                <div key={domain.title}>
                                    <div className="mil-divider mil-divider-left"></div>
                                    <div className="mil-service-item">
                                        <div className="mil-service-icon">
                                            <div className="mil-icon-frame mil-icon-frame-md">
                                                <img src={`/img/icons/md/${i + 1}.svg`} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="mil-service-text">
                                            <h5 className="mil-mb-30">
                                                <span className="mil-accent">{String(i + 1).padStart(2, '0')}</span> {domain.title}
                                            </h5>
                                            <p>{domain.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h4 className="mil-mb-60 mil-mt-30">{t('home.services.groupSecurite')}</h4>
                            {DOMAINS.slice(3, 6).map((domain, i) => (
                                <div key={domain.title}>
                                    <div className="mil-divider mil-divider-left"></div>
                                    <div className="mil-service-item">
                                        <div className="mil-service-icon">
                                            <div className="mil-icon-frame mil-icon-frame-md">
                                                <img src={`/img/icons/md/${i + 4}.svg`} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="mil-service-text">
                                            <h5 className="mil-mb-30">
                                                <span className="mil-accent">{String(i + 1).padStart(2, '0')}</span> {domain.title}
                                            </h5>
                                            <p>{domain.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* portfolio */}
            <section className="mil-works mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-60-adapt">
                        <div className="col-md-6 col-xl-6">
                            <h2 className="mil-mb-30">{t('home.portfolio.heading')}</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <div className="mil-slider-nav mil-mb-30">
                                    <div className="mil-slider-btn-prev mil-works-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">{t('home.portfolio.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-works-next">
                                        <span className="mil-h6">{t('home.portfolio.next')}</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
                        className="mil-works-slider mil-mb-90"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-works-prev', nextEl: '.mil-works-next' },
                            breakpoints: { 768: { slidesPerView: 2 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {projects.map((p, i) => (
                                <div className="swiper-slide" key={i}>
                                    <Link href={route('project')} className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src={p.img} alt="project" loading="lazy" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">{t('home.portfolio.cardTitle')}</h4>
                                                <h6>
                                                    {t('home.portfolio.cardBy')} <span className="mil-accent">{p.name}</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>{t('home.portfolio.cardText')}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <Link href={route('portfolio')} className="mil-link mil-mb-30">
                                <span>{t('home.portfolio.viewAllCases')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <Link href={route('contact')} className="mil-button mil-border mil-mb-30">
                                    <span>{t('home.portfolio.getStarted')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* how it works */}
            <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
                <div className="mil-deco" style={{ top: 0, right: '20%' }}></div>
                <div className="mil-deco" style={{ bottom: 0, left: '30%', transform: 'rotate(180deg)' }}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('home.howItWorks.suptitle')}</span>
                    <h2 className="mil-mb-90">
                        {t('home.howItWorks.headingLine1')} <span className="mil-accent">{t('home.howItWorks.headingAccent')}</span> {t('home.howItWorks.headingEnd')}
                    </h2>
                    <div className="row">
                        {howItWorksItems.map((item, i) => (
                            <div className="col-md-6 col-xl-3" key={item.title}>
                                <div className="mil-mb-60">
                                    <div className="mil-icon-box-head mil-mb-30">
                                        <div className="mil-icon-frame mil-icon-frame-sm">
                                            <img src={`/img/icons/sm/${i + 1}.svg`} alt="icon" />
                                        </div>
                                        <h5>{item.title}</h5>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <a href="#." className="mil-link mil-mb-30">
                                <span>{t('home.howItWorks.learnMore')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mb-30">
                                    <span>{t('home.howItWorks.howWeWork')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* skills */}
            <section className="mil-skills mil-p-120-90">
                <div className="container">
                    <div className="row align-items-end mil-mb-90">
                        <div className="col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('home.skills.suptitle')}</span>
                            <h2>
                                {t('home.skills.headingLine1')} <span className="mil-accent">{t('home.skills.headingAccent')}</span> <br />
                                {t('home.skills.headingLine2')}
                            </h2>
                        </div>
                        <div className="col-xl-6">
                            <p className="mil-mt-60-adapt">{t('home.skills.text')}</p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        {skills.map(([label, pct]) => (
                            <div className="col-md-6 col-xl-3" key={label}>
                                <h6 className="mil-mb-30">{label}</h6>
                                <div className="mil-skill-frame mil-mb-60">
                                    <div className="mil-skill-track">
                                        <div className="mil-skill-prog" style={{ width: `${pct}%` }}></div>
                                    </div>
                                    <div className="mil-text-sm">{pct}%</div>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-6 col-xl-3 mil-text-center">
                            <a href="#." className="mil-link mil-mb-30">
                                <span>{t('home.skills.more')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* partners */}
            <div className="mil-partners mil-p-90-60">
                <div className="container">
                    <Partners />
                </div>
            </div>

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            {/* blog */}
            <section className="mil-blog mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-90">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('home.blog.suptitle')}</span>
                            <h2>{t('home.blog.heading')}</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-blog-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">{t('home.blog.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-blog-next">
                                        <span className="mil-h6">{t('home.blog.next')}</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider
                        className="mil-blog-slider mil-mb-90"
                        options={{
                            spaceBetween: 30,
                            speed: 800,
                            slidesPerView: 1,
                            navigation: { prevEl: '.mil-blog-prev', nextEl: '.mil-blog-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 2 }, 1200: { slidesPerView: 'auto' } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {posts.map((post, i) => (
                                <div className={`swiper-slide ${post.size}`} key={i}>
                                    <Link href={route('publication')} className={`mil-card${post.size === 'mil-slide-25' ? ' mil-card-sm' : ''}${post.reverse ? ' mil-reverse-sm' : ''}`}>
                                        {!post.reverse && (
                                            <div className="mil-cover-frame">
                                                <img src={`/img/blog/${post.img}.jpg`} alt="project" />
                                            </div>
                                        )}
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">{t('home.blog.cardTitle')}</h4>
                                                <h6>
                                                    {t('home.blog.cardBy')} <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>{t('home.blog.cardText')}</p>
                                            </div>
                                        </div>
                                        {post.reverse && (
                                            <div className="mil-cover-frame">
                                                <img src={`/img/blog/${post.img}.jpg`} alt="project" />
                                            </div>
                                        )}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Slider>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <Link href={route('blog')} className="mil-link">
                                <span>{t('home.blog.viewMore')}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* reviews */}
            <section className="mil-reviews mil-deep-bg mil-p-120-120">
                <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
                <div className="container">
                    <div className="row align-items-center mil-mb-90">
                        <div className="col-md-6 col-xl-6">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{t('sections.testimonial')}</span>
                            <h2>{t('sections.clientsSay')}</h2>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="mil-adaptive-right mil-mt-60-adapt">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-revi-prev">
                                        <i className="fas fa-arrow-left"></i>
                                        <span className="mil-h6">{t('home.portfolio.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-revi-next">
                                        <span className="mil-h6">{t('home.portfolio.next')}</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider
                        className="mil-revi-slider"
                        options={{
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 800,
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {reviews.map((r, i) => (
                                <div className="swiper-slide" key={i}>
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="/img/icons/sm/11.svg" alt="quote" />
                                            <ul>
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <li key={s}>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">{t('home.reviews.text')}</p>
                                        <div className="mil-author">
                                            <img src={r.face} alt={r.name} loading="lazy" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">{r.name}</h6>
                                                <span className="mil-text-sm">{t('home.reviews.agencyRole')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>

            {/* contact */}
            <section className="mil-contact mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, right: '10%' }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">{t('sections.contactTitle')}</h2>
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.name')}</span>
                                        <span className="mil-accent">{t('home.contactForm.required')}</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={t('home.contactForm.namePlaceholder')}
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                    />
                                    {errors.first_name && <p className="mil-text-sm mil-accent">{errors.first_name}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.emailAddress')}</span>
                                        <span className="mil-accent">{t('home.contactForm.required')}</span>
                                    </label>
                                    <input type="email" id="email" placeholder={t('home.contactForm.emailPlaceholder')} value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                    {errors.email && <p className="mil-text-sm mil-accent">{errors.email}</p>}
                                </div>
                                <div className="mil-input-frame mil-mb-60">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.phone')}</span>
                                        <span className="mil-light-soft">{t('home.contactForm.optional')}</span>
                                    </label>
                                    <input type="number" placeholder={t('home.contactForm.phonePlaceholder')} value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                </div>
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
                                <div className="mil-input-frame mil-mb-30">
                                    <label>
                                        <span className="mil-light">{t('home.contactForm.emailAddress')}</span>
                                        <span className="mil-accent">{t('home.contactForm.required')}</span>
                                    </label>
                                    <textarea placeholder={t('home.contactForm.messagePlaceholder')} value={data.message} onChange={(e) => setData('message', e.target.value)}></textarea>
                                    {errors.message && <p className="mil-text-sm mil-accent">{errors.message}</p>}
                                </div>
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
                                <button className="mil-button mil-accent-bg mil-fw" disabled={processing}>
                                    <span>{recentlySuccessful ? t('home.contactForm.messageSent') : t('cta.sendMessageNow')}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </MainLayout>
    );
}
