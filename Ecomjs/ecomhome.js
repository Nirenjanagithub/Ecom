const apiUrl1 = "https://fakestoreapi.com/products";
fetch(apiUrl1)
.then(response=> {
    if(!response.ok) {
        throw new Error("problem converting to json");

    }
    return response.json();
})
    
   
.then(data=> {
    displayProducts(data);
})
.catch(error=> console.error("Error fetching data",error));
 
function displayProducts(characters) {
    const tableBody = document.getElementById('body');

    characters.forEach(character=> {
        const row = document.createElement('tr');
        row.innerHTM = `
            <td><img src = "${character.image}"alt = "${character.title}" 
            width = "30%"></td>
            <td><h4><a href = "ecomproduct.html" onclick = "show()" 
            target = "_blank">${character.title}</a></h4></td>
            <td><h4>COST:$${character.price}</h4></td>
           `;
        tableBody.appendChild(row);
    })
}
// add new product
document.getElementById('add').addEventListener('click', ()=> {
fetch('https://fakestoreapi.com/products', {
    method:"POST",
    headers: {
        'content-type':'application/json'
    },
    body:JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
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
    addNewProduct(data);
})
.catch(error=> console.error("Error fetching data",error));
})

function addNewProduct(newProduct) {
    const tableBody = document.getElementById('body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src = "${newProduct.image}"alt = "${newProduct.title}" width = "30%" ></td>
        <td><h4><a href = "ecomproduct.html" id = "product-anchor" 
        onclick = "show()" target = "_blank">${newProduct.title}</a></h4></td>
        <td><h4>COST:$${newProduct.price}</h4></td>
    `;
    tableBody.appendChild(row);
}
// LIMIT RESULT
document.getElementById('limitResults').addEventListener('click',() => {
    const apiUrl5 = "https://fakestoreapi.com/products?limit=5"
    fetch(apiUrl5)
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");
    
    
        }
        return response.json();
    
    })
    .then(data=> {
        limitProduct(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function limitProduct(limits) {
    const limitBody = document.getElementById('body');
    limitBody.innerHTML = '';
    limits.forEach(limit=> {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${limit.image}"alt="${limit.title}" width="30%"></td>
            <td><h4><a href="ecomproduct.html" onclick="show()" target="_blank">${limit.title}</a></h4></td>
            <td><h4>COST:$${limit.price}</h4></td>
        `;
        limitBody.appendChild(row);
    
    
    })
        
}
//  SORT RESULT
document.getElementById('sortResults').addEventListener('click',() => {
    const apiUrl6 = "https://fakestoreapi.com/products?sort=desc"
    fetch(apiUrl6)
    .then(response=> {
        if(!response.ok) {
            throw new Error("problem converting to json");


        }
        return response.json();

    })
    .then(data=> {
        sortProduct(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function sortProduct(products) {
    const tableBody = document.getElementById('body');
    tableBody.innerHTML = '';
    products.forEach(product=> {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td><img src = "${product.image}"alt = "${product.title}" width = "30%"></td>
                <td><h4><a href = "ecomproduct.html" id = "product-anchor" 
                onclick = "show()" target = "_blank">${product.title}</a></h4></td>
                <td><h4>COST:$${product.price}</h4></td>
            `;
        tableBody.appendChild(row);
    })
    
}
