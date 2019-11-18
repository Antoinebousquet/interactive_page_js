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
// var firstCard = document.getElementsByClassName("col-md-4")[0];
// var firstCardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

// var onFirstCardButtonClick = function() {
// 	firstCard.style.color = "red";
// };

// firstCardButton.addEventListener("click", onFirstCardButtonClick);

// // Fonctionnalité 4 :
// var secondCard = document.getElementsByClassName("col-md-4")[1];
// var secondCardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

// var onSecondCardButtonClick = function() {
// 	if (secondCard.style.color === 'green') {
// 		secondCard.style.color = '' ;
// 	}
// 	else if (secondCard.style.color === '') {
// 		secondCard.style.color = 'green'
// 	};
// };

// secondCardButton.addEventListener("click", onSecondCardButtonClick);

// // Fonctionnalité 5 :
// var nuclearButton = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
// var wholePage = document
// var linkCss = document.getElementsByTagName("link")[0];
// console.log(nuclearButton);

// var touchNavbar = function() {
// 	if (linkCss.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') {
// 		linkCss.href = '#';
// 	}
// 	else {
// 		linkCss.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
// 	};
// };

// nuclearButton.addEventListener("dblclick", touchNavbar);
// // addEventListener("dblclick", touchNavbar);


// // Fonctionnalité 5, méthode alternative :
// var navbarClass = document.getElementsByTagName("header")[0];
// var bootstrapLink = document.getElementsByTagName("link")[0];
// var onNavbarClassClick = function() {

// 	if (bootstrapLink.disabled == false){
// 		bootstrapLink.disabled = true
// 	}

// 	else if (bootstrapLink.disabled == true){
// 		bootstrapLink.disabled = false
// 	}
// };

// navbarClass.addEventListener("click", onNavbarClassClick);

// Fonctionnalité 6 :
// var oneCard = document.getElementsByClassName("col-md-4")[0];
// var oneCardViewButton = document.getElementsByClassName("btn btn-sm btn-success")[0];
// var oneCardText = document.getElementsByClassName("card-text")[0];
// var oneCardImage = document.getElementsByClassName("card-img-top")[0];
// var onOneCardViewButtonMouseOver = function() {
// 	if (oneCardText.className == "card-text"){
// 		oneCardText.className = "card-text collapse" ;
// 		oneCardImage.style.width = '20%'
// 	}
// 	else if (oneCardText.className == "card-text collapse"){
// 		oneCardText.className = "card-text" ;
// 		oneCardImage.className = "card-img-top"
// 		oneCardImage.style.width = '100%'
// 	};
// };

// oneCardViewButton.addEventListener("mouseover", onOneCardViewButtonMouseOver);



var oneCard = document.getElementsByClassName("col-md-4")[0];
var oneCardViewButton = document.getElementsByClassName("btn btn-sm btn-success");
var oneCardText = document.getElementsByClassName("card-text")[0];
var oneCardImage = document.getElementsByClassName("card-img-top")[0];
// var onOneCardViewButtonMouseOver = function() {
// 	if (oneCardText.className == "card-text"){
// 		oneCardText.className = "card-text collapse" ;
// 		oneCardImage.style.width = '20%'
// 	}
// 	else if (oneCardText.className == "card-text collapse"){
// 		oneCardText.className = "card-text" ;
// 		oneCardImage.className = "card-img-top"
// 		oneCardImage.style.width = '100%'
// 	};
// };


	for (let i = 0; i < oneCardViewButton.length; i++) {
		if (oneCardViewButton[i].addEventListener("mouseover", onOneCardViewButtonMouseOver) == true) {
		oneCardText[i].className = "card-text collapse" ;
		oneCardImage[i].style.width = '20%'
		}
		
	};




// var cardText = document.getElementsByClassName("card-body");
// var cardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary");

// var onCardCollapse = function(cardText) {
// 	for(let index in cardText) {
// 		console.log("test");
// 		cardText.className = "";
// 	};
// };

// cardButton[0].addEventListener("click", onCardCollapse(cardText));





















