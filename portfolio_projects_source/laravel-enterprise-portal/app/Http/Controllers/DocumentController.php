<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Document::class);
        return Inertia::render('Documents/Index', [
            'documents' => Document::with('owner')->latest()->paginate(20),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'file'  => 'required|file|max:20480',
            'tags'  => 'array',
        ]);

        $path = $request->file('file')->store('documents');

        $document = Document::create([
            'title'    => $data['title'],
            'path'     => $path,
            'owner_id' => $request->user()->id,
        ]);

        if (!empty($data['tags'])) {
            $document->syncTags($data['tags']);
        }

        return back()->with('success', 'Document uploaded.');
    }
}
