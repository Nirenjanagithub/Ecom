const apiUrl4 = "https://fakestoreapi.com/users";
fetch(apiUrl4)
.then(response=> {
    if(!response.ok) {
        throw new Error("problem converting to json");
    }
    return response.json();
})
.then(data=> {
    displayUser(data);
})
.catch(error=> console.error("Error fetching data",error));
function displayUser(userDetails) {
    const userBody = document.getElementById('userBody');
     userDetails.forEach(user=> {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class = "cart"><a href="ecomsingleuser.html" target="_blank" ><h4>${user.id}</a></h4></td>
            <td class = "cart"><h4>${user.email}</h4></td>
            <td class = "cart"><h4>${user.username}</h4></td>
            <td class = "cart"><h4>${user.password}</h4></td>
            <td class = "cart"><h4>${user.name.firstname} ${user.name.lastname}</h4></td>
            <td class = "cart"><h4>${user.address.city} ${user.address.street}
            ${user.address.number} ${user.address.zipcode} ${user.address.geolocation.long} 
            ${user.address.geolocation.lat}  </h4></td>
            <td class = "cart"><h4>${user.phone}</h4></td>
            `;
           userBody.appendChild(row);
    })   
}
// ADD NEW USER
document.getElementById('add').addEventListener('click', ()=> {
    fetch('https://fakestoreapi.com/users', {
        method:"POST",
        headers: {
            'content-type':'application/json'},
        body:JSON.stringify(
            {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
            }
        )
    })
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        addUser(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function addUser(characters) {
    const userBody = document.getElementById('userBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class = "cart"><h4><a href = "ecomsingleuser.html" target = "_blank" >${characters.id}</a></h4></td>
        <td class = "cart"><h4>${characters.email}</h4></td>
        <td class = "cart"><h4>${characters.username}</h4></td>
        <td class = "cart"><h4>${characters.password}</h4></td>
        <td class = "cart"><h4>${characters.name.firstname} ${characters.name.lastname}</h4></td>
        <td class = "cart"><h4>${characters.address.city} ${characters.address.street} 
        ${characters.address.number} ${characters.address.zipcode} ${characters.address.geolocation.long}
        ${characters.address.geolocation.lat}  </h4></td>
        <td class = "cart"><h4>${characters.phone}</h4></td>`;
    userBody.appendChild(row)
}
// LIMIT USER
document.getElementById('limitResults').addEventListener('click', () => {
    const apiUrl11 = "https://fakestoreapi.com/users?limit=5";
    fetch(apiUrl11)
    .then(response=> {
        if(!response.ok ) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        displayUser(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayUser(userDetails) {
    const userBody = document.getElementById('userBody');
    userBody.innerHTML = '';
    userDetails.forEach(user=> {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class = "cart"><a href = "ecomsingleuser.html" target = "_blank" ><h4>${user.id}</a></h4></td>
            <td class = "cart"><h4>${user.email}</h4></td>
            <td class = "cart"><h4>${user.username}</h4></td>
            <td class = "cart"><h4>${user.password}</h4></td>
            <td class = "cart"><h4>${user.name.firstname} ${user.name.lastname}</h4></td>
            <td class = "cart"><h4>${user.address.city} ${user.address.street} ${user.address.number} 
            ${user.address.zipcode} ${user.address.geolocation.long} ${user.address.geolocation.lat}  </h4></td>
            <td class = "cart"><h4>${user.phone}</h4></td>`;
        userBody.appendChild(row);
    })
}
    

// SORT USER
document.getElementById('sortResults').addEventListener('click', () => {
    const apiUrl10 = "https://fakestoreapi.com/users?sort=desc";
    fetch(apiUrl10)
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        displayUser(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayUser(userDetails) {
    const userBody = document.getElementById('userBody');
    userBody.innerHTML = ''
    userDetails.forEach(user=> {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class = "cart"><a href = "ecomsingleuser.html" target = "_blank" ><h4>${user.id}</a></h4></td>
            <td class = "cart"><h4>${user.email}</h4></td>
            <td class = "cart"><h4>${user.username}</h4></td>
            <td class = "cart"><h4>${user.password}</h4></td>
            <td class = "cart"><h4>${user.name.firstname} ${user.name.lastname}</h4></td>
            <td class = "cart"><h4>${user.address.city} ${user.address.street}
            ${user.address.number} ${user.address.zipcode} ${user.address.geolocation.long}
            ${user.address.geolocation.lat}  </h4></td>
            <td class = "cart"><h4>${user.phone}</h4></td>`;
        userBody.appendChild(row);
    })  
}

                
                        
