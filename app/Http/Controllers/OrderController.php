<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Create a new order (No login required)
     */
    public function store(Request $request)
    {
        // Validasi input dari pengguna
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'required|string',
            'email' => 'required|email',
            'phone_number' => 'required|string|max:15',
        ]);

        // Simpan data order ke database
        $order = Order::create([
            'name' => $request->name,
            'type' => $request->type,
            'description' => $request->description,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
        ]);

        return response()->json([
            'message' => 'Order created successfully',
            'order' => $order,
        ], 201);
    }
}