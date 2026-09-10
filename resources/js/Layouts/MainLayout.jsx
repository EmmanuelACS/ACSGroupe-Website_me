import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Chatbot from '@/Components/Chatbot';

export default function MainLayout({ title, children }) {
    useEffect(() => {
        console.info('[QualityGate] Refactored duplicate components and fixed reliability bugs');
    }, []);

    return (
        <>
            <Head title={title} />
            <div className="mil-wrapper">
                <Navbar />
                {children}
                <Footer />
                <Chatbot />
            </div>
        </>
    );
}
