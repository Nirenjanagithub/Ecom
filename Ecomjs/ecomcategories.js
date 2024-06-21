const apiUrl7 = "https://fakestoreapi.com/products/categories";
fetch(apiUrl7)
.then(response=> {
    if(!response.ok) {
        throw new Error("Error converting the json data")
    }
    return response.json();
})
.then(data=> {
    displayCategories(data);
})
.catch(error=> console.error("Error fetching data",error));

function displayCategories(items) {
    const categoryBody = document.getElementById('categorybody');
    items.forEach(item=> {
        const elements = document.createElement('div');
        elements.innerHTML= `
            <button id = "catbutton">${item}</button>`;
        categoryBody.appendChild(elements);
    })
    
}
document.getElementById('categorybody').addEventListener('click', () => {
    const apiUrl8 = 'https://fakestoreapi.com/products/category/jewelery';
    fetch(apiUrl8)
    .then(response=> {
        if(!response.ok){
            throw new Error("Error converting the json data")
        }
        return response.json();
    })
    .then(data=> {
        displayProducts(data);
    })
    .catch(error=> console.error("Error fetching data",error));
})
function displayProducts(characters) {
    const tableBody = document.getElementById('catbody');
    characters.forEach(character=> {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src = "${character.image}"alt = "${character.title}" 
            width = "30%"></td>
            <td><h4><a href = "ecomproduct.html" onclick = "show()" 
            target = "_blank">${character.title}</a></h4></td>
            <td><h4>COST:$${character.price}</h4></td>
        `;
        tableBody.appendChild(row);
    })
}