/* main.js */
/* Alterna tema claro/escuro */
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

/* Menu responsivo */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* Validação do formulário */
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const errorMessage = document.getElementById('error-message');

        if (name === '' || email === '' || message === '') {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            errorMessage.textContent = 'Por favor, insira um email válido.';
            return;
        }

        errorMessage.textContent = '';
        alert('Obrigado! Sua mensagem foi enviada.');
        form.reset();
    });
}
