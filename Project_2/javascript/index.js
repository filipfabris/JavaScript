//A is only 11

let firstCard
let secondCard
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerName = "Per"

let player = {
	name: "Per",
	chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
	let randomNumber =  Math.floor(Math.random()*13) + 1
	if(randomNumber > 10){
		return 10
	}if(randomNumber == 1){
		return 11
	}
	return randomNumber

}

let start = false
function startGame(){
	if(!start){
		firstCard = getRandomCard()
		secondCard = getRandomCard()
		cards.push(firstCard)
		cards.push(secondCard)
		sum = cards[0] + cards[1]
		isAlive = true
		start = true;
		renderGame()
	}
}

function renderGame(){

	cardsEl.textContent = "Cards: "
	for(let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + " "
	}

	sumEl.textContent = "Sum: " + sum
	if (sum <= 20) {
    	message = "Do you want to draw a new card?"
	} else if (sum === 21) {
    	message = "Wohoo! You've got Blackjack!"
    	hasBlackJack = true
	} else {
    	message = "You're out of the game!"
    	isAlive = false
	}
	messageEL.textContent = message
}


function newCard(){
	console.log("Drawing a new card from deck!")

	if(isAlive == true && hasBlackJack == false){
		let card = getRandomCard()
		sum += card
		cards.push(card)
		console.log(cards)
		renderGame()
	}
}

function reset(){
	cards = []
	cardsEl.textContent = "Cards: "
	sum = 0
	sumEl.textContent = "Sum: " + sum
	start = false

}


