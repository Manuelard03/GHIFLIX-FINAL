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

/*Primer Carrusel*/
const primercarrusel = document.querySelectorAll(".imagenes");
const divs = Array.from(primercarrusel);

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
      "https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/home.json"
    );
    const data = await response.json();
    const primercarrusel = document.querySelectorAll(".imagenes");
    const segundocarrusel = document.querySelectorAll(".imagenes2");
    
    for (let movie of data.buscados) {
      let peli = new Pelicula(movie.card, movie.id);
      const pelis = peli.render();
  
      primercarrusel.forEach((carrusel) => {
        carrusel.appendChild(pelis.cloneNode(true));
      });
    }
    for (let movie of data.viendo) {
        let peli = new Pelicula(movie.card, movie.id);
        const pelis = peli.render();
    
        segundocarrusel.forEach((favorito) => {
          favorito.appendChild(pelis.cloneNode(true));
        });
      }

    };
    
    mifuncion();

  

/*barra de buscar
    function search() {
        const input = document.querySelector('#search-bar').value.toLowerCase();
        
        // get data source
        const data = ["https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/catalogo-completo.json"];
        
        // filter data source based on input value
        const results = data.filter(item => item.name.toLowerCase().includes(input));
        
        // do something with the results
        // for example, display them in the DOM
        const resultContainer = document.querySelector('#search-results');
        resultContainer.innerHTML = '';
        for (const item of results) {
          const resultDiv = document.createElement('div');
          resultDiv.textContent = item.name;
          resultContainer.appendChild(resultDiv);
        }
      }
*/