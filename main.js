const inputTexto = document.querySelector("#textoUsuario");
const mensagem = document.querySelector("#outputTexto");

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
}

function btnDescriptar() {
  const textoEncriptado = Desencriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function Desencriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringEncriptada;
}


