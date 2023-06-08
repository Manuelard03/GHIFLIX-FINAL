const fila = document.querySelector('.imagenes');
        const peliculas = document.querySelectorAll('.pelicula');
        
        const flechaIzquierda = document.getElementById('flecha-izquierda');
        const flechaDerecha = document.getElementById('flecha-derecha');
        
        // ? ----- ----- Event Listener para la flecha derecha. ----- -----
        flechaDerecha.addEventListener('click', () => {
            fila.scrollLeft += fila.offsetWidth;
        
            const indicadorActivo = document.querySelector('.indicadores .activo');
            if(indicadorActivo.nextSibling){
                indicadorActivo.nextSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
        });
        
        // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
        flechaIzquierda.addEventListener('click', () => {
            fila.scrollLeft -= fila.offsetWidth;
        
            const indicadorActivo = document.querySelector('.indicadores .activo');
            if(indicadorActivo.previousSibling){
                indicadorActivo.previousSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
        });
        
        // ? ----- ----- Paginacion ----- -----
        const numeroPaginas = Math.ceil(peliculas.length / 5);
        for(let i = 0; i < numeroPaginas; i++){
            const indicador = document.createElement('button');
        
            if(i === 0){
                indicador.classList.add('activo');
            }
        
            document.querySelector('.indicadores').appendChild(indicador);
            indicador.addEventListener('click', (e) => {
                fila.scrollLeft = i * fila.offsetWidth;
        
                document.querySelector('.indicadores .activo').classList.remove('activo');
                e.target.classList.add('activo');
            });
        }
        
        // ? ----- ----- Hover ----- -----
        peliculas.forEach((pelicula) => {
            pelicula.addEventListener('mouseenter', (e) => {
                const elemento = e.currentTarget;
                setTimeout(() => {
                    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                    elemento.classList.add('hover');
                }, 300);
            });
        });
        
        fila.addEventListener('mouseleave', () => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        });

        const openModal = document.querySelector('.castillo-ambulante');
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');
        
        openModal.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.add('modal--show');
        });
        
        closeModal.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.remove('modal--show');
        });

/*fotos*/
const carruseles = document.querySelectorAll(".carousel");
const divs = Array.from(carruseles);

class Pelicula {
  titulo = "";
  banner = "";
  tarjeta = "";
  overview = "";

  constructor(card, banner, id, banner_title, synopsis) {
    this.tarjeta = card;
    this.banner = banner;
    this.id = id;
    this.banner_title = banner_title;
    this.synopsis = synopsis;
  }

  render() {
    const card = document.createElement("div");

    const a = document.createElement("a");
    const img = document.createElement("img");
    const boton = document.createElement("button");
    const añadir = document.createElement("button");
    const rating = document.createElement("div");

    boton.innerHTML = `
        <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
        class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
        class="fa-regular fa-star"></i>
      `;
    añadir.innerHTML = `
        <i class="fa-regular fa-bookmark"></i> Añadir
      `;
    card.classList.add("pelicula");
    card.id = this.id;
    rating.classList.add("rating");
    img.src = this.tarjeta;
    a.href = "#";
    card.appendChild(a);
    a.appendChild(img);
    rating.appendChild(boton);
    rating.appendChild(añadir);
    card.appendChild(rating);

    return card;
  }
}

const peliRandom = (peliculas) => {
  return peliculas[Math.floor(Math.random() * peliculas.length)];
}

const mifuncion = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/matilocker/Lab-10/main/movies.json"
  );
  const data = await response.json();
  const carruseles = document.querySelectorAll(".carousel");
  const favoritos = document.querySelectorAll(".carousel_favourites");
  const mainMovie = document.querySelector('.main-movie');
  
  /*function seleccionarPeliculaAleatoria(peliculas) {
    return peliculas[Math.floor(Math.random() * peliculas.length)];
  }

  const peliculaAleatoria = seleccionarPeliculaAleatoria(data.suggested)

  const newMainMovie = new Pelicula(
    1,
    mainMovie.banner,
    mainMovie.banner_title,
    mainMovie.synopsis
  );
  newMainMovie.innerHTML = `
    <div class="botones">
      <button role="button" class="boton">
        <i class="fa-solid fa-play"></i>Reproducir
      </button>
      <button role="button" class="boton">
        <i class="fa-regular fa-bookmark"></i>Guardar
      </button>
      <button class="adult">+18</button>
    </div>
  `;
  const descripcion = document.createElement("p");
  const titulo_banner = document.createElement("h3");
  const img_title = document.createElement("img");
  descripcion.classList.add("descripcion");
  titulo_banner.classList.add("titulo");
  img_title.src = newMainMovie.banner_title;
  descripcion.innerHTML = `
    ${newMainMovie.synopsis}
  `;
  newMainMovie.appendChild(descripcion);
  newMainMovie.appendChild(titulo_banner);
  titulo_banner.appendChild(img_title);
  newMainMovie.style.background = `linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0.855)), url(${newMainMovie.banner})`;*/  

  /*const bannerRefresh = peliRandom(data.suggested);
  const movieBanner = new Pelicula(
    bannerRefresh.synopsis,
    bannerRefresh.banner,
    bannerRefresh.banner_title
  );
  mainMovie.appendChild(movieBanner.bannerRefresh());*/

  for (let movie of data.suggested) {
    let peli = new Pelicula(movie.card, movie.banner, movie.id, movie.banner_title, movie.synopsis);
    const pelis = peli.render();

    carruseles.forEach((carrusel) => {
      carrusel.appendChild(pelis.cloneNode(true));
    });
  }

  for (let movie of data.favourites) {
    let peli = new Pelicula(movie.card, movie.banner, movie.id, movie.banner_title, movie.synopsis);
    const pelis = peli.render();

    favoritos.forEach((favorito) => {
      favorito.appendChild(pelis.cloneNode(true));
    });
  }

  for (let peli of data.suggested) {
    let tarjeta = document.getElementById(peli.id);
    tarjeta.addEventListener('click', () => {
      const mainMovie = document.querySelector('.main-movie');
      mainMovie.style.backgroundColor = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0))';
      mainMovie.innerHTML = `
      <div class="botones"><button role="button" class="boton"><i class="fa-solid fa-play"></i>Reproducir</button>
      <button role="button" class="boton"><i class="fa-regular fa-bookmark"></i>Guardar</button>
      <button class="adult">+18</button></div>
      `;
      const descripcion = document.createElement("p");
      const titulo_banner = document.createElement("h3");
      const img_title = document.createElement("img");
      descripcion.classList.add("descripcion");
      titulo_banner.classList.add("titulo");
      img_title.src = peli.banner_title;
      descripcion.innerHTML = `
        ${peli.synopsis}
        `;
      mainMovie.appendChild(descripcion);
      mainMovie.appendChild(titulo_banner);
      titulo_banner.appendChild(img_title);
      mainMovie.style.background = `linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0.855)), url(${peli.banner})`;
      mainMovie.style.backgroundSize = 'cover';
      return
    });
  };

  for (let peli of data.favourites) {
    let tarjeta = document.getElementById(peli.id);
    tarjeta.addEventListener('click', () => {
      const mainMovie = document.querySelector('.main-movie');
      mainMovie.style.backgroundColor = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0))';
      mainMovie.innerHTML = `
      <div class="botones"><button role="button" class="boton"><i class="fa-solid fa-play"></i>Reproducir</button>
      <button role="button" class="boton"><i class="fa-regular fa-bookmark"></i>Guardar</button>
      <button class="adult">+18</button></div>
      `;
      const descripcion = document.createElement("p");
      const titulo_banner = document.createElement("h3");
      const img_title = document.createElement("img");
      descripcion.classList.add("descripcion");
      titulo_banner.classList.add("titulo");
      img_title.src = peli.banner_title;
      descripcion.innerHTML = `
        ${peli.synopsis}
        `;
      mainMovie.appendChild(descripcion);
      mainMovie.appendChild(titulo_banner);
      titulo_banner.appendChild(img_title);
      mainMovie.style.background = `linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0.855)), url(${peli.banner})`;
      mainMovie.style.backgroundSize = 'cover';
      return
    });
  };

  mainMovie.style.backgroundColor = 'linear-gradient(rgba(0, 0, 255, 0.166), rgba(0, 0, 0, 0))';
};

mifuncion();