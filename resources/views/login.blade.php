@include('nav')
<link rel="stylesheet" href="{{asset('css/auth.css')}}">
<script defer src="{{asset('js/login.js')}}"></script>

<div class="root">
    <div class="login">
        <form class="loginForm">
            {{ csrf_field() }}
            <label for="email">Email</label>
            <input type="email" name="email" value="" class="input">
            <label for="password">Password</label>
            <input type="password" name="password" value="" class="input">
            <input type="submit" class="inputBtn">
        </form>
    </div>
</div>