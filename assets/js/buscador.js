document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".pelicula").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })

const catalogo = document.querySelectorAll(".listapeliculas");
const divs = Array.from(catalogo);

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
      "https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/catalogo-completo.json"
    );
    const data = await response.json();
    const catalogo = document.querySelectorAll(".listapeliculas");
    
    for (let movie of data.Catalogo) {
      let peli = new Pelicula(movie.card, movie.id);
      const pelis = peli.render();
  
      catalogo.forEach((carrusel) => {
        carrusel.appendChild(pelis.cloneNode(true));
      });
    }
    };
    
    mifuncion();