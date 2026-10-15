//2.1 Què passaria si féssim aquestes declaracions de variables?
//a
// var a = 1;
// var a = 2;
// console.log(a); //es queda amb el segon

//b
// var a = 1;
// let a = 2;
// console.log(a); //dona error perque la variable està declarada dues vegades

//c
// let a = 1;
// var a = 2;
// console.log(a); //dona error perque la variable està declarada dues vegades

//d
// let a = 1;
// let a = 2;
// console.log(a); //let no permet tenir dues variables iguals

//3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació
//com si fos independent.
// let a = 5; //correcte
// let b = 5z; //incorrecte, hauria d'estar entre cometes
// let c = "c"; //correcte
// let c = "c'; //incorrecte les cometes haurien de ser les mateixes
// let c = "c'c'c"; // correcte
// let c = "c'c"c'; //incorrecte, haurein de ser unes cometes dins les altres no alternades entre elles
// let n = 35; // correcte
// let n = 35va; // incorrecte, hauria d'estar entre cometes
//console.log(a);

//3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
// línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
// Fixa't en l'error que et dona el navegador.
// let a = 5;
// let b = c;
// c = 7; // estem agafant el valor de c quan encara no s'ha declarat, hauria d'estar creada abans que la b.

// 3.3.- De quins tipus són les dades que assignem a aquestes variables?
// let a = 55; //numèrica
// let b = 55.5; //decimal
// let c = "Hola"; //string
// let d = 'Hola'; //string
// let e = true; //booleà

//4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// let a = 25;
// let b = 15 + a;
// let c = b * 2;
// console.log(a,b,c); //25 40 80

//4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// let a = 10;
// let b = 20;
// let c = 5;
// a = a + 3;
// b = b + 4 - a;
// c = a + b + c;
// a = a + c;
// b = 4;
// c = c + 3 - b + 2;
// console.log(a,b,c); //42 4 30

// 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// Escriu-los en un paper i desprès executa el codi. Et donen el mateix?
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10;
// b = b + 5 - c;
// c = c + 4 + b;
// d = d + b + a;
// a = a + 1;
// b = b + c;
// c = b + c;
// d = b + b;
// console.log(a,b,c,d) //16 35 62 70 sí em dona el mateix

// 4.4.- Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// sobre paper i desprès prova a l’ordinador.
// let a = 10
// let b = 20
// let c = 5
// a = a + 3 // Fixat en aquesta instrucció.
// Quin valor tenia la variable a abans
// d’executar-se la instrucció?
// I desprès?
// console.log(a); //13
// b = b + 4 - a 
// console.log(b); //11
// c = a + b + c
// ç console.log(c); //18
// a = a + c
// console.log(a); 
// b = 4
// console.log(b);
// c = c + 3 - b + 2
// console.log(c);

// 4.5. - Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// sobre paper i desprès prova a l’ordinador.
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10;
// b = b + 5 - c;
// c = c + 4 + b;
// d = d + b + a;
// console.log(a,b,c,d); //15 8 27 45
// a = a + 1;
// b = b + c;
// c = b + c;6
// d = b + b;
// console.log(a,b,c,d); //6 33 48 66

// 4.6. - Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10;
// let b = 5;
// let c = a / b;
// let d = a * b;
// let e = a % 3;
// console.log (c,d,e); //2 50 1

// 4.7.- Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10;
// let b = 5;
// let c = a * b * 3;
// let d = a / 3;
// console.log(c,d); //150 3.333

//5.1.- Què s’escriurà a la consola si executem aquest codi?
// let a = 5;
// a++;
// console.log(a); //6
// let b = a++;
// console.log(a,b); // 7 6

// 5.2.- Què s’escriurà a la consola si executem aquest codi?
// let a = 5;
// ++a;
// console.log(a); // 6
// let b = ++a;
// console.log(a,b); // 7 7

// 5.3.- Observa aquestes operacions, prova a executar-les i explica el perquè dels resultats
// obtinguts.
// let a = 5;
// let b = a++;
// let c = a--;
// console.log(a,b,c); // 5 5 6 perque es queda la variable i despres es passa a el següent o anterior numero
// a = 5;
// b = ++a;
// c = --a;
// console.log(a,b,c); // 5 6 5 perque  primer suma 1 a la variable i després es declara
// a = 5;
// let d = 25 + a++;
// a = 5;
// let e = 25 + ++a;
// console.log(d,e); // 30 31 un suma 5 i l'altre suma 6 a 25


// 12.1.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt() escrigui a la consola el doble, el triple i el quadrat del número llegit.
// 12.2.- Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i
// 80 metres de costat. Modifica el programa perquè els valors dels costats es demanin amb
// prompt().
// 12.3.- Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable
// i escrigui a la consola, la longitud de la circumferència i l’àrea del cercle. Fes servir una
// constant per guardar el número pi (3,141593) a) Longitud de la circumferència: 2 * 3.1416 *
// ràdio b) Àrea del cercle: 3.1416 * radio^2
// 12.4.- Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre
// d’hores treballades (160 hores) i el preu per hora treballada (12€). Prova amb altres valors.
// 12.5.- Fes un programa en JavaScript que, donades dues variables x i y, intercanviï els seus
// valores de manera que x acabi tenint el valor de y i y acabi tenint el valor de x. Així, si
// inicialment tenim: let x = "Hola", y = 3; Quan el programa acabi, x haurà de guardar un 3 i y
// un “Hola”.

// 12.6.- Fes un programa que escrigui a la consola el cub d’un número llegit per teclat (amb el
// prompt())
let cub = prompt("Introdueix un nombre");
console.log (cub*cub*cub)

// 12.7.- Escriu un programa d’una sola línia que faci que aparegui a la pantalla un alert que
// digui “Hello World”.

// let alerta = alert("Hello World");
// console.log(alerta);

//12.8.- Escriu un programa de dues línies que demani el nom de l’usuari amb un prompt() i
//escrigui un text a la consola que digui “Hola nomUsuari”

// let usuari = prompt("com et dius?");
// console.log ("Hola", usuari);

