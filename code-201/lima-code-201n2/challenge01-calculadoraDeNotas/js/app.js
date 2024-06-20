'use strict';

let notas = [];

function calcularPromedio() {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
}

function aprobo() {
  let promedio = calcularPromedio();
  if (promedio >= 14) {
    return true;
  } else {
    return false;
  }
}

// Ingresar notas del estudiante
for (let i = 0; i < 5; i++) {
  let nota = parseInt(prompt("Ingrese la nota"+ `${i + 1}`+" :" ));
  notas.push(nota);
}

// Calcular nota promedio y determinar si aprobó
let promedio = calcularPromedio();
let aprobado = aprobo();

alert("La nota promedio es:" + promedio);
if (aprobado) {
  alert("El estudiante aprobó!");
} else {
  alert("El estudiante no aprobó.");
}