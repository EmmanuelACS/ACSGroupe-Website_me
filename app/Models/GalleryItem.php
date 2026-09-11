<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryItem extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'category', 'location', 'photo', 'event_date', 'show_on_home', 'position'];

    protected function casts(): array
    {
        return [
            'event_date' => 'date',
            'show_on_home' => 'boolean',
        ];
    }
}
