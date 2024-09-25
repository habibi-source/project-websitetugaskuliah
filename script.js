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

// Consolidated login logic
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('loginPassword').value;
  
  console.log('Before sending - Username:', username, 'Password:', password);

  fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => {
      // Cek apakah respons berhasil (status 200-299) atau gagal
      if (!response.ok) {
          return response.json().then(data => {
              throw new Error(data.error || 'Login failed');
          });
      }
      return response.json(); // Parse respons JSON jika berhasil
  })
  .then(data => {
      // Hapus pesan sebelumnya jika ada
      const existingMessage = document.getElementById('loginMessage');
      if (existingMessage) {
          existingMessage.remove();
      }

      // Menampilkan pesan login sukses
      const messageElement = document.createElement('p');
      messageElement.id = 'loginMessage'; 
      messageElement.innerText = 'Login successful!';
      messageElement.style.color = 'green';
      document.getElementById('loginForm').appendChild(messageElement);

      // Menambahkan delay 2000 milidetik sebelum pindah halaman
      localStorage.setItem('token', data.token);
      setTimeout(() => {
          window.location.href = "index.html";
      }, 2000);
  })
  .catch((error) => {
      // Hapus pesan sebelumnya jika ada
      const existingMessage = document.getElementById('loginMessage');
      if (existingMessage) {
          existingMessage.remove();
      }

      // Tampilkan pesan kesalahan
      const messageElement = document.createElement('p');
      messageElement.id = 'loginMessage'; 
      messageElement.innerText = error.message;
      messageElement.style.color = 'red';
      document.getElementById('loginForm').appendChild(messageElement);
      
      console.error('Error:', error);
  });
});

// Registration logic remains unchanged
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('newUsername').value;
  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;

  console.log('Form data:', { username, email, password }); // Log form data for debugging

  fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
  })
  .then(response => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
          return response.json();
      } else {
          return response.text();
      }
  })
  .then(data => {
      console.log('Response data:', data); // Log response for debugging
      if (typeof data === 'object') {
          alert('Registration successful! Please login.');
      } else {
          alert(data);
      }
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});
