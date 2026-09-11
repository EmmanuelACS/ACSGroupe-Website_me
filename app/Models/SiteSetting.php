<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'value'];

    public const CACHE_KEY = 'site_settings.all';

    // Table clé/valeur : toutes les entrées sont mises en cache et exposées
    // sous forme de tableau associatif [key => value] pour un accès simple
    // depuis les contrôleurs (Inertia shared props) et les seeders.
    public static function allAsArray(): array
    {
        return Cache::rememberForever(self::CACHE_KEY, fn () => self::query()->pluck('value', 'key')->all());
    }

    public static function get(string $key, ?string $default = null): ?string
    {
        return self::allAsArray()[$key] ?? $default;
    }

    public static function set(string $key, ?string $value): void
    {
        self::query()->updateOrCreate(['key' => $key], ['value' => $value]);
        Cache::forget(self::CACHE_KEY);
    }
}
