// Pec autentifikacijas, pariet uz lietotaja lapu
export const goToUserPage = async function(){
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

// Login funkcija kas autorize lietotaju
export const loginFunc = async function(email, password){
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
export const logoutFunc = async function(){
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
// Registre lietotaju 
export const registerFunc = async function(name, surname, email, pass, pass_conf){
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