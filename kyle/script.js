function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
  }
  function toCatalog(){
    window.location = "shop.html"
  }
  function toggleDetails() {
    const details = document.querySelector('.product-details');
    details.classList.toggle('hidden');
  }

const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.querySelector('.close-btn');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
    }
});
function ToCart(){
    alert('Item Added to your cart');
}
function ToBuy(){
    alert('Item successfully purchased, Thank you!');
}

  