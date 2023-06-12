/*
class Produto{
    
    constructor(nome, descrição, imgSource, preço){
        this.nome = nome;
        this.descrição = descrição;
        this.imgSource = imgSource;
        this.preço = preço;
    }

    teste(){
        console.log(`${this.nome}\n${this.descrição}\n${this.imgSource}\n${this.preço}`);
    }
}

const produto1 = new Produto("trufa de amendoim", "tem amendoim", "blablabla.png","69,420");

produto1.teste();
*/

const track = document.getElementById("produtos");
const images = track.getElementsByClassName("produto");

window.onmousedown = e => {
    track.dataset.mouseApertadoEm = e.clientX;
}

produtos.onmousemove = e => {

    if(track.dataset.mouseApertadoEm === "0") return;
    

    const mouseDelta = parseFloat(track.dataset.mouseApertadoEm) - e.clientX,
    maxDelta = window.innerWidth * 1.5;
    
    
    const porcentagem = (mouseDelta / maxDelta) * -100;
    proxPorcentagem = parseFloat(track.dataset.velhaPorcentagem) + porcentagem;

    console.log(parseFloat(track.dataset.velhaPorcentagem));

    proxPorcentagem = Math.min( proxPorcentagem, 0);
    proxPorcentagem = Math.max(proxPorcentagem, -91);

    track.dataset.porcentagem = proxPorcentagem;

    for(const img of track.getElementsByClassName("produto")){
        img.animate({
            objectPosition: `${100 + proxPorcentagem}% center`
        }, {duration: 1200, fill:"forwards"});
    }
    
    track.animate({
        transform: `translate(${proxPorcentagem}%, -15%)`
    }, {duration: 1200, fill:"forwards"});
    
}

window.onmouseup = e => {
    track.dataset.mouseApertadoEm = "0";
    track.dataset.velhaPorcentagem = track.dataset.porcentagem;
}
