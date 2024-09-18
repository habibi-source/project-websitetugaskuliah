const increaseBtns = document.querySelectorAll('.increase-btn');
const decreaseBtns = document.querySelectorAll('.decrease-btn');
const quantityInputs = document.querySelectorAll('.quantity');

// Menambahkan event listener ke setiap tombol increase
increaseBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let quantity = parseInt(quantityInputs[index].value);
        quantity++;
        console.log("Increased quantity to: " + quantity);
        quantityInputs[index].value = quantity;
    });
});

// Menambahkan event listener ke setiap tombol decrease
decreaseBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let quantity = parseInt(quantityInputs[index].value);
        if (quantity > 0) {
            quantity--;
            quantityInputs[index].value = quantity;
        }
    });
});
