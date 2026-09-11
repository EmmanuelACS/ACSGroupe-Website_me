<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\SlideshowController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/home-2', [PageController::class, 'home2'])->name('home2');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/blog', [PageController::class, 'blog'])->name('blog');
Route::get('/portfolio', [PageController::class, 'portfolio'])->name('portfolio');
Route::get('/team', [PageController::class, 'team'])->name('team');
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');
Route::get('/team/single/{staffMember?}', [PageController::class, 'teamSingle'])->name('team.single');
Route::get('/prices', [PageController::class, 'prices'])->name('prices');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/event', [PageController::class, 'event'])->name('event');
Route::get('/project', [PageController::class, 'project'])->name('project');
Route::get('/publication', [PageController::class, 'publication'])->name('publication');
Route::get('/coming-soon', [PageController::class, 'comingSoon'])->name('coming-soon');
Route::get('/careers', [PageController::class, 'careers'])->name('careers');

Route::get('/service-1', [PageController::class, 'service1'])->name('services.service1');
Route::get('/service-2', [PageController::class, 'service2'])->name('services.service2');
Route::get('/service-3', [PageController::class, 'service3'])->name('services.service3');
Route::get('/service-4', [PageController::class, 'service4'])->name('services.service4');

Route::get('/solution-1', [PageController::class, 'solution1'])->name('solutions.solution1');
Route::get('/solution-2', [PageController::class, 'solution2'])->name('solutions.solution2');
Route::get('/solution-3', [PageController::class, 'solution3'])->name('solutions.solution3');

Route::get('/contact', [ContactController::class, 'show'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::post('/chatbot/message', [ChatbotController::class, 'store'])
    ->middleware('throttle:10,1')
    ->name('chatbot.message');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AdminAuthController::class, 'login'])
        ->middleware('throttle:5,1')
        ->name('login.attempt');

    Route::middleware('admin')->group(function () {
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        Route::get('/team', [StaffController::class, 'index'])->name('staff.index');
        Route::post('/team', [StaffController::class, 'store'])->name('staff.store');
        Route::put('/team/{staffMember}', [StaffController::class, 'update'])->name('staff.update');
        Route::delete('/team/{staffMember}', [StaffController::class, 'destroy'])->name('staff.destroy');
        Route::post('/team/reorder', [StaffController::class, 'reorder'])->name('staff.reorder');

        Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery.index');
        Route::post('/gallery', [GalleryController::class, 'store'])->name('gallery.store');
        Route::put('/gallery/{item}', [GalleryController::class, 'update'])->name('gallery.update');
        Route::delete('/gallery/{item}', [GalleryController::class, 'destroy'])->name('gallery.destroy');
        Route::post('/gallery/reorder', [GalleryController::class, 'reorder'])->name('gallery.reorder');

        Route::get('/news', [NewsController::class, 'index'])->name('news.index');
        Route::post('/news', [NewsController::class, 'store'])->name('news.store');
        Route::put('/news/{article}', [NewsController::class, 'update'])->name('news.update');
        Route::delete('/news/{article}', [NewsController::class, 'destroy'])->name('news.destroy');
        Route::post('/news/reorder', [NewsController::class, 'reorder'])->name('news.reorder');

        Route::get('/slideshow', [SlideshowController::class, 'index'])->name('slideshow.index');
        Route::post('/slideshow', [SlideshowController::class, 'store'])->name('slideshow.store');
        Route::delete('/slideshow/{image}', [SlideshowController::class, 'destroy'])->name('slideshow.destroy');
        Route::post('/slideshow/reorder', [SlideshowController::class, 'reorder'])->name('slideshow.reorder');
        Route::put('/slideshow/delay', [SlideshowController::class, 'updateDelay'])->name('slideshow.delay');

        Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
        Route::put('/settings', [SettingsController::class, 'update'])->name('settings.update');

        Route::get('/messages', [MessageController::class, 'index'])->name('messages.index');
        Route::put('/messages/{message}', [MessageController::class, 'update'])->name('messages.update');
        Route::delete('/messages/{message}', [MessageController::class, 'destroy'])->name('messages.destroy');
    });
});
