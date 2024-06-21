const apiUrl3 = "https://fakestoreapi.com/carts";
fetch(apiUrl3)
.then(response=> {
    if(!response.ok) {
        throw new Error("problem converting to json");
    }
    return response.json();
})
.then(data=> {
    displayCart(data);
})
.catch(error=> console.error("Error fetching data",error));
function displayCart(characters) {
    const cartBody = document.getElementById('cartBody');
    characters.forEach(character=> {
        const row = document.createElement('tr');
        let productItems = '';
        character.products.forEach(product=> {
            productItems += `PRODUCT ID :${product.productId}, 
            QUANTITY: ${product.quantity}<br>`;
        })
        const customDateFormatter = new Intl.DateTimeFormat("en-US", {
            dateStyle:"full",
            timestyle:"full"
        })
        const now = new Date(character.date);
        const formattedDate = customDateFormatter.format(now);
        row.innerHTML = `
            <td class = "cart"><h4>${character.id}</h4></td>
            <td class = "cart"><h4><a href ="ecomsinglecart.html"
            onclick = "show()" target = "_blank">${character.userId}</a></h4></td>
            <td class = "cart"><h4>${formattedDate}</h4></td>
            <td class = "cart"><h4>${productItems}</h4></td>
            `;
        cartBody.appendChild(row);
    })
}
// add new Cart product
document.getElementById('add').addEventListener('click',()=> {
    fetch('https://fakestoreapi.com/carts', {
        method:"POST",
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(
            {
                userId:5,
                date:2020,
                products:[{productId:5,quantity:1},{productId:1,quantity:5}]
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
        displayCart(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayCart(characters) {
    const cartBody = document.getElementById('cartBody');
    const row = document.createElement('tr');
    let productItems = '';
    characters.products.forEach(character=> {
        productItems += `PRODUCT ID :${character.productId}, 
        QUANTITY: ${character.quantity}<br>`;
    })
    row.innerHTML = `
        <td class = "cart"><h4>-</h4></td>
        <td class = "cart"><h4>${characters.userId}</h4></td>
        <td class = "cart"><h4>${characters.date}</h4></td>
        <td class = "cart"><h4>${productItems}</h4></td>
        `;
    cartBody.appendChild(row);
}
// LIMIT
document.getElementById('limitResults').addEventListener('click',()=> {
    const apiUrl11 = "https://fakestoreapi.com/carts?limit=5";
    fetch(apiUrl11)
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        displayCart(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayCart(characters) {
    const cartBody = document.getElementById('cartBody');
    characters.forEach(character=> {
        const row = document.createElement('tr');
        let productItems = '';
        character.products.forEach(product=> {
            productItems += `PRODUCT ID :${product.productId} ,QUANTITY: ${product.quantity}<br>`;
        })
        row.innerHTML = `
            <td class = "cart"><h4>${character.id}</h4></td>
            <td class = "cart"><h4><a href="ecomsinglecart.html"
            onclick="show()" target="_blank">${character.userId}</a></h4></td>
            <td class = "cart"><h4>${character.date}</h4></td>
            <td class = "cart"><h4>${productItems}</h4></td>
            `;
        cartBody.appendChild(row);
    })   
}
// SORT CART
document.getElementById('sortResults').addEventListener('click',()=> {
const apiUrl10 = "https://fakestoreapi.com/carts?sort=desc";
fetch(apiUrl10)
.then(response=> {
    if(!response.ok) {
        throw new Error("problem converting to json");
    }
    return response.json();
})

.then(data=> {
    displayCart(data);
})
.catch(error=> console.error("Error fetching data",error));
})
function displayCart(characters) {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';
    characters.forEach(character=> {
        const row = document.createElement('tr');
        let productItems = '';
        character.products.forEach(product=> {
            productItems += `PRODUCT ID :${product.productId},
            QUANTITY: ${product.quantity}<br>`;
        })
        row.innerHTML=`
            <td class = "cart"><h4>${character.id}</h4></td>
            <td class = "cart"><h4><a href = "ecomsinglecart.html" onclick = "show()" target = "_blank">${character.userId}</a></h4></td>
            <td class = "cart"><h4>${character.date}</h4></td>
            <td class = "cart"><h4>${productItems}</h4></td>
            `;
        cartBody.appendChild(row);
    })  
}
// SORT CART BY DATE
document.getElementById('dateRange').addEventListener('click',()=> {
    const apiUrl10 = "https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10";
    fetch(apiUrl10)
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        displayCart(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayCart(characters) {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';
    characters.forEach(character=> {
        const row = document.createElement('tr');
        let productItems = '';
        character.products.forEach(product=> {
            productItems += `PRODUCT ID :${product.productId} ,QUANTITY: ${product.quantity}<br>`;
        })
        row.innerHTML=`
            <td class = "cart"><h4>${character.id}</h4></td>
            <td class = "cart"><h4><a href = "ecomsinglecart.html" onclick = "show()" target = "_blank">${character.userId}</a></h4></td>
            <td class = "cart"><h4>${character.date}</h4></td>
            <td class = "cart"><h4>${productItems}</h4></td>
            `;
        cartBody.appendChild(row);
    })
}
// GET USER
document.getElementById('getUser').addEventListener('click',()=> {
    const apiUrl14 = "https://fakestoreapi.com/carts/user/2";
    fetch(apiUrl14)
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
        }
        return response.json();
    })
    .then(data=> {
        displayCart(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayCart(characters) {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';
    characters.forEach(character=> {
        const row = document.createElement('tr');
        let productItems = '';
        character.products.forEach(product=> {
            productItems += `PRODUCT ID :${product.productId}, 
            QUANTITY: ${product.quantity}<br>`;
        })
        row.innerHTML = `
            <td class = "cart"><h4>${character.id}</h4></td>
            <td class = "cart"><h4><a href = "ecomsinglecart.html" onclick = "show()" target = "_blank">${character.userId}</a></h4></td>
            <td class = "cart"><h4>${character.date}</h4></td>
            <td class = "cart"><h4>${productItems}</h4></td>
            `;
        cartBody.appendChild(row);
    })
}




            
    