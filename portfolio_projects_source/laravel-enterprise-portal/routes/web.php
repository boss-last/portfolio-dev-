<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentController;

Route::get('/', fn () => Inertia::render('Welcome'));

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('documents', DocumentController::class);

    // Admin only
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        Route::get('/users', fn () => Inertia::render('Admin/Users'))->name('admin.users');
        Route::get('/roles', fn () => Inertia::render('Admin/Roles'))->name('admin.roles');
    });
});

require __DIR__.'/auth.php';
