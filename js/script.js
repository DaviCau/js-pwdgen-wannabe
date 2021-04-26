// Chiedi all'utente il suo nome
var nome = prompt("Come ti chiami?");
console.log(nome);

// Chiedi il suo cognome
var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

// Chiedi il suo colore preferito
var colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

var pwd = nome + cognome + colore + 21;
console.log(pwd);

document.getElementById("password").innerHTML = pwd;