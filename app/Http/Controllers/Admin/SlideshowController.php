<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\Concerns\StoresPublicImage;
use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Models\SlideshowImage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class SlideshowController extends Controller
{
    use StoresPublicImage;

    public function index(): Response
    {
        return Inertia::render('Admin/Slideshow/Index', [
            'images' => SlideshowImage::query()->orderBy('position')->get(),
            'delayMs' => (int) SiteSetting::get('slideshow_delay_ms', '3000'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate(['image' => ['required', 'image', 'max:8192']]);

        $image = SlideshowImage::query()->create([
            'image' => $this->storePublicImage($request->file('image'), 'slideshow'),
            'position' => SlideshowImage::query()->max('position') + 1,
        ]);

        Log::info('[Admin] Slideshow image added', ['id' => $image->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Image ajoutée au diaporama.');
    }

    public function destroy(Request $request, SlideshowImage $image): RedirectResponse
    {
        $image->delete();

        Log::info('[Admin] Slideshow image removed', ['id' => $image->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Image retirée du diaporama.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $validated = $request->validate(['order' => ['required', 'array'], 'order.*' => ['integer', 'exists:slideshow_images,id']]);

        foreach ($validated['order'] as $index => $id) {
            SlideshowImage::query()->where('id', $id)->update(['position' => $index]);
        }

        return back();
    }

    public function updateDelay(Request $request): RedirectResponse
    {
        $validated = $request->validate(['delay_ms' => ['required', 'integer', 'min:1000', 'max:15000']]);

        SiteSetting::set('slideshow_delay_ms', (string) $validated['delay_ms']);

        Log::info('[Admin] Slideshow delay updated', ['delay_ms' => $validated['delay_ms'], 'user_id' => $request->user()->id]);

        return back()->with('success', 'Délai de transition mis à jour.');
    }
}
