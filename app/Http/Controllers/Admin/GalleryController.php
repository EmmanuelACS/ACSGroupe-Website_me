<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\Concerns\StoresPublicImage;
use App\Http\Controllers\Controller;
use App\Models\GalleryItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    use StoresPublicImage;

    public const CATEGORIES = ['Ateliers', 'Meetings', 'Projets', 'Teambuilding'];

    public function index(): Response
    {
        return Inertia::render('Admin/Gallery/Index', [
            'items' => GalleryItem::query()->orderBy('position')->get(),
            'categories' => self::CATEGORIES,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request, true);
        $data['photo'] = $this->storePublicImage($request->file('photo'), 'gallery');
        $data['position'] = GalleryItem::query()->max('position') + 1;

        $item = GalleryItem::query()->create($data);

        Log::info('[Admin] Gallery item created', ['id' => $item->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Photo ajoutée.');
    }

    public function update(Request $request, GalleryItem $item): RedirectResponse
    {
        $data = $this->validated($request, false);

        if ($request->hasFile('photo')) {
            $data['photo'] = $this->storePublicImage($request->file('photo'), 'gallery');
        }

        $item->update($data);

        Log::info('[Admin] Gallery item updated', ['id' => $item->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Photo mise à jour.');
    }

    public function destroy(Request $request, GalleryItem $item): RedirectResponse
    {
        $item->delete();

        Log::info('[Admin] Gallery item deleted', ['id' => $item->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Photo supprimée.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $validated = $request->validate(['order' => ['required', 'array'], 'order.*' => ['integer', 'exists:gallery_items,id']]);

        foreach ($validated['order'] as $index => $id) {
            GalleryItem::query()->where('id', $id)->update(['position' => $index]);
        }

        return back();
    }

    private function validated(Request $request, bool $photoRequired): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:200'],
            'category' => ['required', 'string', 'in:'.implode(',', self::CATEGORIES)],
            'location' => ['nullable', 'string', 'max:150'],
            'event_date' => ['nullable', 'date'],
            'show_on_home' => ['nullable', 'boolean'],
            'photo' => [$photoRequired ? 'required' : 'nullable', 'image', 'max:8192'],
        ]);

        // Formulaire multipart : force le typage booléen plutôt que de se fier
        // à la valeur brute sérialisée par FormData ("1"/"0"/"true").
        $data['show_on_home'] = $request->boolean('show_on_home');

        return $data;
    }
}
