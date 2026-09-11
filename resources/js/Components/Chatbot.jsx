import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

// Arbre de décision du chatbot ACS Group : 4 intentions métier, chacune avec
// une réponse précise et un bouton d'action direct vers la page de contact.
const QUICK_ACTIONS = {
    fr: [
        {
            id: 'quote',
            label: 'Demander un devis / Audit PSSI',
            keywords: ['devis', 'audit', 'pssi', 'tarif', 'prix', 'cout', 'coût'],
            reply: "Notre pôle Audit & Conformité réalise votre Audit PSSI (Politique de Sécurité des Systèmes d'Information) et vous transmet un devis personnalisé sous 48h. Précisez votre périmètre (réseau, applicatif, cloud) via le formulaire ci-dessous.",
            ctaLabel: 'Demander mon devis',
        },
        {
            id: 'cyber',
            label: 'Nos solutions Cybersécurité & SOC 24/7',
            keywords: ['cyber', 'soc', 'securite', 'sécurité', 'cybersecurite', 'cybersécurité'],
            reply: 'ACS Group opère un SOC (Security Operations Center) actif 24h/24 et 7j/7 : supervision continue, détection et réponse aux incidents, durcissement des infrastructures et conformité ANSSI/PASSI. Contactez-nous pour une démonstration.',
            ctaLabel: 'Découvrir nos solutions',
        },
        {
            id: 'partnership',
            label: 'Partenariat NEC XON Corporation',
            keywords: ['nec', 'xon', 'partenariat', 'partenaire'],
            reply: "ACS Group est partenaire stratégique de NEC XON Corporation pour déployer des solutions de sécurité globale, d'infrastructures critiques et de transformation numérique en Afrique de l'Ouest. Échangeons sur votre projet.",
            ctaLabel: 'Échanger sur ce partenariat',
        },
        {
            id: 'appointment',
            label: 'Prendre rendez-vous avec un expert',
            keywords: ['rdv', 'rendez-vous', 'rendezvous', 'expert', 'appel', 'call'],
            reply: 'Un expert ACS Group se rendra disponible pour un rendez-vous (présentiel ou visioconférence) sous 24h ouvrées. Merci de renseigner vos coordonnées et disponibilités via le formulaire.',
            ctaLabel: 'Prendre rendez-vous',
        },
    ],
    en: [
        {
            id: 'quote',
            label: 'Request a Quote / ISSP Audit',
            keywords: ['quote', 'audit', 'issp', 'price', 'cost'],
            reply: 'Our Audit & Compliance unit conducts your ISSP (Information Systems Security Policy) audit and sends you a tailored quote within 48h. Tell us your scope (network, application, cloud) via the form below.',
            ctaLabel: 'Request my quote',
        },
        {
            id: 'cyber',
            label: 'Our Cybersecurity & 24/7 SOC Solutions',
            keywords: ['cyber', 'soc', 'security', 'cybersecurity'],
            reply: 'ACS Group operates a SOC (Security Operations Center) active 24/7: continuous monitoring, incident detection and response, infrastructure hardening, and ANSSI/PASSI compliance. Contact us for a demo.',
            ctaLabel: 'Discover our solutions',
        },
        {
            id: 'partnership',
            label: 'NEC XON Corporation Partnership',
            keywords: ['nec', 'xon', 'partnership', 'partner'],
            reply: 'ACS Group is a strategic partner of NEC XON Corporation, deploying global security, critical infrastructure, and digital transformation solutions across West Africa. Let’s discuss your project.',
            ctaLabel: 'Discuss this partnership',
        },
        {
            id: 'appointment',
            label: 'Book an Appointment with an Expert',
            keywords: ['appointment', 'expert', 'call', 'meeting'],
            reply: 'An ACS Group expert will be available for a meeting (on-site or video call) within 24 business hours. Please share your contact details and availability via the form.',
            ctaLabel: 'Book an appointment',
        },
    ],
};

const STRINGS = {
    fr: {
        title: 'Assistant ACS Group',
        status: 'En ligne',
        intro: "Bonjour 👋 Comment pouvons-nous vous accompagner aujourd'hui ?",
        ctaContact: 'Ouvrir le formulaire de contact',
        close: 'Fermer',
        open: "Ouvrir l'assistant",
        placeholder: 'Écrivez votre message...',
        send: 'Envoyer',
        fallback: "Merci pour votre message. Choisissez une option ci-dessous ou laissez-nous vos coordonnées : un expert ACS Group vous recontacte rapidement.",
    },
    en: {
        title: 'ACS Group Assistant',
        status: 'Online',
        intro: 'Hello 👋 How can we help you today?',
        ctaContact: 'Open the contact form',
        close: 'Close',
        open: 'Open assistant',
        placeholder: 'Write your message...',
        send: 'Send',
        fallback: 'Thank you for your message. Pick an option below or leave your details: an ACS Group expert will get back to you shortly.',
    },
};

let messageSeq = 0;
const nextMessageId = () => {
    messageSeq += 1;
    return `msg-${messageSeq}`;
};

// Détecte l'intention métier la plus proche d'un texte libre à partir des mots-clés
// de chaque action rapide. Retourne null si aucune intention n'est identifiée.
function matchIntent(text, actions) {
    const normalized = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '');
    return actions.find((action) => action.keywords.some((kw) => normalized.includes(kw))) ?? null;
}

// Transmet la saisie libre au back-office (/admin/messages) sans bloquer la
// conversation : la requête échoue silencieusement (journalisée) si le réseau
// est indisponible, l'expérience du widget n'en dépend jamais.
function captureMessageForAdmin(message) {
    const cookieMatch = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    const token = cookieMatch ? decodeURIComponent(cookieMatch[1]) : '';

    fetch('/chatbot/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-XSRF-TOKEN': token },
        body: JSON.stringify({ message }),
        credentials: 'same-origin',
    }).catch((error) => console.error('[Chatbot] Failed to capture message for admin', error));
}

export default function Chatbot() {
    const { language } = useLanguage();
    const { siteSettings } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const s = STRINGS[language] ?? STRINGS.fr;
    const actions = QUICK_ACTIONS[language] ?? QUICK_ACTIONS.fr;
    const welcomeMessage =
        (language === 'en' ? siteSettings?.chatbotWelcomeMessageEn : siteSettings?.chatbotWelcomeMessageFr) || s.intro;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [messages]);

    const toggleChat = () => {
        setIsOpen((prev) => {
            const next = !prev;
            console.info('[Chatbot] Toggled widget:', next ? 'open' : 'closed');
            return next;
        });
    };

    const pushMessage = (from, text, ctaLabel) => {
        setMessages((prev) => [...prev, { id: nextMessageId(), from, text, ctaLabel }]);
    };

    const handleQuickAction = (action) => {
        console.info('[Chatbot] Quick action selected:', action.id);
        pushMessage('user', action.label);
        pushMessage('bot', action.reply, action.ctaLabel);
    };

    const handleSend = (e) => {
        e.preventDefault();
        const text = inputValue.trim();
        if (!text) return;

        console.info('[Chatbot] User message sent:', text);
        pushMessage('user', text);
        setInputValue('');
        captureMessageForAdmin(text);

        const intent = matchIntent(text, actions);
        if (intent) {
            console.info('[Chatbot] Intent matched from free text:', intent.id);
            pushMessage('bot', intent.reply, intent.ctaLabel);
        } else {
            pushMessage('bot', s.fallback, s.ctaContact);
        }
    };

    if (siteSettings?.chatbotEnabled === false) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
            {isOpen && (
                <div className="w-[min(92vw,360px)] max-h-[70vh] flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-white">
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-gradient-to-r from-red-600/20 to-transparent">
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                            <i className="fas fa-headset text-white text-sm"></i>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-white">{s.title}</p>
                            <p className="text-xs text-red-400 flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                {s.status}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={toggleChat}
                            aria-label={s.close}
                            className="text-white/60 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm text-white/90">
                            {welcomeMessage}
                        </div>

                        {messages.map((message) => (
                            <div key={message.id} className={message.from === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}>
                                <div
                                    className={
                                        message.from === 'user'
                                            ? 'max-w-[85%] rounded-2xl rounded-tr-sm bg-red-600 px-4 py-3 text-sm text-white font-medium break-words whitespace-normal'
                                            : 'max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm text-white/90 break-words whitespace-normal'
                                    }
                                >
                                    {message.text}
                                </div>
                                {message.from === 'bot' && message.ctaLabel && (
                                    <Link
                                        href={route('contact')}
                                        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200"
                                    >
                                        {message.ctaLabel}
                                        <i className="fas fa-arrow-right text-[10px]"></i>
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="px-5 pb-4 pt-2 space-y-2 border-t border-white/10">
                        {actions.map((action) => (
                            <button
                                key={action.id}
                                type="button"
                                onClick={() => handleQuickAction(action)}
                                className="w-full text-left text-sm font-semibold text-white/90 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 rounded-xl px-4 py-2.5 transition-all duration-200 cursor-pointer"
                            >
                                {action.label}
                            </button>
                        ))}

                        <form onSubmit={handleSend} className="flex items-center gap-2 pt-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        handleSend(e);
                                    }
                                }}
                                placeholder={s.placeholder}
                                aria-label={s.placeholder}
                                className="flex-1 bg-white/5 border border-white/10 focus:border-red-500/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors duration-200"
                            />
                            <button
                                type="submit"
                                aria-label={s.send}
                                disabled={!inputValue.trim()}
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-600 text-white transition-all duration-200 cursor-pointer"
                            >
                                <i className="fas fa-paper-plane text-sm"></i>
                            </button>
                        </form>

                        <Link
                            href={route('contact')}
                            className="block text-center text-xs font-bold uppercase tracking-wide text-white bg-red-600 hover:bg-red-700 rounded-xl px-4 py-3 mt-3 shadow-[0_0_15px_rgba(220,38,38,0.35)] transition-all duration-200"
                        >
                            {s.ctaContact}
                        </Link>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={toggleChat}
                aria-label={isOpen ? s.close : s.open}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_28px_rgba(220,38,38,0.7)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-white text-xl`}></i>
            </button>
        </div>
    );
}
