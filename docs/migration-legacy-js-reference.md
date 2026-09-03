# Référence js/main.js (vendor, minifié) — comportements à reproduire en React

Extrait le 2026-09-02 depuis `public/js/main.js` (vendor, non modifié) pour guider
la conversion des pages `resources/legacy-html/*.html` vers `resources/js/Pages/*.jsx`.
Ce fichier vendor n'est **plus chargé globalement** dans l'app Laravel/Inertia — sa
logique est reproduite dans les composants React (`Navbar`, `Accordion`, `Slider`)
pour fonctionner correctement avec la navigation SPA Inertia (le script vendor ne
s'exécutait qu'une fois au chargement initial, incompatible avec les changements de
page sans rechargement complet).

## Navbar (déjà fait — `Components/Navbar.jsx`)
- Clic sur `.mil-menu-btn` → toggle `mil-active` sur lui-même et sur `.mil-navigation`.
- Scroll ≥ 220px → retire `mil-top-panel-transparent` de `.mil-top-panel.mil-animated`
  (+ ajoute `mil-hide-top` sur `.has-additional-panel`) ; scroll < 220px → inverse.

## Accordion (déjà fait — `Components/Accordion.jsx`)
- Markup : `<div class="mil-accordion"><h6>Question</h6></div>` suivi de
  `<div class="mil-panel"><div class="mil-window"><p>Réponse</p></div></div>`.
- Clic sur `.mil-accordion` → toggle classe `mil-active` sur lui-même, toggle
  `maxHeight` (null ↔ `scrollHeight`) sur `.mil-panel` (nextElementSibling).

## Tabs (à utiliser par les pages avec `mil-tab-buttons` / `mil-tabs-left-nav`)
- Clic sur `.mil-tab-buttons a` ou `.mil-tabs-left-nav a` → retire `mil-active` de
  tous les liens du même groupe, l'ajoute sur celui cliqué.
- Généralement synchronisé avec un slider Swiper `hashNavigation` (voir configs
  `.mil-tabs-slider` / `.mil-tabs-slider-2` ci-dessous) : chaque lien a un
  `href="#slide-id"` correspondant à l'attribut `data-hash` d'un `.swiper-slide`.
- Pas de composant générique créé — à reproduire en `useState` local (index de
  l'onglet actif) dans chaque page qui en a besoin, plus simple qu'une abstraction
  prématurée pour un pattern qui varie par page.

## File input custom (contact.html, `mil-attach-frame`)
- `<input type="file" id="mil-file-input">` (caché) + `<label class="mil-custom-file-input"><span>Attach your file</span></label>`.
- Au `change` : extrait le nom de fichier, l'affiche dans le label, ajoute la classe
  `mil-with-file`. En React : `useState` local dans le composant de formulaire
  (nom du fichier sélectionné), pas de composant partagé (un seul usage réel).

## Configs Swiper exactes (13 instances vendor, à utiliser via `Components/Slider.jsx`)

| Sélecteur original | Options (à passer dans `options={{ ... }}`) | Pages concernées (à vérifier par page) |
|---|---|---|
| `.mil-banner-slideshow` | `{ slidesPerView:1, spaceBetween:0, speed:1500, effect:'fade', parallax:true, autoplay:{delay:5000}, loop:true, pagination:{el:'.mil-pagination', type:'bullets', clickable:true} }` | index (hero) |
| `.mil-banner-slider` | `{ slidesPerView:1, spaceBetween:0, speed:1500, effect:'fade', parallax:true, autoplay:{delay:5000}, loop:true, navigation:{prevEl:'.mil-banner-prev', nextEl:'.mil-banner-next'} }` | home-2, autres heros à nav manuelle |
| `.mil-works-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, navigation:{prevEl:'.mil-works-prev', nextEl:'.mil-works-next'}, breakpoints:{768:{slidesPerView:2}} }` | index (portfolio/works) |
| `.mil-blog-slider` | `{ spaceBetween:30, speed:800, slidesPerView:1, navigation:{prevEl:'.mil-blog-prev', nextEl:'.mil-blog-next'}, breakpoints:{768:{slidesPerView:2},992:{slidesPerView:2},1200:{slidesPerView:'auto'}} }` | index, blog |
| `.mil-revi-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, navigation:{prevEl:'.mil-revi-prev', nextEl:'.mil-revi-next'}, breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}} }` | index (reviews) |
| `.mil-revi-slider-2` | `{ slidesPerView:1, spaceBetween:30, speed:800, autoplay:{delay:5000}, loop:true, navigation:{prevEl:'.mil-revi-prev', nextEl:'.mil-revi-next'}, breakpoints:{768:{slidesPerView:2}} }` | variantes reviews |
| `.mil-services-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, navigation:{prevEl:'.mil-services-prev', nextEl:'.mil-services-next'}, breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}} }` | services |
| `.mil-events-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, navigation:{prevEl:'.mil-events-prev', nextEl:'.mil-events-next'}, breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}} }` | event |
| `.mil-courses-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, navigation:{prevEl:'.mil-courses-prev', nextEl:'.mil-courses-next'}, breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}} }` | event |
| `.mil-banners-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, autoplay:{delay:5000}, effect:'fade', parallax:true, loop:true, pagination:{el:'.mil-banners-pagination', type:'bullets', clickable:true} }` | coming-soon et autres bannières |
| `.mil-box-slider` | `{ slidesPerView:1, spaceBetween:30, speed:800, parallax:true, effect:'fade', navigation:{prevEl:'.mil-box-prev', nextEl:'.mil-box-next'} }` | pages avec box slider |
| `.mil-tabs-slider` | `{ slidesPerView:1, speed:800, allowTouchMove:false, hashNavigation:{watchState:true}, effect:'fade', parallax:true }` | pages avec tabs (event, prices…) |
| `.mil-tabs-slider-2` | `{ slidesPerView:1, speed:800, allowTouchMove:false, hashNavigation:{watchState:true}, effect:'fade', parallax:true }` | pages avec tabs secondaires |

**Règle pour chaque page convertie** : identifier quel(s) slider(s) elle utilise en
cherchant la classe `swiper-container` + la classe spécifique (`mil-*-slider`) dans le
HTML source, puis passer la config correspondante du tableau ci-dessus à
`<Slider className="mil-xxx-slider" options={{...}}>`. Ne jamais inventer une config
non listée ici sans revérifier `public/js/main.js`.

## Widgets marketplace du thème (bslthemes) — décision à trancher avec l'utilisateur

`resources/legacy-html/index.html` (et probablement les autres pages, à vérifier)
contient en fin de `<body>` :
- Un widget de démo `bsl-popup` (boutons/popup de la marketplace bslthemes.com) —
  clairement un artefact de vente du template, pas du contenu ACS Groupe.
- Un tag Google Analytics `UA-125314689-11` (format Universal Analytics, obsolète
  depuis 2023) — probablement le compte du vendeur de template, pas celui d'ACS Groupe.
- Un beacon Cloudflare Insights avec token spécifique au vendeur.

**Ces trois éléments ne sont PAS repris dans la migration** (ni dans `app.blade.php`
ni dans les pages React) : ce sont des artefacts de vente/télémétrie du vendeur de
template, hors périmètre "design du site" à préserver. À remplacer par le vrai GA/tag
manager d'ACS Groupe si souhaité — décision côté utilisateur, pas prise ici.
