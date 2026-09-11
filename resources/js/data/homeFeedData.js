// "Our Latest Projects" : véritables interventions et projets ACS Group,
// avec leurs photos officielles issues de public/img/gallery/ (voir galleryData.js).
export const HOME_PROJECTS = [
    {
        id: 'atelier-dgpsp',
        img: '/img/gallery/events/DSC_0979.jpg',
        title: "Atelier d'harmonisation des indicateurs DGPSP",
        text: 'Accompagnement méthodologique et technique pour harmoniser le pilotage des indicateurs institutionnels.',
        name: 'ACS Group',
    },
    {
        id: 'plateforme-integree',
        img: '/img/gallery/events/DSC_0967.jpg',
        title: 'Déploiement de la plateforme de gestion intégrée des projets',
        text: "Conception et mise en production d'une plateforme centralisée de suivi et de pilotage de projets.",
        name: 'ACS Group',
    },
    {
        id: 'carte-producteur-cafe-cacao',
        img: '/img/gallery/meetings/1H5A9941.jpg',
        title: 'Intervention technique - Carte du Producteur Café-Cacao',
        text: 'Support technique sur le projet institutionnel de carte du producteur porté par le Conseil Café-Cacao.',
        name: 'ACS Group',
    },
    {
        id: 'formation-it',
        img: '/img/gallery/events/_MG_3545.jpg',
        title: 'Ateliers de formation et renforcement de capacités IT',
        text: 'Sessions de formation pour renforcer les compétences techniques et la maîtrise des outils métiers.',
        name: 'ACS Group',
    },
    {
        id: 'cohesion-excellence',
        img: '/img/gallery/events/_MG_3625.jpg',
        title: 'Cohésion & Moments d’Excellence ACS Group',
        text: "Des équipes engagées et soudées, moteur de la qualité de service livrée à nos clients.",
        name: 'ACS Group',
    },
];

// Visuels HD en couleur (Wikimedia Commons, licence libre) pour la section
// "Latest Thinking" : aucun filtre N&B, qualité et pertinence éditoriale.
const THINKING_IMAGES = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cybersecurity_Operations_at_Port_San_Antonio.jpg/1280px-Cybersecurity_Operations_at_Port_San_Antonio.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Audience_-_TNW_Conference_2011_-_Day_2_%285669377962%29.jpg/1280px-Audience_-_TNW_Conference_2011_-_Day_2_%285669377962%29.jpg',
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Datacenter_informatique_de_l%27Ecole_Polytechnique_%2832544959853%29.jpg/1280px-Datacenter_informatique_de_l%27Ecole_Polytechnique_%2832544959853%29.jpg",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/CERN_Computer_Center_02.jpg/1280px-CERN_Computer_Center_02.jpg',
];

// "Latest Thinking" : actualités réelles du secteur numérique et réglementaire
// en Côte d'Ivoire et en Afrique de l'Ouest.
export const HOME_POSTS = [
    {
        id: 'anssi-passi-2026-2030',
        img: THINKING_IMAGES[0],
        title: "ANSSI Côte d'Ivoire & Agréments PASSI : la feuille de route Cybersécurité 2026-2030",
        text: "Un cadre de qualification renforcé pour sécuriser durablement les infrastructures numériques sensibles du pays.",
        author: 'Direction Cybersécurité',
    },
    {
        id: 'impact-ia-abidjan',
        img: THINKING_IMAGES[1],
        title: 'Conférence IMPACT IA Abidjan : stratégie nationale et usages du numérique',
        text: "Un rendez-vous majeur pour accélérer l'adoption responsable de l'intelligence artificielle en Côte d'Ivoire.",
        author: 'ACS Group Insights',
    },
    {
        id: 'cloud-souverain-pnd',
        img: THINKING_IMAGES[2],
        title: 'Digitalisation des Services Publics & Cloud Souverain : le Plan PND CI',
        text: "Le Plan National de Développement mise sur un cloud souverain pour moderniser durablement les services publics.",
        author: 'Pôle Audit & Conformité',
    },
    {
        id: 'iso27001-nis2',
        img: THINKING_IMAGES[3],
        title: 'Normes ISO 27001 & Directive NIS 2 : la résilience des infrastructures critiques',
        text: "Comment structurer sa conformité réglementaire autour d'une PSSI robuste et des exigences NIS 2.",
        author: 'Experts IT ACS',
    },
];
