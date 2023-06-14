const track = document.getElementById("produtos");
const images = track.getElementsByClassName("produto");

produtos.onmousedown = e => {
    track.dataset.mouseApertadoEm = e.clientX;
}

produtos.onmousemove = e => {
    
    if(track.dataset.mouseApertadoEm === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseApertadoEm) - e.clientX,
    maxDelta = window.innerWidth * 1.5;
    
    
    porcentagem = (mouseDelta / maxDelta) * -100;
    
    proxPorcentagem = parseFloat(track.dataset.velhaPorcentagem) + porcentagem;
    
    if(isNaN(track.dataset.velhaPorcentagem)){
        track.dataset.velhaPorcentagem = porcentagem;
        return;
    }
    
    proxPorcentagem = Math.min(proxPorcentagem, 0);
    proxPorcentagem = Math.max(proxPorcentagem, -91);
    
    
    track.dataset.porcentagem = proxPorcentagem;
    
    for(const img of track.getElementsByClassName("produto")){
        img.animate({
            objectPosition: `${100 + proxPorcentagem}% center`
        }, {duration: 1200, fill:"forwards"});
    }
    
    track.animate({
        transform: `translate(${proxPorcentagem}%, -8vh)`
    }, {duration: 1200, fill:"forwards"});
    
}

window.onmouseup = e => {
    track.dataset.mouseApertadoEm = "0";
    track.dataset.velhaPorcentagem = track.dataset.porcentagem;
}

function pegarSRC(img){
    const visible = productMenu.getAttribute("data-visible");
    const productMenu = document.getElementsByClassName("productMenu");
    
    if(visible === "false"){
        productMenu.setAttribute("data-visible", true);
    } else {
        productMenu.setAttribute("data-visible", false);
    }
    
    document.getElementById("aaa").src = img.src;
};