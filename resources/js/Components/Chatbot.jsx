import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/Context/LanguageContext';

const QUICK_ACTIONS = {
    fr: [
        { id: 'demo', label: 'Demander une démo', reply: 'Parfait ! Un expert ACS Group vous recontacte sous 24h pour organiser votre démo personnalisée.' },
        { id: 'expert', label: 'Parler à un expert', reply: 'Nos experts cybersécurité et infrastructure sont disponibles via le formulaire de contact ci-dessous.' },
        { id: 'support', label: 'Assistance / Support', reply: "Notre SOC est disponible 24/7. Laissez-nous un message et nous vous répondons rapidement." },
    ],
    en: [
        { id: 'demo', label: 'Request a demo', reply: "Great! An ACS Group expert will get back to you within 24h to schedule your personalized demo." },
        { id: 'expert', label: 'Talk to an expert', reply: 'Our cybersecurity and infrastructure experts are available via the contact form below.' },
        { id: 'support', label: 'Support / Assistance', reply: 'Our SOC is available 24/7. Leave us a message and we will get back to you quickly.' },
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
        autoReply: 'Merci pour votre message ! Un expert ACS Group va vous recontacter rapidement pour répondre à votre demande.',
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
        autoReply: 'Thank you for your message! An ACS Group expert will get back to you shortly to address your request.',
    },
};

let messageSeq = 0;
const nextMessageId = () => {
    messageSeq += 1;
    return `msg-${messageSeq}`;
};

export default function Chatbot() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const s = STRINGS[language] ?? STRINGS.fr;
    const actions = QUICK_ACTIONS[language] ?? QUICK_ACTIONS.fr;

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

    const pushMessage = (from, text) => {
        setMessages((prev) => [...prev, { id: nextMessageId(), from, text }]);
    };

    const handleQuickAction = (action) => {
        console.info('[Chatbot] Quick action selected:', action.id);
        pushMessage('user', action.label);
        pushMessage('bot', action.reply);
    };

    const handleSend = (e) => {
        e.preventDefault();
        const text = inputValue.trim();
        if (!text) return;

        console.info('[Chatbot] User message sent:', text);
        pushMessage('user', text);
        setInputValue('');

        window.setTimeout(() => {
            pushMessage('bot', s.autoReply);
        }, 500);
    };

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
                            {s.intro}
                        </div>

                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={
                                    message.from === 'user'
                                        ? 'max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-red-600 px-4 py-3 text-sm text-white font-medium'
                                        : 'max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm text-white/90'
                                }
                            >
                                {message.text}
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
