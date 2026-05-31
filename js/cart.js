let cart = [];

// =====================
// ABRIR CARRITO
// =====================

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("cartToggle")
        .addEventListener("click", () => {

            document
                .getElementById("cartPanel")
                .classList.add("open");

        });

    document
        .getElementById("closeCart")
        .addEventListener("click", () => {

            document
                .getElementById("cartPanel")
                .classList.remove("open");

        });

});

// =====================
// AGREGAR PRODUCTO
// =====================

function addToCart(product,size){

    cart.push({
        ...product,
        size
    });

    renderCart();

}

// =====================
// MOSTRAR CARRITO
// =====================

function renderCart(){

    const container =
        document.getElementById("cartItems");

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        container.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div>

                <strong>
                    ${item.name}
                </strong>

                <br>

                Talla:
                ${item.size}

                <br>

                $${item.price}

                <br><br>

                <button
                    onclick="removeItem(${index})">

                    Eliminar

                </button>

            </div>

        </div>

        `;

    });

    document
        .getElementById("cartCount")
        .textContent =
        cart.length;

    document
        .getElementById("cartTotal")
        .textContent =
        total.toFixed(2);

}

// =====================
// ELIMINAR
// =====================

function removeItem(index){

    cart.splice(index,1);

    renderCart();

}



document
    .getElementById("checkoutBtn")
    .addEventListener("click",()=>{

        if(cart.length===0){

            alert(
                "No hay productos."
            );

            return;
        }

        let message =
            "Hola, me interesan los siguientes productos:%0A%0A";

        cart.forEach(item=>{

            message +=
                `• ${item.name} (${item.size}) - $${item.price}%0A`;

        });

        const url =
            `https://wa.me/593993493918?text=${message}`;

        window.open(
            url,
            "_blank"
        );

    });