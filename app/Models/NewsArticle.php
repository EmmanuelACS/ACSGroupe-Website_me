<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsArticle extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'title_en', 'excerpt', 'excerpt_en', 'author', 'image', 'external_link', 'is_published', 'position'];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
        ];
    }
}
