// Galerie d'activités réelles ACS Group (ateliers, workshops, formations, projets institutionnels).
export const GALLERY_ITEMS = [
    {
        id: 'atelier-dgpsp',
        src: '/img/gallery/events/DSC_0979.jpg',
        title: "Atelier d'harmonisation des indicateurs DGPSP",
        category: 'Projets & Ateliers',
        location: 'Abidjan (Juillet 2026)',
    },
    {
        id: 'session-plateforme-integree',
        src: '/img/gallery/events/DSC_0967.jpg',
        title: 'Session de travail sur la plateforme de gestion intégrée',
        category: 'Workshops',
        location: 'Abidjan',
    },
    {
        id: 'cohesion-equipe',
        src: '/img/gallery/events/_MG_3625.jpg',
        title: "Pause déjeuner & Moments de cohésion d'équipe",
        category: 'Événements',
        location: 'Abidjan',
    },
    {
        id: 'formation-outils-metiers',
        src: '/img/gallery/events/_MG_3545.jpg',
        title: 'Présentation technique et formation sur les outils métiers',
        category: 'Formations',
        location: 'Abidjan',
    },
    {
        id: 'carte-producteur-cafe-cacao',
        src: '/img/gallery/meetings/1H5A9941.jpg',
        title: 'Intervention sur le projet Carte du Producteur - Conseil Café-Cacao',
        category: 'Projets Institutionnels',
        location: 'Abidjan',
    },
];

export const GALLERY_CATEGORIES = [...new Set(GALLERY_ITEMS.map((item) => item.category))];
