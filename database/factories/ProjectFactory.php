<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'thumbnail' => 'http://127.0.0.1:8000/storage/thumbnails/default.jpg', // Gunakan gambar dummy
            'description' => $this->faker->paragraph,
            'type' => $this->faker->randomElement(['Photography', 'Videography']),
            'link' => $this->faker->url,
            'author_id' => User::factory(), // Buat user dummy jika belum ada
        ];
    }
}
