import "bootstrap";
import "./style.css";

window.onload = function () {
  const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const cardTypes = ["♦", "♥", "♠", "♣"];

  function generateCard() {
    const value = cardValues[Math.floor(Math.random() * cardValues.length)];
    const type = cardTypes[Math.floor(Math.random() * cardTypes.length)];

    document.querySelector(".value").innerHTML = value;
    document.querySelector(".palo-up").innerHTML = type;
    document.querySelector(".palo-down").innerHTML = type;

    const isRed = type === "♥" || type === "♦";
    document.querySelector(".value").className = "value" + (isRed ? " red" : "");
    document.querySelector(".palo-up").className = "corner top palo-up" + (isRed ? " red" : "");
    document.querySelector(".palo-down").className = "corner bottom palo-down" + (isRed ? " red" : "");
  }

  generateCard();
  setInterval(generateCard, 3000); // cambia cada 3 segundos
};