const apiUrl = ('https://fakestoreapi.com/carts/5')
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
   const cartContainerel = document.getElementById('cartContainer')

    let productItems = '';
    character.products.forEach(product=> {
        productItems += `PRODUCT ID :${product.productId} ,QUANTITY: ${product.quantity}<br>`;
    });
    cartContainerel.innerHTML = `
    <h2> ID NUMBER</h2>
    <td><h3>${character.id}</a></h3></td>
    <h2>USER ID</h2>
    <td><h3>${character.userId}</h3></td>
    <h2> DATE </h2>
    <td><h3>${character.date}</h3></td>
    <h2>PRODUCTS</H2>
    <td><h3> ${productItems}</h3><br></td>
    <button class = "cartButton"> BUY NOW </button>`;
    
    
}
// cart update
document.getElementById('updateButton').addEventListener('click', ()=> {
    fetch('https://fakestoreapi.com/carts/7', {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(
            {
                userId:3,
                date:2019-12-10,
                products:[{productId:1,quantity:3}]
            }
        )
    })

    fetch('https://fakestoreapi.com/carts/7', {
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(
            {
                userId:3,
                date:2019-12-10,
                products:[{productId:1,quantity:3}]
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
        update(data);
    })
    .catch(error=> console.error("Error fetching data",error));

    function update(character) {
        const cartContainerel = document.getElementById('cartContainer');
        let productItems = '';
        character.products.forEach(product=> {
            productItems += `PRODUCT ID :${product.productId}, QUANTITY: ${product.quantity}<br>`;
        })
        cartContainerel.innerHTML = `
            <h2> ID NUMBER</h2>
            <td><h3>${character.id}</a></h3></td>
            <h2>USER ID</h2>
            <td><h3>${character.userId}</h3></td>
            <h2> DATE </h2>
            <td><h3>${character.date}</h3></td>
            <h2>PRODUCTS</H2>
            <td><h3> ${productItems}</h3><br></td>
            <button class="cartButton"> BUY NOW </button>`;
        }


       
})
// delete
document.getElementById('deletecartButton').addEventListener('click', ()=> {
    fetch('https://fakestoreapi.com/carts/6', {
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
        update(data);
    })
    .catch(error=> console.error("Error fetching data",error));
    function update(character) {
        const cartContainerel = document.getElementById('cartContainer')
        let productItems = '';
        character.products.forEach(product=> {
             productItems += `PRODUCT ID :${product.productId} ,QUANTITY: ${product.quantity}<br>`;
        })
        cartContainerel.innerHTML = `
            <h2> ID NUMBER</h2>
            <td><h3>${character.id}</a></h3></td>
            <h2>USER ID</h2>
            <td><h3>${character.userId}</h3></td>
            <h2> DATE </h2>
            <td><h3>${character.date}</h3></td>
            <h2>PRODUCTS</H2>
            <td><h3> ${productItems}</h3><br></td>
            <button class = "cartButton"> BUY NOW </button>`;
        }
})
