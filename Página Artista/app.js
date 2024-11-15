// Modo oscuro
document.getElementById('toggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
// Función para cargar una página con AJAX
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('viceversa').addEventListener('click', function() {
    loadPage('viceversa.html');
});

document.getElementById('afrodisiaco').addEventListener('click', function() {
    loadPage('afrodisiaco.html');
});

document.getElementById('playasaturno').addEventListener('click', function() {
    loadPage('playasaturno.html');
});

  

// Consultar Letra de Canción
async function fetchLyrics() {
    const songInput = document.getElementById('songInput').value;
    const lyricsContainer = document.getElementById('songLyrics');
    
    lyricsContainer.innerHTML = '<p>Cargando letra...</p>';
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/Rauw Alejandro/${songInput}`);
      if (!response.ok) throw new Error('Letra no encontrada');
      const data = await response.json();
      lyricsContainer.innerHTML = `<p>${data.lyrics.replace(/\n/g, '<br>')}</p>`;
    } catch (error) {
      lyricsContainer.innerHTML = '<p>Error al cargar la letra.</p>';
    }
  }
