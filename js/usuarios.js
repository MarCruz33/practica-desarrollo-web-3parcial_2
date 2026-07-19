document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('usuariosContainer');
    const loading = document.getElementById('loading');

    async function fetchUsuarios() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            if (!response.ok) {
                throw new Error('Error al cargar los usuarios');
            }

            const usuarios = await response.json();
            loading.style.display = 'none';
            mostrarUsuarios(usuarios);
        } catch (error) {
            loading.textContent = '❌ Error: ' + error.message;
            loading.className = 'error';
        }
    }

    function mostrarUsuarios(usuarios) {
        container.innerHTML = '';
        
        usuarios.forEach(user => {
            const card = document.createElement('div');
            card.className = 'usuario-card';
            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><span class="label">📧 Correo:</span> ${user.email}</p>
                <p><span class="label">📍 Ciudad:</span> ${user.address.city}</p>
                <p><span class="label">🏢 Empresa:</span> ${user.company.name}</p>
            `;
            container.appendChild(card);
        });
    }

    fetchUsuarios();
});