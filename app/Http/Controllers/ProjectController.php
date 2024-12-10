<?php

namespace App\Http\Controllers;

use App\Models\Project;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    // Get all projects (No login required)
    public function index()
    {
        return response()->json(Project::with('author:id,name')->get(), 200);
    }

    // Get project by ID (No login required)
    public function show($id)
    {
        $project = Project::with('author:id,name')->find($id);

        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }

        return response()->json($project, 200);
    }

    // Create project (Requires login)
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'description' => 'required|string',
            'type' => 'required|string|max:255',
            'link' => 'required|url',
        ]);

        // Simpan file ke dalam folder storage dan dapatkan nama file
        $path = $request->file('thumbnail')->store('thumbnails', 'public');

        // Tambahkan URL lengkap ke thumbnail
        $thumbnailUrl = url('storage/' . $path);

        $project = Project::create([
            'title' => $request->title,
            'thumbnail' => $thumbnailUrl, // Simpan URL lengkap ke database
            'description' => $request->description,
            'type' => $request->type,
            'link' => $request->link,
            'author_id' => Auth::id(),
        ]);

        // Kembalikan dengan URL thumbnail yang benar
        return response()->json([
            'message' => 'Project created successfully',
            'project' => [
                'id' => $project->id,
                'title' => $project->title,
                'thumbnail' => $project->thumbnail, // URL lengkap sudah disimpan di database
                'description' => $project->description,
                'type' => $project->type,
                'link' => $project->link,
            ]
        ], 201);
    }


    public function update(Request $request, $id)
    {
        // Cari proyek berdasarkan ID
        $project = Project::find($id);

        // Jika proyek tidak ditemukan
        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }

        // Validasi input dari pengguna
        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'thumbnail' => 'sometimes|required|image|mimes:jpeg,png,jpg|max:2048',
            'description' => 'sometimes|required|string',
            'type' => 'sometimes|required|string|max:255',
            'link' => 'sometimes|required|url',
        ]);

        try {
            // Periksa apakah pengguna mengunggah thumbnail baru
            if ($request->hasFile('thumbnail')) {
                // Hapus thumbnail lama dari storage jika ada
                if ($project->thumbnail && Storage::disk('public')->exists($project->thumbnail)) {
                    $thumbnailPath = str_replace(url('storage/'), '', $project->thumbnail);
                    Storage::disk('public')->delete($thumbnailPath);
                }

                // Simpan thumbnail baru
                $path = $request->file('thumbnail')->store('thumbnails', 'public');
                // Tambahkan URL lengkap ke thumbnail
                $project->thumbnail = 'http://127.0.0.1:8000/storage/' . $path;
            }

            // Perbarui hanya field yang diperbolehkan
            $project->update($request->only(['title', 'description', 'type', 'link']));

            return response()->json([
                'message' => 'Project updated successfully',
                'project' => $project->fresh() // Memastikan data diperbarui dari database
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while updating the project',
                'details' => $e->getMessage()
            ], 500);
        }
    }


    // Delete project (Requires login)
    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }

        // Menghapus file thumbnail jika ada
        if ($project->thumbnail) {
            Storage::disk('public')->delete($project->thumbnail);
        }

        // Menghapus proyek
        $project->delete();

        return response()->json(['message' => 'Project deleted successfully'], 200);
    }
}