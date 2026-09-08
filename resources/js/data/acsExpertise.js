// Contenu officiel Access Technologies Solution (ACS) — filiale d'ACS Group,
// partenaire exclusif de NEC XON Corporation.

export const ABOUT_TEXT =
    "Nous sommes une filiale d'ACS Group, l'un des leaders en Afrique de l'Ouest dans les métiers du BTP, de la Finance et des Nouvelles Technologies. C'est le 1er groupe privé pluridisciplinaire en Afrique de l'Ouest. ACCESS TECHNOLOGIES SOLUTION est un cabinet spécialisé en sécurité globale et est le partenaire exclusif du géant japonais NEC XON Corporation.";

export const STATS = [
    { value: '35', label: 'Professionnels' },
    { value: '22', label: 'Ingénieurs' },
    { value: '7', label: 'Pays' },
    { value: '2', label: 'SOC 24/7', sub: 'Security Operations Center' },
    { value: '+50', label: 'Clients', sub: 'Utilisent nos services managés de sécurité' },
    { value: '+15', label: "Ans d'expérience", sub: 'Auprès des secteurs stratégiques' },
];

// Portraits du staff mis en avant sur la page "À propos" (section Équipe & Culture)
export const TEAM_MEMBERS = [
    {
        id: 'ekissi',
        name: 'Ekissi Férié',
        role: 'Responsable IT & Architecte Solutions',
        image: '/img/staff/1H5A0316.jpg',
        bio: 'Responsable IT chez ACS Group avec plus de 10 ans d’expérience, cet Architecte de Solutions Numériques pilote les projets de digitalisation ministériels et institutionnels. Il allie vision stratégique, expertise technique et gouvernance de systèmes d’information complexes.',
    },
    {
        id: 'estelle',
        name: 'KANTE Estelle',
        role: 'PMO - Project Management Officer',
        image: '/img/staff/1H5A0470.jpg',
        // Cadrage naturel (ancrage haut) sans zoom au survol, pour éviter un plan trop serré sur le visage.
        disableHoverZoom: true,
        bio: 'PMO chez ACS Group, elle pilote et coordonne les projets de transformation digitale et de digitalisation des processus. Son expertise couvre le cadrage des besoins, la planification, le suivi des livrables et le reporting stratégique auprès des parties prenantes.',
    },
    {
        id: 'zouzzou',
        name: 'Zouzzou Olivia',
        role: 'Assistante Projet IT',
        image: '/img/staff/1H5A0440.jpg',
        bio: 'Assistante Projet IT, elle apporte une double compétence juridique et technologique au suivi des projets de digitalisation. Elle participe au cadrage des besoins, à la coordination des intervenants et à la gestion des livrables.',
    },
    {
        id: 'grace',
        name: 'Kouadio Grace',
        role: 'Assistante Projet IT',
        image: '/img/staff/1H5A0485.jpg',
        bio: 'Assistante Projet IT, elle intervient activement sur les projets de digitalisation, la collecte et l’analyse des besoins métiers. Elle assure la préparation des livrables et le suivi rigoureux de l’avancement des projets informatiques.',
    },
    {
        id: 'ALABEN',
        name: 'Alaben Maimouna',
        role: 'Assistante Réceptionniste',
        image: '/img/staff/1H5A0415.jpg',
        bio: 'Assistante Réceptionniste chez ACS Group, elle orchestre l’accueil, l’assistanat administratif et la relation client. Elle garantit une communication professionnelle fluide et un suivi rigoureux des dossiers administratifs au quotidien.',
    },
];

// Témoignages clients affichés dans le carrousel "Avis" de la page d'accueil.
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Kouassi Jean-Marc',
        role: 'Directeur des Systèmes d’Information',
        company: 'SOTRA / Groupe B2B Abidjan',
        comment:
            'L’accompagnement d’ACS Group a été déterminant dans la modernisation de notre infrastructure Cloud. Une équipe locale très réactive et à la hauteur des enjeux.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
        rating: 5,
    },
    {
        id: 2,
        name: 'Aminata Bamba',
        role: 'Responsable Transformation Digitale',
        company: 'Fintech Côte d’Ivoire',
        comment: 'Une expertise remarquable en cybersécurité et en architecture logicielle. Leur approche sur mesure et leur professionnalisme font toute la différence.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
        rating: 5,
    },
    {
        id: 3,
        name: 'Yao Patrick Desiré',
        role: 'Chief Technology Officer',
        company: 'Banque d’Investissement Ivoirienne',
        comment:
            'Des livrables de haute qualité conformes aux normes internationales. La conduite du changement a été parfaitement maîtrisée par les consultants d’ACS Group.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
        rating: 5,
    },
    {
        id: 4,
        name: 'Koffi Sarah Marie',
        role: 'Directrice des Opérations',
        company: 'Secteur Télécoms & Data',
        comment: 'ACS Group s’est imposé comme notre partenaire technologique de confiance. Leur réactivité et la rigueur de leurs équipes sont irréprochables.',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=250&q=80',
        rating: 5,
    },
];

// Les 6 axes d'expertise (domain cards)
export const DOMAINS = [
    {
        title: 'CONSEIL & STRATÉGIE',
        text: 'Diagnostic des risques, feuilles de route et politiques de sécurité alignées sur vos enjeux métier.',
    },
    {
        title: 'INTÉGRATION DE SOLUTIONS ET MISE EN ŒUVRE',
        text: 'Déploiement et intégration de technologies de sécurité adaptées à votre environnement.',
    },
    {
        title: 'GESTION OPÉRATIONNELLE DES SERVICES DE SÉCURITÉ',
        text: 'Pilotage quotidien de vos dispositifs de sécurité par nos équipes expertes.',
    },
    {
        title: 'TECHNOLOGIES EXCLUSIVES & SÛRETÉ DIGITALE',
        text: 'Solutions exclusives NEC XON pour une protection digitale de rang mondial.',
    },
    {
        title: 'IT STRATEGY, DATA ANALYTICS & GOUVERNANCE IT',
        text: 'Valorisation de la donnée et gouvernance IT au service de la performance.',
    },
    {
        title: 'DIGITAL TRANSFORMATION & PROGRAM MANAGEMENT',
        text: "Accompagnement de vos programmes de transformation digitale de bout en bout.",
    },
];

// Les offres détaillées par thème (A à F), à répartir dans les cartes de services
export const THEME_A = {
    title: 'Stratégie, Gouvernance & Conduite du Changement',
    offers: [
        'Mapping des risques cyber',
        'Élaboration de Schémas directeurs informatiques et de cybersécurité',
        'Élaboration de Politique de sécurité des SI (PSSI)',
        'Mise en conformité',
        'Sécurité des processus métiers',
        'Coaching en Sécurité des SI',
        'Maîtrise des risques cyber',
        "Plan d'actions cybersécurité",
        "Management de la sécurité de l'information (ISO 27001)",
    ],
};

export const THEME_B = {
    title: 'Conformité, Data Loss Prevention & Cryptographie',
    offers: [
        'Accompagnement conformité & Certifications (PCI-DSS etc.)',
        "Audit & Classification de l'information",
        "Outillage de prévention contre la fuite d'information (DLP, outils de déception)",
        'Désensibilisation cryptographique & Anonymisation',
    ],
};

export const THEME_C = {
    title: 'Compliance, Résilience & Contrôle automatique',
    offers: [
        'Audit interne, Contrôle interne & Risk Management',
        "Plan de continuité d'activité (PCA) & Plan de reprise d'activité (PRA)",
        "Gestion d'incident et Remédiation",
        'Automatisation des contrôles (RPA) & Reporting',
    ],
};

export const THEME_D = {
    title: 'Identités, Traçabilité & Authentification',
    offers: [
        'Gestion des identités numériques, des autorisations et des rôles',
        'Traçabilité et corrélation (SIEM, MDR, EDR, XDR)',
        'Sécurisation des infrastructures, Tokenisation & Sécurité Cloud',
    ],
};

export const THEME_E = {
    title: 'Surveillance, SOC 24/7/365 & Gestion des vulnérabilités',
    offers: [
        "Tests d'intrusion & Ethical Hacking",
        'Audit technique & organisationnel',
        'Formation, Sensibilisation & Ingénierie sociale',
        'SOC disponible 24/7/365, Scans de vulnérabilités & Gestion des patchs',
    ],
};

export const THEME_F = {
    title: 'Sécurité physique & Sûreté des infrastructures',
    offers: [
        "Détection d'intrusion & Incendie",
        'Vidéosurveillance & Reconnaissance faciale',
        "Contrôle d'accès intelligent & Objets connectés (IoT)",
        'Supervision de site via Plateforme centralisée de gestion de la sécurité',
    ],
};
