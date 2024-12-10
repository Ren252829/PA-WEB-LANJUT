<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'thumbnail', 'description', 'type', 'link', 'author_id'];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
