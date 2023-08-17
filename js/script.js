const res = document.getElementById("res");
const btnReset = document.getElementById("btnReiniciar");
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaSorteada;
const palavras = [
    "ABACATE",
    "ABACAXI",
    "ACEROLA",
    "ACAI",
    "ARACA",
    "ABACATE",
    "BACABA",
    "BACURI",
    "BANANA",
    "CAJA",
    "CAJU",
    "CARAMBOLA",
    "CUPUACU",
    "GRAVIOLA",
    "GOIABA",
    "JABUTICABA",
    "JENIPAPO",
    "MACA",
    "MANGABA",
    "MANGA",
    "MARACUJA",
    "MURICI",
    "PEQUI",
    "PITANGA",
    "PITAYA",
    "SAPOTI",
    "TANGERINA",
    "UMBU",
    "UVA",
    "UVAIA"
  ];

  function Reiniciar(){
    location.reload();
  }


  criarPalavraSecreta();
  function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra];
  }

  montarPalavraNaTela();
  function montarPalavraNaTela(){
    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }
  }

  function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
  }

  function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){
        tentativas--;
        carregaImagemForca();
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(tentativas == 0){
        res.innerHTML = "Você perdeu, tente novamente!";
        res.style.color = 'red';
    }

    if(vitoria == true){
        tentativas = 0;
        res.innerHTML = "Você ganhou, párabens!";
    }
  }

  function carregaImagemForca(){
    switch(tentativas){
        case 5: 
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4: 
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3: 
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0: 
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;

        default: document.getElementById("imagem").style.background = "url('./img/forca.png')";
    }
  }

  function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
  }
