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

/*slider*/
var counter = 1;
        setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000)