// =========================
// PRODUCTO ACTUAL
// =========================

let currentProduct = null;

// =========================
// ABRIR MODAL
// =========================

function openProduct(id) {

    currentProduct =
        products.find(
            product => product.id === id
        );

    if (!currentProduct) return;

    document
        .getElementById("modalImage")
        .src =
        currentProduct.image;

    document
        .getElementById("modalName")
        .textContent =
        currentProduct.name;

    document
        .getElementById("modalDescription")
        .textContent =
        currentProduct.description;

    document
        .getElementById("modalPrice")
        .textContent =
        "$" + currentProduct.price;

    const sizeSelect =
        document.getElementById("modalSize");

    sizeSelect.innerHTML = "";

    currentProduct.sizes.forEach(size => {

        const option =
            document.createElement("option");

        option.value = size;
        option.textContent = size;

        sizeSelect.appendChild(option);

    });

    document
        .getElementById("productModal")
        .classList.add("show");

}

// =========================
// CERRAR MODAL
// =========================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const closeBtn =
            document.getElementById("closeModal");

        closeBtn.addEventListener(
            "click",
            closeModal
        );

        document
            .getElementById("productModal")
            .addEventListener(
                "click",
                function (e) {

                    if (
                        e.target.id ===
                        "productModal"
                    ) {

                        closeModal();

                    }

                }
            );

    }
);

function closeModal() {

    document
        .getElementById("productModal")
        .classList.remove("show");

}


document
    .getElementById("addToCart")
    .addEventListener("click",()=>{

        const size =
            document
                .getElementById("modalSize")
                .value;

        addToCart(
            currentProduct,
            size
        );

        closeModal();

    });