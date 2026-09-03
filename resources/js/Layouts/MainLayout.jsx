import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <div className="mil-wrapper">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}
