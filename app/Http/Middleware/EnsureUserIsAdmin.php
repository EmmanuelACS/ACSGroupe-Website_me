<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdmin
{
    /**
     * Restreint l'accès au back-office (/admin) aux utilisateurs authentifiés
     * disposant du flag is_admin. Redirige vers l'écran de connexion admin sinon.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check() && ! Auth::user()->is_admin) {
            Auth::logout();
        }

        if (! Auth::check()) {
            return redirect()->route('admin.login');
        }

        return $next($request);
    }
}
