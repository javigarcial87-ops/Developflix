
import peliculas from './peliculas.js'



const generos = {
  28: "Acción",
  12: "Aventura",
  53: "Thriller",
  18: "Drama",
  80: "Crimen",
  878: "Ciencia ficción",
  16: "Animación",
  10752: "Bélica",
  27: "Terror",
  36: "Histórica"
};

// Función que crea una "tarjeta" para cada película
function crearTarjeta(pelicula) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("cardOne");

  const img = document.createElement("img");
  img.src = pelicula.poster_path;
  img.alt = pelicula.title;

  const titulo = document.createElement("h3");
  titulo.textContent = pelicula.title;

  const genero = document.createElement("p");
  // Muestra el primer género principal
  genero.textContent = generos[pelicula.genre_ids[0]] || "Desconocido";

  tarjeta.appendChild(img);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(genero);

  return tarjeta;
}

// Función para mostrar películas según género
function mostrarPeliculasPorGenero(idGenero, idContenedor) {
  const contenedor = document.getElementById(idContenedor);
  const peliculasFiltradas = peliculas.filter(p => p.genre_ids.includes(idGenero));

  peliculasFiltradas.forEach(pelicula => {
    const tarjeta = crearTarjeta(pelicula);
    contenedor.appendChild(tarjeta);
  });
}

// Mostrar películas por cada categoría
mostrarPeliculasPorGenero(28, "genero-28");
mostrarPeliculasPorGenero(53, "genero-53");
mostrarPeliculasPorGenero(12, "genero-12");





























