<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class User extends Controller
{
    public function getUser(){
        // Iegust registreto lietotaju un dabon viņa datus
        $user = Auth::user();
        return $user;
    }
}
