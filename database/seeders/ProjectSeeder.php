<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        // Pastikan ada user sebagai author
        $author = User::first(); // Gunakan user pertama sebagai author
        if (!$author) {
            $author = User::factory()->create(); // Buat user dummy jika belum ada
        }

        // Tambahkan 10 data dummy ke tabel projects
        Project::factory(10)->create([
            'author_id' => $author->id,
        ]);
    }
}
