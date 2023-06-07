export class Pelicula {
    titulo = ""
    banner = ""
    tarjeta = ""
    overview = ""

    constructor (title_banner, banner, card, synopsis){
        this.titulo = title_banner;
        this.banner = banner;
        this.tarjeta = card;
        this.overview = synopsis;
    }

    render() {
        const card = document.createElement('div')
        const a = document.createElement('a')
        const img = document.createElement('img')
        card.classList.add ("pelicula")
        img.src = this.tarjeta;
        a.href = "#";
        card.appendChild(a);
        a.appendChild(img);
        return card;
    }

}