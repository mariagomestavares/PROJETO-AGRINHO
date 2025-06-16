// Menu toggle
document.getElementById('menu-btn')
  .addEventListener('click', () => document.getElementById('menu')
  .classList.toggle('active'));

// Form validation (contato.html)
function validarContato() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!nome || !email) {
    alert('Por favor, preencha nome e email.');
    return false;
  }
  return true;
}