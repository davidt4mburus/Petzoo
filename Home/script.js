const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.transition = 'transform 0.5s';
    logo.style.transform = 'rotate(360deg)';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg)';
});

const acessibilidadeBtn = document.getElementById('acessibilidade-btn');
const acessibilidadeMenu = document.getElementById('acessibilidade-menu');
const conteudo = document.querySelector('.conteudo');

let zoomLevel = 1; 

acessibilidadeBtn.addEventListener('click', () => {
    acessibilidadeMenu.style.display = 
        acessibilidadeMenu.style.display === 'none' ? 'flex' : 'none';
});

function aplicarZoom(novoNivelZoom) {
    zoomLevel = novoNivelZoom;
    conteudo.style.transform = `scale(${zoomLevel})`;
    acessibilidadeMenu.style.transform = `scale(calc(1 / ${zoomLevel}))`;
}

function zoomIn() {
    if (zoomLevel < 1.5) {
        aplicarZoom(zoomLevel + 0.1);
    }
}

function zoomOut() {
    if (zoomLevel > 0.8) {
        aplicarZoom(zoomLevel - 0.1);
    }
}

function altoContraste() {
    document.body.classList.toggle('alto-contraste');
    const imagens = document.querySelectorAll('img');
    imagens.forEach(img => {
        img.classList.toggle('alto-contraste');
    });
}


function altoContraste() {
    document.body.classList.toggle('alto-contraste');
}

let lendo = false;
function leitorDeTela() {
    if (!lendo) {
        const texto = conteudo.innerText;
        if (window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(texto);
            window.speechSynthesis.speak(utterance);
            lendo = true;
            utterance.onend = () => { lendo = false; };
        } else {
            alert("Seu navegador não suporta o leitor de tela.");
        }
    } else {
        window.speechSynthesis.cancel();
        lendo = false;
    }
}