let intentos = 6;
const palabrasBackup = ["ERROR", "AZUL", "CARRO", "GORDO", "NADAR", "PERRO"];
let palabra;
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es";

fetch(API)
  .then((response) => {
    response.json().then((body) => {
      palabra = body[0].toUpperCase();
      button.disabled = false;
      button.classList.remove("disabled");
      console.log('palabra', palabra);
    })
  })
  .catch(() => {
    palabra = palabrasBackup[Math.round(Math.random() * 5)];
    console.log('palabra', palabra);
  });

function intentar() {
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";
  const INTENTO = leerIntento();

 
  for (let i in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";

    if (INTENTO[i] === palabra[i]) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "green";
    } else if (palabra.includes(INTENTO[i])) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "yellow";
    } else {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "grey";
    }
    ROW.appendChild(SPAN);
  }
  GRID.appendChild(ROW);

  if (INTENTO === palabra ) {
    terminar("GANASTE!");
    return
}

  intentos--;
  
  if (intentos==0){
    terminar(`PERDISTE!. La palabra era: ${palabra}`);
}

}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}