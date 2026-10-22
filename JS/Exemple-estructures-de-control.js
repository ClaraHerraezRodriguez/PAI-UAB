
// //IF simple
// let hora = 1;
// let text;
// if (hora > 0 && hora < 9) {
//     text = "Bona nit!";
// }

// console.log("Hora:", hora);
// console.log("Missatge:", text);
// document.getElementById("resultat").textContent = `Hora: ${hora} — ${text}`;

// //IF ELSE
// let hora = 10;
// let text;
// if (hora > 0 && hora < 9 ) {
// text= "Bona nit!"
// }else {
// text= "Bon dia!"
// }
// console.log(text); //mostra per consola... Bon dia!

// //IF ELSE IF ELSE
// let hora = 18, text;
// if (hora > 0 && hora < 9 ) {
// text= "Bona nit!";
// }else if (hora >= 9 && hora <= 14 ) {
// text= "Bon dia!";
// }else{
// text= "Bona tarda!";
// }
// console.log(text); //mostra per consola... Bona tarda!

// //SWITCH
//  let semafor = "verd", text=""; 
// switch (semafor) {
// case "verd" :
// text = "Pots passar";
// break;
// case "taronja" :
// text = "Precaució";
// break;
// default:
// text = "T’has d’aturar!";
// }
// console.log(text); //mostra per consola... "Pots passar"

//WHILE
// let i = 2, resultat = 1;
// const valor = 5;

// while (i <= valor) {
// resultat = resultat * i;
// i++;
// }
// console.log(resultat)

// DO WHILE
// let text = "";
// let i = 1;
// do {
// text += "El número és" + i + "<br>";
// i++;
// }
// while (i < 5);
// document.write(text);

//FOR
// let text = "";
// let i;
// for (i = 1; i < 5; i++) {
// text += "El número és " + i + "<br>";
// }
// document.write(text);

//FOR AMB PREGUNTA A L'USUARI
let text = "";
const valor = Number(prompt("Introdueix un número:"));

for (let i = 1; i <= valor; i++) {
    text += "El número és " + i + "<br>";
}

document.write(text);
