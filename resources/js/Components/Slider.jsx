import Swiper from 'swiper';
import {
    Autoplay,
    EffectFade,
    HashNavigation,
    Navigation,
    Pagination,
    Parallax,
    Thumbs,
} from 'swiper/modules';
import { useEffect, useRef } from 'react';

/**
 * Wrapper Swiper "vanilla" (pas swiper/react) pour reproduire à l'identique
 * le comportement des sliders du template d'origine (js/main.js).
 */
export default function Slider({ className = '', options = {}, children }) {
    const containerRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper(containerRef.current, {
            modules: [Autoplay, EffectFade, HashNavigation, Navigation, Pagination, Parallax, Thumbs],
            ...options,
        });

        return () => swiperRef.current?.destroy(true, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`swiper-container ${className}`.trim()} ref={containerRef}>
            {children}
        </div>
    );
}
