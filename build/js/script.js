let lemurKinds = ["Карликовые", "Руконожковые", "Индриевые"];
let lemursList = document.querySelector(".lemurs-list");
let showTotal = document.querySelector(".lemur-count");
let mostPopularKind = document.querySelector(".lemur-winner");
let loadItemsButton = document.querySelector(".lemurs-button");
let itemsNumber = 20;
const MAX_NUMBER = 1000;
const MIN_NUMBER = 1;

let getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

let createRandomElements = function () {
	let totalNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
	showTotal.innerHTML = "Общее количество лемуров: " + totalNumber;

	let fragment = [];
	for (let i = 0; i < totalNumber; i++) {
		let lemurKind = document.createElement("li");
		lemurKind.classList.add("lemur-kind");
		lemurKind.innerHTML = lemurKinds[getRandomInt(0, lemurKinds.length)];
		fragment.push(lemurKind);
	}
	let initialOutput = fragment.slice(0, 20);
	initialOutput.forEach( function (lemur) {
		lemursList.appendChild(lemur);
	})
  loadItemsButton.addEventListener('click', function () {
	  for (var j = 0; j < itemsNumber; j++) {
	    itemsNumber++;
	    if (totalNumber > itemsNumber) {
	      if (itemsNumber % 20 !== 0) {
	        lemursList.appendChild(fragment[itemsNumber-1]);
	      } else {
	      	break;
	      }
	    } else {
	      loadItemsButton.classList.add('hidden');
	    }
	  }
	});
}

let findMostPopular = function (arr) {
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}

let chooseWinner = function () {
	createRandomElements();
	let createdElements = document.querySelectorAll(".lemur-kind");
	let createdLemurs = [];
	createdElements.forEach(function (item) {
		createdLemurs.push(item.innerHTML);
	})
	mostPopularKind.innerHTML = "Самый популярный вид лемуров - " + findMostPopular(createdLemurs);
}

chooseWinner();

