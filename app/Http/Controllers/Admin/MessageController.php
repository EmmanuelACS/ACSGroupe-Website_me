<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Messages/Index', [
            'messages' => ContactMessage::query()->latest()->get(),
        ]);
    }

    public function update(Request $request, ContactMessage $message): RedirectResponse
    {
        $validated = $request->validate(['is_read' => ['required', 'boolean']]);

        $message->update($validated);

        return back();
    }

    public function destroy(Request $request, ContactMessage $message): RedirectResponse
    {
        $message->delete();

        Log::info('[Admin] Contact message deleted', ['id' => $message->id, 'user_id' => $request->user()->id]);

        return back()->with('success', 'Message supprimé.');
    }
}
