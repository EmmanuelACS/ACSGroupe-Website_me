<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsArticle extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'excerpt', 'author', 'image', 'external_link', 'is_published', 'position'];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
        ];
    }
}
