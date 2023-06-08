/*Responsive menu*/
const togglebtn = document.querySelector('.toggle-btn')
        const togglebtnIcon = document.querySelector('.toggle-btn i')
        const dropDownMenu= document.querySelector('.dropdown_menu')

        togglebtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            togglebtnIcon.classList = isOpen 
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars-staggered'
            
        }
/*Barra de navegacion con efecto scroll*/
        window.addEventListener("scroll", () => {
            var header = document.querySelector("header");
            header.classList.toggle('down', window.scrollY > 0);
        });
/*Carrusel*/
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
        
/*Modal Totoro*/
        const openModal = document.querySelector('.totoro');
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

/*Fotos carrusel*/
const carruselcatalogo = document.querySelectorAll(".carousel");
const divs = Array.from(carruselcatalogo);

class Pelicula {
  titulo = "";
  tarjeta = "";

  constructor(card, id) {
    this.tarjeta = card;
    this.id = id;
  }

  render() {
    const card = document.createElement("div");
    const a = document.createElement("a");
    const img = document.createElement("img");
    card.classList.add("pelicula");
    card.id = this.id;
    img.src = this.tarjeta;
    a.href = "#";
    card.appendChild(a);
    a.appendChild(img);

    return card;
  }
}

const mifuncion = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/peliculas.json"
  );
  const data = await response.json();
  const carruselcatalogo = document.querySelectorAll(".carousel");
  
  for (let movie of data.Peliculas) {
    let peli = new Pelicula(movie.card, movie.banner, movie.id, movie.banner_title, movie.synopsis);
    const pelis = peli.render();

    carruselcatalogo.forEach((carrusel) => {
      carrusel.appendChild(pelis.cloneNode(true));
    });
  }
};

mifuncion();

/*slider*/
var counter = 1;
        setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000)

/*Slider fotos
const slider = document.querySelectorAll(".slider");
const div = Array.from(carruseles);

class Pelicula {
  titulo = "";
  banner = "";
  tarjeta = "";
  overview = "";

  constructor(banner, id, banner_title) {
    this.banner = banner;
    this.id = id;
    this.banner_title = banner_title;
  }

  render() {
    const a = document.createElement("a");
    const img = document.createElement("img");

    card.classList.add("pelicula");
    card.id = this.id;
    img.src = this.tarjeta;
    a.href = "#";
    card.appendChild(a);
    a.appendChild(img);

    return card;
  }
}

const funcionslider = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/slider.json"
  );
  const data = await response.json();
  const carruseles = document.querySelectorAll(".slider");
  
  for (let movie of data.Slider) {
    let peli = new Pelicula(movie.card, movie.banner, movie.id, movie.banner_title, movie.synopsis);
    const pelis = peli.render();

    carruseles.forEach((carrusel) => {
      carrusel.appendChild(pelis.cloneNode(true));
    });
  }

  for (let peli of data.Slider) {
    let tarjeta = document.getElementById(peli.id);
    tarjeta.addEventListener('click', () => {
      
      const descripcion = document.createElement("p");
      const titulo_banner = document.createElement("h3");
      const img_title = document.createElement("img");
      descripcion.classList.add("descripcion");
      titulo_banner.classList.add("titulo");
      img_title.src = peli.banner_title;
      peliculaprincipal.appendChild(descripcion);
      peliculaprincipal.appendChild(titulo_banner);
      titulo_banner.appendChild(img_title);
      return
    });
  };
};

funcionslider();
*/