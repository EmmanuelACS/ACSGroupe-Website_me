<?php

namespace Database\Seeders;

use App\Models\SlideshowImage;
use Illuminate\Database\Seeder;

// Reprend le diaporama d'arrière-plan du Hero précédemment codé en dur dans
// resources/js/Pages/Home.jsx (heroImages).
class SlideshowImageSeeder extends Seeder
{
    public function run(): void
    {
        $images = [
            '/img/slideshow/DSC_0967.jpg',
            '/img/slideshow/1H5A0369.jpg',
            '/img/slideshow/1H5A0381.jpg',
            '/img/slideshow/1H5A0405.jpg',
            '/img/slideshow/image0.png',
        ];

        foreach ($images as $position => $image) {
            SlideshowImage::query()->updateOrCreate(['image' => $image], ['position' => $position]);
        }
    }
}
