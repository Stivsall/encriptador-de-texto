console.log("Hola mundo");

//constantes que llaman al id del index
const campoTexto = document.querySelector("#texto-resive");
const campoEncriptado = document.querySelector("#mensaje-texto-encriptado");

let matrizEncriptador = [
    ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"],
];

function btnEncriptado (){
    //envio el texto a encriptar y lo saco en consola
    const texto = encriptador(campoTexto.value);
    campoEncriptado.value = texto; 
    textArea.value = "";
    campoEncriptado.style.backgroundImage = "none";
}

function encriptador(textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();
    //siclo que recorre mi array que solo cuenta la columna de la matriz
    for (let i = 0; i < matrizEncriptador.length; i++){
        //evalua el texto que lee enviado en la funsión botonEncriptado pasando cada letra en la posicion 0 del array
        if(textoEncriptado.includes(matrizEncriptador[i][0])){
           //el atributo .includes lee el caracter mientras que el .replaceAll lo cambia la letra por la cadena de caracteres
            textoEncriptado = textoEncriptado.replaceAll(
                matrizEncriptador[i][0],
                matrizEncriptador[i][1]
            );
        }
    }
    return textoEncriptado;
}


function btnDesncriptado (){
    //envio el texto a encriptar y lo saco en consola
    const textoEnviado = desencriptador(campoTexto.value);
    campoEncriptado.value = textoEnviado; 
    textArea.value = "";
}

function desencriptador(textoDesncriptado){
    textoDesncriptado = textoDesncriptado.toLowerCase();
    for (let i = 0; i < matrizEncriptador.length; i++){
        
        if(textoDesncriptado.includes(matrizEncriptador[i][1])){
                textoDesncriptado = textoDesncriptado.replaceAll(
                matrizEncriptador[i][1],
                matrizEncriptador[i][0]
            );
        }
    }
    return textoDesncriptado;
}
/*
function botonCopiar(textoCopia){
    const textoCopia = campoEncriptado.value;


}*/ 