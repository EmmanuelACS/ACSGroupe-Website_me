<?php

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
Route::get('/team/single', [PageController::class, 'teamSingle'])->name('team.single');
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
