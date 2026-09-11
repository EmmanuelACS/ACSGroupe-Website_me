import { Head, Link, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { href: 'admin.dashboard', icon: 'fa-gauge-high', label: 'Tableau de bord' },
    { href: 'admin.staff.index', icon: 'fa-users', label: 'Équipe & Direction' },
    { href: 'admin.gallery.index', icon: 'fa-images', label: 'Galerie & Événements' },
    { href: 'admin.news.index', icon: 'fa-newspaper', label: 'Actualités IT' },
    { href: 'admin.slideshow.index', icon: 'fa-photo-film', label: 'Diaporama' },
    { href: 'admin.settings.index', icon: 'fa-gear', label: 'Paramètres' },
    { href: 'admin.messages.index', icon: 'fa-envelope', label: 'Messages' },
];

export default function AdminLayout({ title, children }) {
    const { auth, flash } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const currentRoute = route().current();

    useEffect(() => {
        setSidebarOpen(false);
    }, [currentRoute]);

    const logout = () => {
        router.post(route('admin.logout'));
    };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Head title={`${title} — Administration ACS Group`} />

            {sidebarOpen && (
                <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true"></div>
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 w-72 flex-shrink-0 transform bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
                    <img src="/img/logo/logo-acs.png" alt="ACS Group" className="h-9 w-auto" />
                    <div>
                        <p className="text-sm font-bold leading-tight">Access Technologies</p>
                        <p className="text-xs text-red-400 leading-tight">Back-Office</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-1 px-4 py-6">
                    {NAV_ITEMS.map((item) => {
                        const active = currentRoute?.startsWith(item.href.split('.').slice(0, 2).join('.'));
                        return (
                            <Link
                                key={item.href}
                                href={route(item.href)}
                                className={`flex min-w-0 items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                                    active ? 'bg-red-600 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                <i className={`fas ${item.icon} w-5 flex-shrink-0 text-center`}></i>
                                <span className="truncate">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">
                    <Link href={route('home')} className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 hover:text-white">
                        <i className="fas fa-arrow-left"></i>
                        Retour au site
                    </Link>
                </div>
            </aside>

            <div className="lg:pl-72">
                <header className="sticky top-0 z-20 flex h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 shadow-sm">
                    <div className="flex min-w-0 items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
                            aria-label="Ouvrir le menu"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <h1 className="truncate text-2xl font-bold text-slate-800 md:text-3xl">{title}</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden text-right sm:block">
                            <p className="text-sm font-semibold text-slate-900">{auth?.user?.name}</p>
                            <p className="text-xs text-slate-500">{auth?.user?.email}</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                            {auth?.user?.name?.charAt(0) ?? 'A'}
                        </div>
                        <button
                            type="button"
                            onClick={logout}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-red-500/60 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                            aria-label="Se déconnecter"
                        >
                            <i className="fas fa-right-from-bracket"></i>
                        </button>
                    </div>
                </header>

                {flash?.success && (
                    <div className="mx-6 mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-medium text-green-700">
                        {flash.success}
                    </div>
                )}

                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
