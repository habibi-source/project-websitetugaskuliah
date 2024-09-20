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

function login() {
    // Ambil nilai dari input email dan password
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Atur email dan password yang benar (misalnya data dummy)
    var correctEmail = "AdolKlambi";
    var correctPassword = "12345";
    
    // Validasi input email dan password
    if (email === correctEmail && password === correctPassword) {
        // Tampilkan pesan login berhasil
        document.getElementById('message').textContent = "Login successful!";
        document.getElementById('message').style.color = "green";
        
        // Setelah 2 detik, arahkan ke halaman lain
        setTimeout(function() {
            console.log("Redirecting to dashboard.html...");
            window.location.href = "main-menu.html"; // Ganti dengan nama halaman yang diinginkan
        }, 2000); // 2000 milidetik = 2 detik
    } else if (email === "" || password === "") {
        document.getElementById('message').textContent = "Email and Password cannot be empty.";
        document.getElementById('message').style.color = "red";
    } else {
        document.getElementById('message').textContent = "Invalid email or password.";
        document.getElementById('message').style.color = "red";
    }
}
