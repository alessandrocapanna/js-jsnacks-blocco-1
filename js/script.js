// // snack 1
// // creo collegamento chiedo numeri e li verifico
// var risposta = document.getElementById('on-screen');
// var numeroUno = prompt('inserisci un numero');
// while (isNaN(numeroUno)) {
//   var numeroUno = prompt('inserisci un numero');
// }
// var numeroDue = prompt('inseriscine un\' altro');
// while (isNaN(numeroDue)) {
//   var numeroUno = prompt('inseriscine un\' altro');
// }
//
// // vedo quale è maggiore e lo stampo
// if (numeroUno < numeroDue) {
//   risposta.innerHTML = numeroDue;
// }else if (numeroUno > numeroDue) {
//   risposta.innerHTML = numeroUno;
// }else {
//   risposta.innerHTML = 'i numeri sono uguali';
// }



// // snack 2
// // creo collegamento chiedo le parole e le verifico
// var risposta = document.getElementById('on-screen');
// var parolaUno = prompt('inserisci una parola');
// while (!isNaN(parolaUno)) {
//   var parolaUno = prompt('inserisci una parola');
// }
// var parolaDue = prompt('inseriscine un\' altra');
// while (!isNaN(parolaDue)) {
//   var parolaDue = prompt('inseriscine un\' altra');
// }
//
// //vedo quale è piu lunga e le stampo , prima la più corta poi la più lunga
// if (parolaUno.length > parolaDue.length) {
//   risposta.innerHTML = parolaDue + ' ' + parolaUno;
// }else if (parolaUno.length < parolaDue.length) {
//   risposta.innerHTML = parolaUno + ' ' + parolaDue;
// }else {
//   risposta.innerHTML = 'le parole hanno le stesse dimensioni';
// }



// // snack 3
// // NOTE: con ciclo for
// var stampa = document.getElementById('on-screen');
// var somma = 0;
// for (var i = 1; i <= 5; i++) {
//   var numero = prompt('inserisci un numero');
//   while (isNaN(numero)) {
//     var numero = prompt('errore inserisci un NUMERO');
//   }
//   somma = somma + parseInt(numero);
// }
// stampa.innerHTML = somma;
//
// // NOTE: con ciclo while
// var stampa = document.getElementById('on-screen');
// var i = 0;
// var somma = 0;
//
// while (i < 4) {
//   var numero = prompt('inserisci un numero');
//   while (isNaN(numero)) {
//     var numero = prompt('errore inserisci un NUMERO');
//   }
//   somma = somma + parseInt(numero);
//
//   i++;
// }
// stampa.innerHTML = somma;




// //  snack 4
// var invitati = [ 'luca', 'marco', 'alessandro', 'gianluca', 'giuseppe', 'maria'];
// var nomeUtente = prompt('inserisci il tuo nome');
// var risposta = document.getElementById('on-screen');
// var conferma = false;
//
// //controllo se c'è il nome e se c'è cambio var conferma in vero
// for (var i = 0; i < invitati.length; i++) {
//   if (invitati[i] == nomeUtente.toLowerCase()) {
//     conferma = true;
//   }
// }
//
// //stampo risposta
// if (conferma == false) {
//   risposta.innerHTML = 'vattene';
// }else {
//   risposta.innerHTML = 'bravo';
// }



// //  snack 5
// var risposta = document.getElementById('on-screen');
// var numero = prompt('inserisci un numero di 4 cifre');
// while ((isNaN(numero)) || (numero.length != 4 )) {
//   numero = prompt('inserisci un numero di 4 cifre');
// }
//
// var numeri = numero.split('');
//
//
// var somma = 0;
// for (var i = 0; i < numeri.length; i++) {
//   var somma = somma + parseInt(numeri[i]);
// }
// risposta.innerHTML = somma;




// // snack 1 ,5 giugno
// function generaNome(){
//   var nomeInvitato = arrayNomi[Math.floor(Math.random() * arrayNomi.length)] + ' ' + arrayCognome[Math.floor(Math.random() * arrayCognome.length)];
//   return nomeInvitato;
// }
//
// var arrayNomi = [ 'marco', 'franco', 'giuseppe', 'ale', 'maria'];
// var arrayCognome = [ 'rossi', 'verdi', 'aranci', 'jobs', 'scolozzi'];
// var arrayInvitati =[];
//
// generaNome();
//
// for (var i = 0; i < 3; i++) {
//   arrayInvitati.push(generaNome());
// }
// console.log(arrayInvitati);

// // snack 2 ,5 giugno
// var arrayUno = [1, 2, 3, 4, 5];
// var arrayDue = [1, 2];
//
// while (arrayUno.length !== arrayDue.length) {
//   if (arrayUno.length < arrayDue.length) {
//     arrayUno.push(Math.floor(Math.random() * 5));
//   } else if (arrayUno.length > arrayDue.length) {
//     arrayDue.push(Math.floor(Math.random() * 5));
//   }
// }
// console.log(arrayDue);

// // snack 3 ,5 giugno
// var rosso = document.getElementById('rosso');
// var verde = document.getElementById('verde');
// var numeri = [1,2,3,4,5,7,8,9,10,11,12];
// for (var i = 0; i < numeri.length; i++) {
//   if (numeri[i] % 2 == 0 ) {
//     verde.innerHTML += '<span>' + numeri[i] + '</span> ';
//   }else if (numeri[i] % 2 !== 0) {
//     rosso.innerHTML += '<span>' + numeri[i] + '</span> ';
//   }
// }
