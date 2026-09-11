<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminLoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class AdminAuthController extends Controller
{
    public function showLogin(): Response
    {
        return Inertia::render('Admin/Auth/Login');
    }

    public function login(AdminLoginRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        if (! Auth::attempt($credentials, true) || ! Auth::user()->is_admin) {
            Auth::logout();

            Log::warning('[Admin] Failed login attempt', ['email' => $credentials['email']]);

            return back()->withErrors(['email' => "Identifiants invalides ou accès administrateur requis."])->onlyInput('email');
        }

        $request->session()->regenerate();

        Log::info('[Admin] Login success', ['user_id' => Auth::id()]);

        return redirect()->route('admin.dashboard');
    }

    public function logout(): RedirectResponse
    {
        Log::info('[Admin] Logout', ['user_id' => Auth::id()]);

        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}
