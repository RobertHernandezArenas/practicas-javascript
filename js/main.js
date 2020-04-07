"use strict";
/*Operaciones básicas, Tipos de datos, Prompt y Alert

Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.*/

/* function sum(firstNumber, secondNumber) {
   if(sum === null) {
      console.log("Please ,select your numbers");
   } else {
      firstNumber = Number(prompt("Please write your first number : "));
      secondNumber = Number(prompt("Please write your second number : "));
      let operation = firstNumber + secondNumber;
         alert(`the result of ${firstNumber} and ${secondNumber} is : ${operation}`);
   }  
}
sum();*/

/*Crear un programa que reciba 3 numeros con prompts, y regrese el promedio de ellos con una alerta.*/

/*function average(firstNumber, secondNumber, thirdNumber) {
   firstNumber = Number(prompt("Please write your first number : "));
   secondNumber = Number(prompt("Please write your second number : "));
   thirdNumber = Number(prompt("Please write your third number : "));
   let averageOperation = ((firstNumber + secondNumber) + thirdNumber) / 3;
      alert(`the average of ${firstNumber} , ${secondNumber} and ${thirdNumber} is : ${averageOperation}`);
}
average();*/
   

/* Crear un programa que pida con prompts nombre, y edad. Con esto, mostrar una alerta similar a Hola Juan, tienes 25 años.*/
let name = prompt("Please write your name : ");
let age = Number(prompt("Please write age : "));

function greet() { 
   alert(`hello ${name} , you are ${age} years old`)
}
greet();