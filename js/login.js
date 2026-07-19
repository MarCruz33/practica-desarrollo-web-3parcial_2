document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('loginError');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple (credenciales: admin/1234)
        if (username === 'admin' && password === '1234') {
            // Redirigir al menú principal
            window.location.href = 'index.html';
        } else {
            errorDiv.textContent = '❌ Usuario o contraseña incorrectos';
            errorDiv.style.color = '#dc3545';
        }
    });

    // Limpiar mensaje de error al escribir
    document.getElementById('username').addEventListener('input', function () {
        errorDiv.textContent = '';
    });
    document.getElementById('password').addEventListener('input', function () {
        errorDiv.textContent = '';
    });
});