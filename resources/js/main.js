// Importē funckijas
import { goToUserPage } from "./functions.js"
import { logoutFunc } from "./functions.js"
import { loginFunc } from "./functions.js"
import { registerFunc } from "./functions.js"
// Dabon visus HTML elementus
const buttons = document.querySelector(".buttons");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const user = document.querySelector(".user");
const userField = document.querySelector(".userContent");

const loginBtn = document.querySelector(".loginBtn");
const registerBtn = document.querySelector(".registerBtn");
const backBtn = document.querySelectorAll(".backBtn");
const logoutBtn = document.querySelector(".logout");

const loginForm = document.querySelector(".loginForm");
const registerForm = document.querySelector(".registerForm");
const regData = document.querySelectorAll(".inputReg");

const loginEmail = document.querySelector(".emailLogin");
const loginPassword = document.querySelector(".passwordLogin");

// Pogu funkcionalitāte
loginBtn.addEventListener("click", function(e){
    buttons.style.display = "none";
    login.style.display = "flex";
})
registerBtn.addEventListener("click", function(e){
    buttons.style.display = "none";
    register.style.display = "flex";
})
backBtn.forEach((btn)=>{
    btn.addEventListener("click", function(e){
        buttons.style.display = "flex";
        register.style.display = "none";
        login.style.display = "none";
    })
})

// Login formas nosūtīšana
loginForm.addEventListener("submit", function(e){
    e.preventDefault()
    loginFunc(loginEmail.value, loginPassword.value)
})

// Parbauda vai lietotajam ir autorizacijas tokens. Ja ir tad aizvada lietotaju uz lapu
if(localStorage.getItem("token")){
    buttons.style.display = "none";
    user.style.display = "flex";
    goToUserPage()
}

logoutBtn.addEventListener("click", function(e){
    logoutFunc()
    localStorage.removeItem('token');
    userField.innerHTML = ""
    user.style.display = "none"
    buttons.style.display = "flex"
})

// Parbauda kad tiks iesniegta registresanas forma
registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(regData[3].value!==regData[4].value) return alert("Passwords dont match")
    registerFunc(regData[0].value, regData[1].value, regData[2].value, regData[3].value, regData[4].value)
})