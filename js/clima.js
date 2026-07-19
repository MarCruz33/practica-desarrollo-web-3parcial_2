// Función para obtener el clima (simulado con datos de ejemplo)
function buscarClima() {
    const ciudad = document.getElementById('ciudadInput').value.trim();
    
    if (!ciudad) {
        alert('Por favor ingresa una ciudad');
        return;
    }

    // Simulación de datos del clima (en producción usar API real)
    const datosClima = {
        'ciudad': ciudad,
        'temperatura': Math.floor(Math.random() * 20 + 15),
        'descripcion': ['Soleado', 'Nublado', 'Lluvioso', 'Parcialmente nublado', 'Tormenta'][Math.floor(Math.random() * 5)],
        'humedad': Math.floor(Math.random() * 40 + 30),
        'viento': Math.floor(Math.random() * 30 + 5)
    };

    mostrarClima(datosClima);
}

function mostrarClima(data) {
    const iconos = {
        'Soleado': '☀️',
        'Nublado': '☁️',
        'Lluvioso': '🌧️',
        'Parcialmente nublado': '⛅',
        'Tormenta': '⛈️'
    };

    document.getElementById('climaIcono').textContent = iconos[data.descripcion] || '🌤️';
    document.getElementById('climaCiudad').textContent = data.ciudad;
    document.getElementById('climaTemp').textContent = `🌡️ ${data.temperatura}°C`;
    document.getElementById('climaDesc').textContent = data.descripcion;
    document.getElementById('climaHumedad').textContent = `💧 Humedad: ${data.humedad}%`;
    document.getElementById('climaViento').textContent = `💨 Viento: ${data.viento} km/h`;
}

// Cargar clima inicial al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    buscarClima();
});

// Permitir buscar con Enter
document.getElementById('ciudadInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarClima();
    }
});