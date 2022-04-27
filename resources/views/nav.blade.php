<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <script src="https://kit.fontawesome.com/ab0091db7f.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="nav">

            <div class="navLeft">
                <div class=" navItemLeft navBorderL">
                    <h2><a class="title" href="{{url('/')}}">MyStore</a></h2>
                </div>

                <div class="navItemLeft navItem">
                    <a class="navText" href="#">Store</a>
                    <div class="underline"></div>
                </div>

                <div class="navItemLeft navItem">
                    <a class="navText" href="#">About</a>
                    <div class="underline"></div>
                </div>

                <div class="navItemLeft navItem">
                    <a class="navText" href="#">Help</a>
                    <div class="underline"></div>
                </div>
            </div>

            <div class="navRight">
                <div class="navItemRight navItem">
                    <i class="fa-solid fa-user"></i>
                    <a class="navText" href="{{url('/login')}}">Account</a>
                    <div class="underline"></div>
                </div>

                <div class="navItemRight navBorderR navItem">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <a class="navText" href="#">Cart</a>
                    <div class="underline"></div>
                </div>
            </div>
        </div>


<!-- <a href="#" class="nav-icon cart"> <i class="fa-solid fa-user"></i> -->