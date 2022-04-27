<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <script defer src="{{asset('js/main.js')}}"></script>
</head>
<body>
    <div class="top"></div>
    <div class="mid">
        <div class="bot"></div>
        <div class="content">
            <div class="buttons">
                <input type="button" value="login" class="btn loginBtn">
                <input type="button" value="register" class="btn registerBtn">
            </div>
            <div class="login">
                <form class="loginForm">
                    <div class="">
                    <p class="backBtn"><-back</p><br>
                        <label for="eamilLogin">Email:</label><br>
                        <input required type="email" value="" class="inputField emailLogin" name="emailLogin">
                    </div>
                    <div class="">
                        <label for="passwordLogin">Password:</label><br>
                        <input required type="password" value="" class="inputField passwordLogin" name="passwordLogin">
                    </div>
                    <br><input type="submit" class="btn loginSubmit">
                </form>
            </div>
            <div class="register">
                <form class="registerForm">
                    <div class="regField">
                        <p class="backBtn" id="test"><-back</p><br>
                        <label for="vards">Vards:</label><br>
                        <input required class="inputReg" type="text" name="vards">
                    </div>
                    <div class="regField">
                        <label for="uzvards">Uzvards:</label><br>
                        <input required class="inputReg" type="text" name="uzvards">
                    </div>
                    <div class="regField">
                        <label for="email">Email:</label><br>
                        <input required class="inputReg" type="email" name="email">   
                    </div>
                    <div class="regField">
                        <label for="password">Password:</label><br>
                        <input required class="inputReg" type="password" name="password">
                    </div>
                    <div class="regField">
                        <label for="password_conf">Confirm password:</label><br>
                        <input required class="inputReg" type="password" name="password_conf">
                    </div>
                    <input type="submit" class="btnShort registerSubmit">
                </form>
            </div>
            <div class="user">
                <h2>Jusu dati</h2>
                <div class="userContent"></div>
                <input type="button" value="logout" class="btnShort logout">
            </div>
        </div>
    </div>
</body>
</html>