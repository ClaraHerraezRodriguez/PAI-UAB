// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.

// let taula = [];
// taula[0]="Hola";
// taula[1]="Adeu";
// console.log(taula);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.

// let taula = [];
// taula[0]="Hola";
// taula[1]="Adeu";
// console.log(taula);

// taula[2]="Nom";
// console.log(taula);

// taula[1]=",";
// console.log(taula);


// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

// let taula=[23,45,98,73];
// let suma=taula[0] + taula[2];
// console.log(suma);
// taula[6]= suma;
// console.log(taula);
// posa empty x2, indica que hi ha dues posicions que no tenen valor.

// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
// taula a la consola.

// let num=Number(prompt("Introdueix un número"));
// let taula=[];
// taula [0]=num*2
// taula [1]=num*3
// console.log(taula);

// 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
// emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
// multiplicació i la divisió dels dos valors introduïts.

// let taula=[];
// let num1=Number(prompt("Introdueix un número"));
// let num2=Number(prompt("Introdueix un altre número"));

// taula[0]= num1+num2;
// taula[1]= num1-num2;
// taula[2]= num1*num2;
// taula[3]= num1/num2;
// console.log(taula);

// 21.6.- Donada aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
// de la taula.
// *****
// Donada la definició d’aquesta taula:

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula[1], taula[taula.length-1]);


// 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
// taula, un a un.

// let taula=[23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log(taula)
// for (let i=0; i < taula.length; i++){
//     console.log(taula[i]);
// }

// 21.8.- Fes un programa que escrigui a la consola la suma tots els valors
// emmagatzemats a la taula.

// let taula=[23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let suma=0;
// for (let i=0; i<taula.length; i++){
//     suma += taula[i]
// }
// console.log(suma);

// 21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els
// valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula
// emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.

// let taula=[23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let sumaElements=0;
// let novaTaula=[];

// for (let i=0; i < taula.length; i++){
//     sumaElements = taula[i]+25;
//     novaTaula[i] = sumaElements;
// }
// console.log(novaTaula);

// 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula
// i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel
// nombre de valors).

// let taula=[23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// suma=0;

// for (let i=0; i<taula.length ; i++){
//     suma += taula[i];
//     mitjana = suma/taula.length;
// }
// console.log(mitjana);


// 21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més
// petit de la taula.

// let taula=[23 , 45 , 63 , 78 , 23 , 68 , 3 , 78 , 32 , 53 , 93 , 21 , 53 , 5 , 62 , 78];

// taula.sort((a, b) => a - b);  

// let menor= taula[0];
// let major= taula[taula.length-1];
// console.log(menor);
// console.log(major);

// 21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els
// valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.

// let taula=[23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let parells=[];
// for (let i=0; i<taula.length; i++){
//     if (taula[i]%2 === 0){
//         parells.push(i);
//     }
    
// }
// console.log(parells);

// 21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i
// escrigui a la consola quants cops apareix aquest valor a la taula.

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let num = Number(prompt("Introdueix un número"));
// let comptador = 0;

// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] === num) {
//         comptador++;
//     }
// }

// console.log(comptador);
 

// 21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el
// mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada
// element que es trobi a la mateixa posició als dos arrys.
// Exemple: [1,2,3] + [2,3,4] → [3,5,7]

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let taula1 = [1, 2, 3];
// let taula2 = [2, 3, 4];
// let suma = [];

// if (taula1.length === taula2.length) {
//     for (let i = 0; i < taula1.length; i++) {
//         suma[i] = taula1[i] + taula2[i];
//     }
//     console.log(suma); 
// } else {
//     console.log("Les taules no tenen la mateixa quantitat d'elements");
// }

// 21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els
// valors de la primera però donant-li la volta.
// Exemple: [1,2,3,4,5] → [5,4,3,2,1]
// ******
// Donada la definició d’aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let novaTaula = [];

// for (let i = taula.length - 1; i >= 0; i--) {
//     novaTaula[novaTaula.length] = taula[i];
// }

// console.log(novaTaula);

// 21.16.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i
// escrigui a la consola si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un
// while de manera que si es troba l’element, s’acabi el bucle.
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let num = Number(prompt("Introdueix un número"));
for (let i = 0; i < taula.length; i++) {
    if (taula[i] === num) {
        console.log("El número es troba a la taula");  
    }
    else {
        console.log("El número no es troba a la taula");
    }
}   

// 21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i
// escrigui a la consola si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo
// fent servir un while de manera que si es troba que hi ha un element més gran,
// s’acabi el bucle.

// 21.18.- Fes un programa que escrigui “Sí” si el primer número de la taula està repetit
// i “No” en cas contrari.

// 21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula
// amb la unió de les dues taules de manera alterna. Per exemple:
// [1,2,3] unió [4,5,6] → [1,4,2,5,3,6]

// 21.20.- Fes un programa que, donada una taula i un valor, crei una nova taula sense el valor
// proporcionat.

// 21.21.- Fes un programa que, donada una taula i una posició, guardi a una altra taula la
// taula inicial, però des de la posició donada fins al final. Per exemple
// [1,2,3,5,6,7,8,9,0] i 4 → [6,7,8,9,0]

// 21.22.- Fes un programa que, donada una taula escrigui a la pantalla el primer número que
// estigui repetit.

// Exercici amb objectes
// Tenim aquesta definició de l’objecte cotxe i dues variables:
// function Auto(marca, modelo, potencia, antiguedad , precio) {
//  this.marca = marca;
//  this.modelo = modelo;
//  this.potencia = potencia;
//  this.antiguedad = antiguedad;
//  this.precio = precio;
// }
// let miAuto = new Auto("Seat","Ibiza",90,2010,5000);
// let otroAuto = new Auto("Opel","Astra",92,1995,500);
// 21.23.- Fes un programa que et digui el model i la marca del vehicle més antic.