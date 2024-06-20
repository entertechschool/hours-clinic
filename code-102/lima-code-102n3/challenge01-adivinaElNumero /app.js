'use strict';


// Número secreto
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Intentos del usuario
let attempts = 0;

// Función para pedir un número al usuario
function askForNumber() {
  
  let userInput = prompt("Ingresa un número entre 1 y 10:");
  attempts++;

  if (userInput < 1 || userInput > 10) {
    console.log("Por favor, ingresa un número entre 1 y 10.");
    alert("Por favor, ingresa un número entre 1 y 10.")
    askForNumber();
  } else {
    checkNumber(userInput);
  }
}

// Función para verificar si el usuario ha adivinado el número
function checkNumber(userInput) {
  if (userInput == secretNumber) {
    console.log("¡Felicidades! Adivinaste el número en ${attempts} intentos.");
    alert("¡Felicidades! Adivinaste el número en ${attempts} intentos.")
  } else if (userInput < secretNumber) {
    console.log("El número es mayor que ${userInput}. Intenta de nuevo!");
    alert("El número es mayor que ${userInput}. Intenta de nuevo!")
    askForNumber();
  } else {
    console.log("El número es menor que ${userInput}. Intenta de nuevo!");
    alert("El número es menor que ${userInput}. Intenta de nuevo!")
    askForNumber();
  }
}

// Iniciar el juego
alert("Adivina el Número");
alert("Bienvenido al juego de adivinanza! Adivina un número entre 1 y 10.");
askForNumber();