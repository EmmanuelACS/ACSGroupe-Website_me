import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

const CARDS = [
    { key: 'staff', label: 'Membres du staff', icon: 'fa-users', href: 'admin.staff.index' },
    { key: 'gallery', label: 'Photos en galerie', icon: 'fa-images', href: 'admin.gallery.index' },
    { key: 'news', label: 'Articles publiés', icon: 'fa-newspaper', href: 'admin.news.index' },
    { key: 'slideshow', label: 'Visuels du diaporama', icon: 'fa-photo-film', href: 'admin.slideshow.index' },
    { key: 'unreadMessages', label: 'Messages non lus', icon: 'fa-envelope', href: 'admin.messages.index', accent: true },
];

export default function Dashboard({ counts }) {
    return (
        <AdminLayout title="Tableau de bord">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {CARDS.map((card) => (
                    <Link
                        key={card.key}
                        href={route(card.href)}
                        className={`flex items-center gap-4 rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                            card.accent ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-white'
                        }`}
                    >
                        <div
                            className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-lg ${
                                card.accent ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'
                            }`}
                        >
                            <i className={`fas ${card.icon}`}></i>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-slate-900">{counts[card.key]}</p>
                            <p className="text-base text-slate-500">{card.label}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </AdminLayout>
    );
}
