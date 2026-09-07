const PARTNER_LOGOS = ['AIGF.jpg', 'CGRAE.png', 'CI-ENERGIES.jpg', 'CIE.jpg', 'CNPS.jpeg', 'LONACI.jpg', 'NSIA BANQUE.png', 'RTI.png', 'SIDAM.png'];

export default function Partners() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-14 sm:gap-20 lg:gap-24 max-w-7xl mx-auto py-12 px-4">
            {PARTNER_LOGOS.map((file) => (
                <div
                    key={file}
                    className="group w-36 h-36 sm:w-44 sm:h-44 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-white/10 flex items-center justify-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer will-change-transform"
                >
                    <img
                        src={`/img/partners/${file}`}
                        alt={`Partenaire ${file.split('.')[0]}`}
                        className="max-h-36 sm:max-h-40 max-w-[90%] w-auto h-auto object-contain transition-all duration-500 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-125 hover:drop-shadow-lg cursor-pointer will-change-transform"
                        onError={() => console.error('[Partners] Failed to load logo:', file)}
                    />
                </div>
            ))}
        </div>
    );
}
