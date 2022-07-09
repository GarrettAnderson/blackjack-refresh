const suits = ['hearts', 'diamonds', 'clubs', 'spades']
const ranks = [{name: 'ace', value: 11}, '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'king', 'queen']
let deck = []

// let deckOfCardsURL = 'https://www.deckofcardsapi.com/api/deck/new/'

// let deckOfCards = fetch(deckOfCardsURL)
//     .then(response => response.json())
//     .then(data => {
//       return data
//     })
//     // .then(() => console.log(deckOfCards))
// console.log(deckOfCards)



const main = () => {
  console.log('shuffle the cards')

  for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < ranks.length; j++) {

      const card = {
        suit: suits[i],
        rank: ranks[j]
      }
      console.log(card)
      deck.push(card)

    }
  }
  console.log(deck)

// Fisher-Yates shuffle


  for (let i = deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    console.log(j) 

    // swapping
    const cardAtI = deck[i]
    const cardAtJ = deck[j]
    deck[i] = cardAtJ
    deck[j] = cardAtI 
  }
  console.log(deck)
}

const dealCard = () => {
  //remove the 1st card from our deck

  const drawnCard = deck.shift()
  console.log(drawnCard)
  // add to the player hand

  let cardElement = document.createElement('li')
  cardElement.textContent = drawnCard.rank + " of " + drawnCard.suit
  console.log(cardElement)

  cardElement.classList.add(drawnCard.suit.toLowerCase())

  // update the UI
  document.querySelector('.playerHand').appendChild(cardElement)
}


document.addEventListener('DOMContentLoaded', main)
document.querySelector('.dealCard').addEventListener('click', dealCard)
