import { useRef } from 'react';

/**
 * Reproduit exactement la logique de js/main.js : toggle "mil-active" sur
 * le déclencheur, toggle max-height sur le panneau suivant (.mil-panel).
 */
export default function Accordion({ title, children, defaultOpen = false }) {
    const panelRef = useRef(null);
    const triggerRef = useRef(null);

    const toggle = () => {
        triggerRef.current?.classList.toggle('mil-active');
        const panel = panelRef.current;
        if (!panel) return;
        panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
    };

    return (
        <>
            <div className={`mil-accordion${defaultOpen ? ' mil-active' : ''}`} ref={triggerRef} onClick={toggle}>
                <h6>{title}</h6>
            </div>
            <div
                className="mil-panel"
                ref={panelRef}
                style={defaultOpen ? { maxHeight: '1000px' } : undefined}
            >
                <div className="mil-window">{children}</div>
            </div>
        </>
    );
}
