import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




window.onload = function() {
  const palos = [
    { simbolo: "♥" },
    { simbolo: "♦" },
    { simbolo: "♣" },
    { simbolo: "♠" }
  ];

  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9","J", "Q", "K"];

  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];

  let color;
  if (palo.simbolo === "♥" || palo.simbolo === "♦") {
    color = "red";
  } else {
    color = "black";
  }

  const topElemento = document.getElementById("top");
  const numberElemento = document.getElementById("number");
  const bottomElemento = document.getElementById("bottom");

  topElemento.innerHTML = palo.simbolo;
  topElemento.style.color = color;

  numberElemento.innerHTML = valor;
  numberElemento.style.color = color;

  bottomElemento.innerHTML = palo.simbolo;
  bottomElemento.style.color = color;
  
};

  