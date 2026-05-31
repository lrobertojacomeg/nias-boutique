// =====================================
// NIAS BOUTIQUE
// APP GENERAL
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Nia's Boutique cargada correctamente");

    // Actualizar año automáticamente
    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});
