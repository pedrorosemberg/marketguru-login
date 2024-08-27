const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

const form = document.querySelector('form');
const checkbox = document.getElementById('privacy-policy');

form.addEventListener('submit', (event) => {
    if (!checkbox.checked) {
        event.preventDefault();
        alert('Você deve autorizar a coleta de informações para continuar.');
    }
});
