
const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
//const volume = 

const numeroCapitulos = 10;
let tocando = 0;
let capituloAtual = 1;

//Tocar a faixa
function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play');
    botaoPlayPause.classList.add('bi-pause');
}

//Pausar a faixa
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause');
    botaoPlayPause.classList.add('bi-play');
}

//Tocar ou pausar a faixa
function tocarOuPausar(){
    if (tocando === 0) {
        tocarFaixa();
        tocando = 1;
    }
    else{
        pausarFaixa();
        tocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capitulo- ' + capituloAtual;
}

//Tocar a proxima faixa
function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
    capituloAtual = 1;
    }
    else{
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = '/aula 1 (do zero)/books/dom-casmurro/' + capituloAtual +'.mp3';
    tocarFaixa();
    tocando = 1;
    trocarNomeFaixa();
}

//Voltar a faixa anterior
function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
        }
        else{
            capituloAtual = capituloAtual - 1;
        }
    
        audioCapitulo.src = '/aula 1 (do zero)/books/dom-casmurro/' + capituloAtual +'.mp3';
        tocarFaixa();
        tocando = 1;
        trocarNomeFaixa();
}

//Aumentar volume
function aumentarVolume(){
    if(audioCapitulo.volume < 1){
        audioCapitulo.volume += 0.1;
    }
}

//Diminuir volume 
function diminuirVolume(){
    if(audioCapitulo.volume > 0){
        audioCapitulo.volume -= 0.1;
    }
}

//Mutar / desmutar
function mutar(){
    if(audioCapitulo.muted){
        audioCapitulo.muted = false;
    }
    else{
        audioCapitulo.muted = true;
    }
}


botaoVoltar.addEventListener('click', voltarFaixa);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoPlayPause.addEventListener('click',tocarOuPausar);



//Códigos 
//intensivojs15