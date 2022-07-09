const suits = ['hearts', 'diamonds', 'clubs', 'spades']
const ranks = [
  {name: 'ace', value: 11}, 
  {name: '2', value: 2}, 
  {name: '3', value: 3},
  {name: '4', value: 4},
  {name: '5', value: 5},
  {name: '6', value: 6},
  {name: '7', value: 7},
  {name: '8', value: 8},
  {name: '9', value: 9},
  {name: '10', value: 10},
  {name: 'jack', value: 10},
  {name: 'queen', value: 10},
  {name: 'king', value: 10},
]
let deck = []

// let deckOfCardsURL = 'https://www.deckofcardsapi.com/api/deck/new/'

// let deckOfCards = fetch(deckOfCardsURL)
//     .then(response => response.json())
//     .then(data => {
//       return data
//     })
//     // .then(() => console.log(deckOfCards))
// console.log(deckOfCards)


const createDeck = () => {
  console.log('create deck of cards')

  // for(let i = 0; i < suits.length; i++) {
  //   for(let j = 0; j < ranks.length; j++) {

  //     const card = {
  //       suit: suits[i],
  //       rank: ranks[j]
  //     }
  //     console.log(card)
  //     deck.push(card)

  //   }
  // }
  // console.log(deck)

    suits.forEach(suit => {
      ranks.forEach(rank => {
        const card = {
          value: rank.value,
          suit: suit,
          rank: rank.name,
          imageUrl: `${suit}_${rank.name}.png`
        }
        deck.push(card)
      })
    })
    console.log(deck)
  }

// Fisher-Yates shuffle

const shuffleDeck = () => {
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

const main = () => {
  createDeck()
  shuffleDeck()
}


document.addEventListener('DOMContentLoaded', main)
document.querySelector('.dealCard').addEventListener('click', dealCard)
