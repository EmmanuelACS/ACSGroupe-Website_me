import MainLayout from '@/Layouts/MainLayout';
import Slider from '@/Components/Slider';
import Partners from '@/Components/Partners';
import ContactSection from '@/Components/ContactSection';
import MarqueeSlider from '@/Components/UI/MarqueeSlider';
import { FeedCard } from '@/Components/UI/ContentCard';
import { Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';
import { DOMAINS, TESTIMONIALS } from '@/data/acsExpertise';
import { HOME_POSTS as posts, HOME_PROJECTS as projects } from '@/data/homeFeedData';
import { resolveImagePath } from '@/utils/image';

const skillPct = [65, 90, 50, 95, 60, 90, 80];

const HERO_SLIDESHOW_INTERVAL_MS = 3000;
// Diaporama d'arrière-plan du Hero : exclusivement les visuels de public/img/slideshow/.
const heroImages = [
    '/img/slideshow/DSC_0967.jpg',
    '/img/slideshow/1H5A0369.jpg',
    '/img/slideshow/1H5A0381.jpg',
    '/img/slideshow/1H5A0405.jpg',
    '/img/slideshow/image0.png',
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
    const [heroIndex, setHeroIndex] = useState(0);
    const [availableHeroImages, setAvailableHeroImages] = useState([]);

    // Ne garde que les visuels qui se chargent réellement, pour ne jamais
    // afficher d'image cassée (404) dans le diaporama du Hero.
    useEffect(() => {
        let cancelled = false;
        Promise.all(
            heroImages.map(
                (src) =>
                    new Promise((resolve) => {
                        const probe = new window.Image();
                        probe.onload = () => resolve(src);
                        probe.onerror = () => resolve(null);
                        probe.src = resolveImagePath(src);
                    })
            )
        ).then((results) => {
            if (!cancelled) setAvailableHeroImages(results.filter(Boolean));
        });
        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (availableHeroImages.length < 2) return undefined;
        const id = setInterval(() => {
            setHeroIndex((i) => (i + 1) % availableHeroImages.length);
        }, HERO_SLIDESHOW_INTERVAL_MS);
        return () => clearInterval(id);
    }, [availableHeroImages.length]);

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
    const portfolioItems = t('home.portfolio.items', []);
    const blogItems = t('home.blog.items', []);

    return (
        <MainLayout title="Access Technologies Solution (ACS) - Accelerating Networks">
            {/* banner */}
            <div className="mil-banner mil-top-space-0">
                <div className="mil-banner-slideshow">
                    {availableHeroImages.map((src, i) => (
                        <img
                            key={src}
                            src={resolveImagePath(src)}
                            className="mil-background-image absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
                            style={{ objectPosition: 'center', opacity: i === heroIndex ? 1 : 0 }}
                            alt="image"
                        />
                    ))}
                </div>
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
                    </div>

                    <MarqueeSlider
                        items={projects}
                        durationSeconds={32}
                        renderItem={(p, i, idx) => (
                            <FeedCard
                                key={`${p.id}-${idx}`}
                                href={route('project')}
                                img={resolveImagePath(p.img)}
                                alt={portfolioItems[i]?.title ?? 'project'}
                                title={portfolioItems[i]?.title}
                                byLabel={t('home.portfolio.cardBy')}
                                byName={p.name}
                                text={portfolioItems[i]?.text}
                            />
                        )}
                    />
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
                    </div>

                    <MarqueeSlider
                        items={posts}
                        durationSeconds={48}
                        renderItem={(post, i, idx) => (
                            <FeedCard
                                key={`${post.id}-${idx}`}
                                href={route('publication')}
                                img={resolveImagePath(post.img)}
                                alt={blogItems[i]?.title ?? 'article'}
                                title={blogItems[i]?.title}
                                byLabel={t('home.blog.cardBy')}
                                byName="ACS Group"
                                text={blogItems[i]?.text}
                            />
                        )}
                    />
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
                                        <span className="mil-h6">{t('common.prev')}</span>
                                    </div>
                                    <div className="mil-slider-btn-next mil-revi-next">
                                        <span className="mil-h6">{t('common.next')}</span>
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
                            speed: 2000,
                            loop: true,
                            autoplay: { delay: 8000, disableOnInteraction: false },
                            navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
                            breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {TESTIMONIALS.map((item) => (
                                <div className="swiper-slide" key={item.id}>
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="/img/icons/sm/11.svg" alt="quote" />
                                            <ul>
                                                {Array.from({ length: item.rating }).map((_, s) => (
                                                    <li key={s}>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">{item.comment}</p>
                                        <div className="mil-author">
                                            <img
                                                src={resolveImagePath(item.avatar)}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-red-500/30 shadow-md"
                                                loading="lazy"
                                            />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">{item.name}</h6>
                                                <span className="mil-text-sm">
                                                    {item.role} — {item.company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slider>
                </div>
            </section>

            <ContactSection data={data} setData={setData} errors={errors} processing={processing} recentlySuccessful={recentlySuccessful} onSubmit={submit} />
        </MainLayout>
    );
}
