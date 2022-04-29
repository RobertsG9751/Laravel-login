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