<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'role', 'bio', 'photo', 'is_director', 'position'];

    protected function casts(): array
    {
        return [
            'is_director' => 'boolean',
        ];
    }
}
