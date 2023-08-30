const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const muñeco = document.querySelector(".muneco");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");
const encriptadoP = document.querySelector(".parrafo");
const resultado = document.querySelector(".texto-resultado");
const container = document.querySelector(".container");
const mensajeError = document.querySelector(".titulo-mensaje");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;


function encriptar(){
    var textoEncriptado = recuperarTexto()
    resultado.textContent = encriptarTexto(textoEncriptado);
    mensajeError.style.display = 'none';
    muñeco.style.display = 'none';
    encriptadoP.style.display = 'none';
  
}

function desencriptar(){
    var textoEncriptado = recuperarTexto()
    resultado.textContent = desencriptarTexto(textoEncriptado);
    
}

function recuperarTexto(){
    var textoEncriptado = document.querySelector(".text-area") 
    return textoEncriptado.value
}

function ocultarAdelante(){
    muñeco.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
          textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
          textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
          textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
          textoFinal =  textoFinal + "ufat"
        }
        else{
          textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

  }

    
  function desencriptarTexto(mensaje){
      var texto = mensaje;
      var textoFinal = "";

      for(var i = 0; i < texto.length; i++){
        if(texto[i] == "ai"){
          textoFinal = textoFinal + "a"
          i = i+1;
        }
        else if(texto[i] == "enter"){
          textoFinal = textoFinal + "e"
          i = i+4;
        }
        else if(texto[i] == "imes"){
          textoFinal = textoFinal + "i"
          i = i+3;
        }
        else if(texto[i] == "ober"){
          textoFinal = textoFinal + "o"
          i = i+3;
       }
       else if(texto[i] == "ufat"){
          textoFinal = textoFinal + "u"
          i = i+3;
       }
       else{
          textoFinal = textoFinal + texto[i];
       }
    }

    return textoFinal;

  }
  
    const btnCopiar = document.querySelector(".btnCopiar");
    btnCopiar.addEventListener("click",() => {
    var contenido = document.querySelector(".titulo-mensaje").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
  });







