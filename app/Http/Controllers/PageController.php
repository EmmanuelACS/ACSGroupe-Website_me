<?php

namespace App\Http\Controllers;

use App\Models\GalleryItem;
use App\Models\NewsArticle;
use App\Models\SlideshowImage;
use App\Models\Staff;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home', [
            'heroImages' => SlideshowImage::query()->orderBy('position')->pluck('image'),
            'achievements' => GalleryItem::query()->where('show_on_home', true)->orderBy('position')->get(),
            'latestThinking' => NewsArticle::query()->where('is_published', true)->orderBy('position')->get(),
        ]);
    }

    public function home2(): Response
    {
        return Inertia::render('Home2');
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function blog(): Response
    {
        return Inertia::render('Blog');
    }

    public function portfolio(): Response
    {
        return Inertia::render('Portfolio');
    }

    public function team(): Response
    {
        return Inertia::render('Team', [
            'staff' => Staff::query()->where('is_director', false)->orderBy('position')->get(),
        ]);
    }

    public function gallery(): Response
    {
        return Inertia::render('Gallery', [
            'items' => GalleryItem::query()->orderBy('position')->get(),
            'categories' => GalleryItem::query()->orderBy('category')->distinct()->pluck('category'),
        ]);
    }

    public function teamSingle(?Staff $staffMember = null): Response
    {
        $staffMember ??= Staff::query()->where('is_director', true)->first()
            ?? Staff::query()->orderBy('position')->first();

        return Inertia::render('TeamSingle', [
            'staffMember' => $staffMember,
        ]);
    }

    public function prices(): Response
    {
        return Inertia::render('Prices');
    }

    public function faq(): Response
    {
        return Inertia::render('Faq');
    }

    public function event(): Response
    {
        return Inertia::render('Event');
    }

    public function project(): Response
    {
        return Inertia::render('Project');
    }

    public function publication(): Response
    {
        return Inertia::render('Publication');
    }

    public function comingSoon(): Response
    {
        return Inertia::render('ComingSoon');
    }

    public function careers(): Response
    {
        return Inertia::render('Careers');
    }

    public function service1(): Response
    {
        return Inertia::render('Services/Service1');
    }

    public function service2(): Response
    {
        return Inertia::render('Services/Service2');
    }

    public function service3(): Response
    {
        return Inertia::render('Services/Service3');
    }

    public function service4(): Response
    {
        return Inertia::render('Services/Service4');
    }

    public function solution1(): Response
    {
        return Inertia::render('Solutions/Solution1');
    }

    public function solution2(): Response
    {
        return Inertia::render('Solutions/Solution2');
    }

    public function solution3(): Response
    {
        return Inertia::render('Solutions/Solution3');
    }
}
