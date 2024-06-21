const apiUrl = ('https://fakestoreapi.com/users/1')
fetch(apiUrl)
.then(response=> {
    if(!response.ok) {
        throw new Error("problem converting to json");
    }
    return response.json();
})
    
.then(data=> {
    show(data);
})
.catch(error=> console.error("Error fetching data",error));
function show(character) {
    const userContainerel = document.getElementById('userContainer')
    userContainerel.innerHTML = `
        <h2> ID NUMBER</h2>
        <td><h3>${character.id}</a></h3></td>
        <h2>EMAIL</h2>
        <td><h3>${character.email}</h3></td>
        <h2> USERNAME </h2>
        <td><h3>${character.username}</h3></td>
        <h2>NAME</H2>
        <td><h3> ${character.name.firstname} ${character.name.lastname}</h3></td>
        <h2>ADDRESS</h2>
        <td><h3>${character.address.city} ${character.address.street} 
        ${character.address.number} ${character.address.city} 
        ${character.address.geolocation.long} ${character.address.geolocation.lat}  </h3></td>
        <h2>PHONE NUMBER</h2>
        <td><h3>${character.phone}</h3></td>
        <button class="userButton"> BUY NOW </button>`;
}
// update
document.getElementById('updateuserButton').addEventListener('click',()=> {
    fetch('https://fakestoreapi.com/users/7', {
        method:"PUT",
        headers: {
            "content-type":"application/json"
        },
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
    fetch('https://fakestoreapi.com/users/7', {
        method:"PATCH",
        headers: {
            "content-type":"application/json"
        },
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
        show(data)
    })
    .catch(error=> console.error("Error fetching data",error));
    function show(character) {
        const userContainerel = document.getElementById('userContainer')
        userContainerel.innerHTML = `
            <h2> ID NUMBER</h2>
            <td><h3>${character.id}</a></h3></td>
            <h2>EMAIL</h2>
            <td><h3>${character.email}</h3></td>
            <h2> USERNAME </h2>
            <td><h3>${character.username}</h3></td>
            <h2>NAME</H2>
            <td><h3> ${character.name.firstname} ${character.name.lastname}</h3></td>
            <h2>ADDRESS</h2>
            <td><h3>${character.address.city} ${character.address.street} 
            ${character.address.number} ${character.address.city} ${character.address.geolocation.long} 
            ${character.address.geolocation.lat}  </h3></td>
            <h2>PHONE NUMBER</h2>
            <td><h3>${character.phone}</h3></td>
            <button class = "userButton"> BUY NOW </button>`;
        }
})
// delete
document.getElementById('deleteuserButton').addEventListener('click', ()=> {
   fetch('https://fakestoreapi.com/users/6', {
            method:"DELETE",
        headers: {
            "content-type":"application/json"
        },
    })
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        show(data)
    })
    .catch(error=> console.error("Error fetching data",error));
    function show(character) {
        const userContainerel = document.getElementById('userContainer')
        userContainerel.innerHTML = `
            <h2> ID NUMBER</h2>
            <td><h3>${character.id}</a></h3></td>
            <h2>EMAIL</h2>
            <td><h3>${character.email}</h3></td>
            <h2> USERNAME </h2>
            <td><h3>${character.username}</h3></td>
            <h2>NAME</H2>
            <td><h3> ${character.name.firstname} ${character.name.lastname}</h3></td>
            <h2>ADDRESS</h2>
            <td><h3>${character.address.city} ${character.address.street} 
            ${character.address.number} ${character.address.city}
            ${character.address.geolocation.long} ${character.address.geolocation.lat}  </h3></td>
            <h2>PHONE NUMBER</h2>
            <td><h3>${character.phone}</h3></td>
            <button class = "userButton"> BUY NOW </button>
        `;
    }
})
