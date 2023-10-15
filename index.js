let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let start = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let startAgainEl = document.getElementById("start-again")


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Card: "

    for (let i=0; i<cards.length; i++)
        cardEl.textContent += cards[i]+" "

    if(sum<21) {
        message = "Do you want to draw a new card from the deck?"
        start = ""
    }
    else if (sum===21) {
        message = "Wohoo! You've got the BlackJack!"
        hasBlackJack = true
        start= "Congrats! You can start a new game."
    }
    else {
        isAlive = false;
        message = "You're out of the game"
        start= "Game ended. Start a new game." 
    }

    startAgainEl.textContent = start;
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor((Math.random())*13 + 1)
    //according to the rules of BlackJack,  Kings, Queens, Jacks and Tens are worth a value of 10. An Ace has the value of 11.
    
    if(randomNumber === 1)
        return 11
    else if (randomNumber > 10)
        return 10
    else 
        return randomNumber
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}