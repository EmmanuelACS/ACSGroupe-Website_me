import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function ComingSoon() {
    return (
        <MainLayout title="Access Technologies Solution (ACS)">
            {/* coming soon */}
            <div className="mil-dark-bg mil-add-page">
                <img src="/img/staff/1H5A0543.jpg" alt="background" className="mil-background-image" />
                <div className="mil-overlay"></div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4">

                            <h1 className="mil-light mil-mb-15">Coming <span className="mil-accent">Soon</span></h1>
                            <p className="mil-light-soft">We are working on our website.</p>

                        </div>
                        <div className="col-xl-6">

                            <div className="row align-items-center">
                                <div className="col-lg-5">

                                    <h4 className="mil-light mil-mb-30">Join The <span className="mil-accent">Access Technologies Solution (ACS)</span><br /> Experience</h4>

                                </div>
                                <div className="col-lg-7">

                                    <p className="mil-light-soft mil-mb-30">Lorem ipsum dolor sit amet, consectetuer <br />adipiscing elit sed diam nonummy.</p>

                                </div>
                            </div>

                            <form className="mil-subscribe-form mil-mb-30">
                                <input type="text" placeholder="Your email address" />
                                <button type="submit" className="mil-button mil-accent-bg">Subscribe Now</button>
                            </form>

                            <Link href={route('contact')} className="mil-link mil-light"><span>Contact Us</span><i className="fas fa-arrow-right"></i></Link>

                        </div>
                    </div>
                </div>
            </div>
            {/* coming soon end */}

            <div className="mil-addition-bottom">
                <div className="container-fluid">
                    <p className="mil-text-sm mil-light-soft">© Access Technologies Solution (ACS) 2026.</p>
                    <p className="mil-text-sm mil-light-soft">Tous droits réservés.</p>
                </div>
            </div>
        </MainLayout>
    );
}
