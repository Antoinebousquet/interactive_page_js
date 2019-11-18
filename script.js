// // Fonctionnalité 1 :
// var footerToFind = document.getElementsByTagName("footer")[0];

// var footerFunction = function() {
// 	console.log("clique");
// };

// footerToFind.addEventListener("click", footerFunction);

// // Fonctionnalité 1-bis :
// var number = 0;
// var footerToFind = document.getElementsByTagName("footer")[0];
// console.log(footerToFind);


// var footerFunction = function() {
// 	number = number + 1;
// 	console.log("clique numéro " + number);
// };

// footerToFind.addEventListener("click", footerFunction);

// // Fonctionnalité 2 :
// var navbarPage = document.getElementsByTagName("button")[0];
// console.log(navbarPage);

// var navbarchange = function() {
// 	if (document.getElementById("navbarHeader").className == "collapse bg-dark") {
// 		document.getElementById("navbarHeader").className = "bg-dark";
// 	}
// 	else if (document.getElementById("navbarHeader").className == "bg-dark") {
// 		document.getElementById("navbarHeader").className = "collapse bg-dark";
// 	};
// };

// navbarPage.addEventListener("click", navbarchange);


// // Fonctionnalité 3 :
// var firstButton = document.getElementsByClassName("btn-outline-secondary")[0];
// console.log(firstButton)

// var editButton = function() {
// 	this.style.color = 'red';
// };

// firstButton.addEventListener("click", editButton);

// // Fonctionnalité 4 :
// var secondButton = document.getElementsByClassName("btn-outline-secondary")[1];
// console.log(secondButton)

// var editButton2 = function() {
// 	if (this.style.color === 'green') {
// 		this.style.color = '';
// 	}
// 	else {
// 		this.style.color = 'green';
// 	};
// };

// secondButton.addEventListener("click", editButton2);

// Fonctionnalité 5 :
var nuclearButton = document.getElementsByClassName("container")[0];
var linkCss = document.getElementsByTagName("link")[0];
console.log(nuclearButton);

var touchNavbar = function() {
	linkCss.href = '#';
};

nuclearButton.addEventListener("click", touchNavbar);



// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire". 
// Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : 
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et
//  la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS.
//  Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

























