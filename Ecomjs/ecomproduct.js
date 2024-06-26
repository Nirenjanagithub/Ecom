const apiUrl = ('https://fakestoreapi.com/products/1')
fetch(apiUrl)
.then(response=> {
    if(!response.ok) {
        throw new Error("problem converting to json");
    }
    return response.json();
})
.then(data=> {
    dispatchProduct(data);
})
.catch(error=> console.error("Error fetching data",error));
 
function dispatchProduct(character) {
    const productContainerEl = document.getElementById('productContainer')
    productContainerEl.innerHTML = `<td><img id = "product1img" src = "${character.image}" 
    alt = "${character.title}" width = "60%" ></td>
    <td><h4>${character.title}</a></h4></td>
    <td><h3>COST:$${character.price}</h3></td>`;
    const reviewContainerEl = document.getElementById('reviewContainer');
    reviewContainerEl.innerHTML = `<td ><h3 class=rating>RATING:<span>
    ${ratingStar(character.rating.rate)}</span>(${character.rating.rate})</h3></td>
    <td><h4>${character.rating.count} + People Bought in last one month</h4></td>
    `;
    const descriptionContainerEl = document.getElementById('descriptionContainer')
    descriptionContainerEl.innerHTML = `<td><h4>${character.description}</h4></td>
    `;
}
let star='';
function ratingStar(rating) {
    if (rating <= 5 && rating > 4) {
        star = "*****"
    }
    else if (rating <= 4 && rating > 3) {
        star = `****<span class = "grey">*</span>`
    }
    else if (rating <= 3 && rating > 2) {
        star = `***<span class = "grey">**</span>`
    }
    else if (rating <= 2 && rating > 1) {
        star = `**<span class = "grey">***</span>`
    }
    else if (rating <= 1) {
        star = `*<span class = "grey">****</span>`
    }
    else {
        star = "No Rating"
    }
    return star;
}
// PRODUCT UPDATE
document.getElementById('updateButton').addEventListener('click', () => {
    fetch('https://fakestoreapi.com/products/7', {
        method:"PUT",
        headers: {
            "content-type":"application/json"
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
    fetch('https://fakestoreapi.com/products/7', {
        method:"PATCH",
        headers:{
            "content-type":"application/json"
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
        dispatchProduct(data);
    })
    .catch(error=> console.error("Error fetching data",error));
    function dispatchProduct(character) {
        const productContainerEl = document.getElementById('productContainer')
        productContainerEl.innerHTML = `<td><img id = "product1img" src = "${character.image}"
        alt = "${character.title}" width = "60%" ></td>
        <td><h4>${character.title}</a></h4></td>
        <td><h3>COST:$${character.price}</h3></td>`;
        const descriptionContainerEl = document.getElementById('descriptionContainer')
        descriptionContainerEl.innerHTML = `<td><h4>${character.description}</h4></td>
        `;
    }
})
// DELETE PRODUCT
document.getElementById('deleteButton').addEventListener('click', () => {
    fetch('https://fakestoreapi.com/products/6', {
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
        dispatchProduct(data);
    })
    .catch(error => console.error("Error fetching data",error));
    function dispatchProduct(character) {
        const productContainerEl = document.getElementById('productContainer')
        productContainerEl.innerHTML = `
        <td><img id = "product1img" src = "${character.image}" alt = "${character.title}" width = "60%" ></td>
        <td><h4>${character.title}</a></h4></td>
        <td><h3>COST:$${character.price}</h3></td>`;
        const descriptionContainerEl = document.getElementById('descriptionContainer');
        descriptionContainerEl.innerHTML = `<td><h4>${character.description}</h4></td>
        `;
    }
})



