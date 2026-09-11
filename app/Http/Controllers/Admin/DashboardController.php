<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use App\Models\GalleryItem;
use App\Models\NewsArticle;
use App\Models\SlideshowImage;
use App\Models\Staff;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'counts' => [
                'staff' => Staff::query()->count(),
                'gallery' => GalleryItem::query()->count(),
                'news' => NewsArticle::query()->count(),
                'slideshow' => SlideshowImage::query()->count(),
                'unreadMessages' => ContactMessage::query()->where('is_read', false)->count(),
            ],
        ]);
    }
}
