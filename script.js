let intentos = 6;
let palabra = "APPLE";

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

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
    terminar("PERDISTE!")
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