// Bande défilante infinie et continue (voir @keyframes marquee dans acs-custom.css).
// Le contenu est dupliqué une fois puis translaté de -50% pour boucler sans coupure ni pause.
export default function MarqueeSlider({ items, renderItem, durationSeconds = 32, className = 'mil-mb-90' }) {
    return (
        <div className={`${className} overflow-hidden`}>
            <div className="flex w-max items-stretch" style={{ animation: `marquee ${durationSeconds}s linear infinite` }}>
                {[...items, ...items].map((item, idx) => renderItem(item, idx % items.length, idx))}
            </div>
        </div>
    );
}
