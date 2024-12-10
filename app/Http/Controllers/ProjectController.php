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

        $path = $request->file('thumbnail')->store('thumbnails', 'public');

        $project = Project::create([
            'title' => $request->title,
            'thumbnail' => $path,
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
                'thumbnail' => asset('storage/' . $project->thumbnail),
                'description' => $project->description,
                'type' => $project->type,
                'link' => $project->link,
            ]
        ], 201);
    }

    // Update project (Requires login)
    public function update(Request $request, $id)
    {
        $project = Project::find($id);

        if (!$project || $project->author_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized or project not found'], 403);
        }

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'thumbnail' => 'sometimes|required|image|mimes:jpeg,png,jpg|max:2048',
            'description' => 'sometimes|required|string',
            'type' => 'sometimes|required|string|max:255',
            'link' => 'sometimes|required|url',
        ]);

        if ($request->hasFile('thumbnail')) {
            Storage::disk('public')->delete($project->thumbnail);
            $path = $request->file('thumbnail')->store('thumbnails', 'public');
            $project->thumbnail = $path;
        }

        $project->update($request->only(['title', 'description', 'type', 'link']));

        return response()->json(['message' => 'Project updated successfully', 'project' => $project], 200);
    }

    // Delete project (Requires login)
    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project || $project->author_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized or project not found'], 403);
        }

        Storage::disk('public')->delete($project->thumbnail);
        $project->delete();

        return response()->json(['message' => 'Project deleted successfully'], 200);
    }
}