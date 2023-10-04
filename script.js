var vidas = 3;

function juego() {
  var numero = Math.floor(Math.random() * 10) + 1;
  var adivinanza = document.getElementById("adivinanza").value;
  
  if(adivinanza <= 0 || adivinanza > 10){
    document.getElementById("resultado").innerHTML = "Opción no válida, introduce un número del 1 al 10";
    return;
  }
  
  if (numero == adivinanza) {
    document.getElementById("resultado").innerHTML = "¡Ganaste!";
    vidas = 3;
    mostrarPopup();
  } else {
    vidas--;
    if (vidas > 0) {
      document.getElementById("resultado").innerHTML = "Lo siento, el número era " + numero + ". ¡Inténtalo de nuevo!";
    } else {
       mostrarPopup_2()  
      document.getElementById("resultado").innerHTML = "Game Over.";
      vidas = 3;
    }
  }
  
  document.getElementById("vidas").innerHTML = " " + vidas;
}

function mostrarPopup() {
   document.getElementById("popup").style.display = "block";
}

function mostrarPopup_2() {
    document.getElementById("popup-2").style.display = "block";
 }

function cerrarPopup() {
   document.getElementById("popup").style.display = "none";
}

function cerrarPopup_2() {
    document.getElementById("popup-2").style.display = "none";
 }
 
