
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

//SWITCH
 let semafor = "verd", text=""; 
switch (semafor) {
case "verd" :
text = "Pots passar";
break;
case "taronja" :
text = "Precaució";
break;
default:
text = "T’has d’aturar!";
}
console.log(text); //mostra per consola... "Pots passar"