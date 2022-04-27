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

// Pec autentifikacijas, pariet uz lietotaja lapu
const goToUserPage = async function(){
    login.style.display = "none";
    user.style.display = "flex"; 

    const fetchReq = await fetch('https://laravellogin-rg.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    })
    const awaitData = await fetchReq.json()
    // Parāda lietotajam savus datus
    userField.insertAdjacentHTML("beforeend", `
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Surame</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>${awaitData.id}</td>
                <td>${awaitData.name}</td>
                <td>${awaitData.surname}</td>
                <td>${awaitData.email}</td>
            </tr>
        </table>
    `)
}
// Parbauda vai lietotajam ir autorizacijas tokens. Ja ir tad aizvada lietotaju uz lapu
if(localStorage.getItem("token")){
    buttons.style.display = "none";
    user.style.display = "flex";
    goToUserPage()
}

// Login funkcija kas autorize lietotaju
const loginFunc = async function(email, password){
    const fetchReq = await fetch('https://laravellogin-rg.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    })
    const awaitRes = await fetchReq.json()
    if(awaitRes.token){
        localStorage.setItem("token", awaitRes.token)
        goToUserPage()
    }else{
        alert("Bad login")
    }
}

// Logout funkcija kas izraksta lietotaju
const logoutFunc = async function(){
    const fetchReq = await fetch('https://laravellogin-rg.herokuapp.com/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({test: "test"}),
    })
    const awaitRes = await fetchReq.json()
    alert(awaitRes.message)
}
logoutBtn.addEventListener("click", function(e){
    logoutFunc()
    localStorage.removeItem('token');
    userField.innerHTML = ""
    user.style.display = "none"
    buttons.style.display = "flex"
})
const registerFunc = async function(name, surname, email, pass, pass_conf){
    const fetchReq = await fetch('https://laravellogin-rg.herokuapp.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            email: email,
            password: pass,
            password_confirmation: pass_conf
        }),
    })
    const parseData = await fetchReq.json()
    if(parseData.token){
        alert("Registered!")
        buttons.style.display = "flex";
        register.style.display = "none";
    }else{
        return alert("There was an error registering")
    }
    }
registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(regData[3].value!==regData[4].value) return alert("Passwords dont match")
    registerFunc(regData[0].value, regData[1].value, regData[2].value, regData[3].value, regData[4].value)
})
console.log("test")