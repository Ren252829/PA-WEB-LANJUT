<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    // Tambahkan properti yang boleh diisi melalui mass-assignment
    protected $fillable = [
        'name',
        'type',
        'description',
        'email',
        'phone_number',
    ];
}
