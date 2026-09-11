<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\Concerns\StoresPublicImage;
use App\Http\Controllers\Controller;
use App\Models\NewsArticle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    use StoresPublicImage;

    public function index(): Response
    {
        return Inertia::render('Admin/News/Index', [
            'articles' => NewsArticle::query()->orderBy('position')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request, true);
        $data['image'] = $this->storePublicImage($request->file('image'), 'news');
        $data['position'] = NewsArticle::query()->max('position') + 1;

        $article = NewsArticle::query()->create($data);

        Log::info('[Admin] News article created', ['id' => $article->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Article publié.');
    }

    public function update(Request $request, NewsArticle $article): RedirectResponse
    {
        $data = $this->validated($request, false);

        if ($request->hasFile('image')) {
            $data['image'] = $this->storePublicImage($request->file('image'), 'news');
        }

        $article->update($data);

        Log::info('[Admin] News article updated', ['id' => $article->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Article mis à jour.');
    }

    public function destroy(Request $request, NewsArticle $article): RedirectResponse
    {
        $article->delete();

        Log::info('[Admin] News article deleted', ['id' => $article->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Article supprimé.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $validated = $request->validate(['order' => ['required', 'array'], 'order.*' => ['integer', 'exists:news_articles,id']]);

        foreach ($validated['order'] as $index => $id) {
            NewsArticle::query()->where('id', $id)->update(['position' => $index]);
        }

        return back();
    }

    private function validated(Request $request, bool $imageRequired): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:1000'],
            'author' => ['nullable', 'string', 'max:150'],
            'external_link' => ['nullable', 'url', 'max:255'],
            'is_published' => ['nullable', 'boolean'],
            'image' => [$imageRequired ? 'required' : 'nullable', 'image', 'max:8192'],
        ]);

        // Formulaire multipart : force le typage booléen plutôt que de se fier
        // à la valeur brute sérialisée par FormData ("1"/"0"/"true").
        $data['is_published'] = $request->boolean('is_published');

        return $data;
    }
}
