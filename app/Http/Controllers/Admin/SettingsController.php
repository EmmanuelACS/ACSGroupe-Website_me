<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Settings/Index', [
            'settings' => SiteSetting::allAsArray(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'contact_email' => ['nullable', 'email', 'max:255'],
            'contact_phone_primary' => ['nullable', 'string', 'max:40'],
            'contact_phone_secondary' => ['nullable', 'string', 'max:40'],
            'contact_address' => ['nullable', 'string', 'max:255'],
            'social_facebook' => ['nullable', 'url', 'max:255'],
            'social_linkedin' => ['nullable', 'url', 'max:255'],
            'social_twitter' => ['nullable', 'url', 'max:255'],
            'social_instagram' => ['nullable', 'url', 'max:255'],
            'chatbot_enabled' => ['nullable', 'boolean'],
            'chatbot_welcome_message_fr' => ['nullable', 'string', 'max:500'],
            'chatbot_welcome_message_en' => ['nullable', 'string', 'max:500'],
        ]);

        $validated['chatbot_enabled'] = $request->boolean('chatbot_enabled') ? '1' : '0';

        foreach ($validated as $key => $value) {
            SiteSetting::set($key, $value);
        }

        Log::info('[Admin] Site settings updated', ['user_id' => $request->user()->id, 'keys' => array_keys($validated)]);

        return back()->with('success', 'Paramètres mis à jour.');
    }
}
