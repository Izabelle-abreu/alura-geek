const form = document.querySelector('[data-form]');

form.addEventListener('submit', evento => {
    evento.preventDefault();

    const email = document.querySelector('[data-email]').value;
    const senha = document.querySelector('[data-senha]').value;

    if(email.length > 5 && senha.length > 5) {
        window.location.href = '/index.html'
    } else {
        alert("Por favor, insira mais de 5 caracteres no email e senha.")
    }
})