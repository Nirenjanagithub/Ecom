document.getElementById('loginButton').addEventListener('click', () => {
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    })
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=>{
        displayError(data);
    })
    .catch(error=> console.error("Error fetching data",error));
    function displayError(character) {
        const error = document.getElementById('error');
        error.innerHTML = character.token;
        error.appendChild(text);
    }
})