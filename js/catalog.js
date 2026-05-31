// =========================
// VARIABLES GLOBALES
// =========================

let products = [];
let currentCategory = "Todos";


const categories = [
    "Todos",
    "Bebes",
    "Ninas",
    "Ninos",
    "Cobijas",
    "Accesorios"
];

// =========================
// INICIO
// =========================

document.addEventListener("DOMContentLoaded", async () => {

    
    await loadProducts();

    initSearch();

});

// =========================
// CARGAR PRODUCTOS
// =========================

async function loadProducts() {

    const response =
        await fetch("data/products.json");

    products =
        await response.json();

    renderProducts(products);

}



// =========================
// FILTRAR
// =========================

function filterByCategory(category) {

    currentCategory = category;

    if (category === "Todos") {

        renderProducts(products);

        return;
    }

    const filtered =
        products.filter(
            product =>
                normalize(product.category) === normalize(category)
        );

    renderProducts(filtered);

}

// =========================
// RENDER PRODUCTOS
// =========================

function renderProducts(items) {

    const grid =
        document.getElementById("productsGrid");

    grid.innerHTML = "";

    if (items.length === 0) {

        grid.innerHTML =
            "<p>No se encontraron productos.</p>";

        return;
    }

    items.forEach(product => {

        grid.innerHTML += `

        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}">

            <div class="product-info">

                <small>
                    ${product.brand}
                </small>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    $${product.price}
                </p>

                <button
                    onclick="openProduct(${product.id})">

                    Ver Producto

                </button>

            </div>

        </div>

        `;

    });

}

// =========================
// BUSCADOR
// =========================

function initSearch() {

    const searchInput =
        document.getElementById("searchInput");

    searchInput.addEventListener(
        "keyup",
        searchProducts
    );

}

// =========================
// BUSCAR
// =========================

function searchProducts() {

    const text =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    let filtered = products;

    if (currentCategory !== "Todos") {

        filtered =
            filtered.filter(
                product =>
                    product.category === currentCategory
            );

    }

    filtered =
        filtered.filter(product =>

            product.name
                .toLowerCase()
                .includes(text)

            ||

            product.brand
                .toLowerCase()
                .includes(text)

        );

    renderProducts(filtered);

}


function normalize(text){

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}
