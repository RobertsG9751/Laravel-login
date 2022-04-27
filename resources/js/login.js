const form = document.querySelector(".loginForm")
const inputs = document.querySelectorAll(".input");


const loginFunc = async function(email, password){
    const fetchReq = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': 'meta[name="csrf-token"].attr("content")'
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    })
    const response = await fetchReq.json()
    localStorage.setItem("token", response.token)
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    loginFunc(inputs[0].value, inputs[1].value)
    inputs.forEach((e)=>{
        e.value = ""
    })
})
