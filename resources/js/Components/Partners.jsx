const PARTNER_LOGOS = ['AIGF.jpg', 'CGRAE.png', 'CI-ENERGIES.jpg', 'CIE.jpg', 'CNPS.jpeg', 'LONACI.jpg', 'NSIA BANQUE.png', 'RTI.png', 'SIDAM.png'];

export default function Partners() {
    return (
        <div className="bg-slate-50 dark:bg-[#1A1A20] p-8 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {PARTNER_LOGOS.map((file) => (
                    <a href="#." key={file} className="flex items-center justify-center">
                        <img
                            src={`/img/partners/${file}`}
                            alt={`Partenaire ${file.split('.')[0]}`}
                            className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
