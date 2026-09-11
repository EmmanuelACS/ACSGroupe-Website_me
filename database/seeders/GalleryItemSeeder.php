<?php

namespace Database\Seeders;

use App\Models\GalleryItem;
use Illuminate\Database\Seeder;

// Reprend les photos réelles précédemment codées en dur dans
// resources/js/data/galleryData.js. Ces 5 événements sont marqués
// show_on_home=true pour alimenter le Marquee "Our Achievements & Key Moments".
class GalleryItemSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title' => "Atelier d'harmonisation des indicateurs DGPSP",
                'category' => 'Ateliers',
                'location' => 'Abidjan (Juillet 2026)',
                'photo' => '/img/gallery/events/DSC_0979.jpg',
            ],
            [
                'title' => 'Session de travail sur la plateforme de gestion intégrée',
                'category' => 'Meetings',
                'location' => 'Abidjan',
                'photo' => '/img/gallery/events/DSC_0967.jpg',
            ],
            [
                'title' => "Pause déjeuner & Moments de cohésion d'équipe",
                'category' => 'Teambuilding',
                'location' => 'Abidjan',
                'photo' => '/img/gallery/events/_MG_3625.jpg',
            ],
            [
                'title' => 'Présentation technique et formation sur les outils métiers',
                'category' => 'Ateliers',
                'location' => 'Abidjan',
                'photo' => '/img/gallery/events/_MG_3545.jpg',
            ],
            [
                'title' => 'Intervention sur le projet Carte du Producteur - Conseil Café-Cacao',
                'category' => 'Projets',
                'location' => 'Abidjan',
                'photo' => '/img/gallery/meetings/1H5A9941.jpg',
            ],
        ];

        foreach ($items as $position => $item) {
            GalleryItem::query()->updateOrCreate(
                ['title' => $item['title']],
                [...$item, 'show_on_home' => true, 'position' => $position],
            );
        }
    }
}
