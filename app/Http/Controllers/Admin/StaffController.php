<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\Concerns\StoresPublicImage;
use App\Http\Controllers\Controller;
use App\Models\Staff;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class StaffController extends Controller
{
    use StoresPublicImage;

    public function index(): Response
    {
        return Inertia::render('Admin/Staff/Index', [
            'staff' => Staff::query()->orderBy('position')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);

        if ($request->hasFile('photo')) {
            $data['photo'] = $this->storePublicImage($request->file('photo'), 'staff');
        }

        $data['position'] = Staff::query()->max('position') + 1;

        $staff = Staff::query()->create($data);

        Log::info('[Admin] Staff member created', ['id' => $staff->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Membre ajouté.');
    }

    public function update(Request $request, Staff $staffMember): RedirectResponse
    {
        $data = $this->validated($request);

        if ($request->hasFile('photo')) {
            $data['photo'] = $this->storePublicImage($request->file('photo'), 'staff');
        }

        $staffMember->update($data);

        Log::info('[Admin] Staff member updated', ['id' => $staffMember->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Membre mis à jour.');
    }

    public function destroy(Request $request, Staff $staffMember): RedirectResponse
    {
        $staffMember->delete();

        Log::info('[Admin] Staff member deleted', ['id' => $staffMember->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Membre supprimé.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $validated = $request->validate(['order' => ['required', 'array'], 'order.*' => ['integer', 'exists:staff,id']]);

        foreach ($validated['order'] as $index => $id) {
            Staff::query()->where('id', $id)->update(['position' => $index]);
        }

        return back();
    }

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'role' => ['required', 'string', 'max:150'],
            'bio' => ['nullable', 'string', 'max:2000'],
            'photo' => ['nullable', 'image', 'max:5120'],
            'is_director' => ['nullable', 'boolean'],
        ]);

        // Les formulaires multipart (upload photo) sérialisent les booléens en
        // chaînes ("1"/"0"/"true") : on force le typage plutôt que de se fier
        // à la valeur brute de FormRequest::validate().
        $data['is_director'] = $request->boolean('is_director');

        return $data;
    }
}
