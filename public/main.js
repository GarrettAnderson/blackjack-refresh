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

const player = {
  hand: [],
  wins: 0,
  losses: 0
}

const dealer = {
  hand: [],
  wins: 0,
  losses: 0
}

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

const dealCardToPlayer = () => {
  // remove a card from the deck
  let nextCard = deck.shift()
  // put that card in the player's hand
  player.hand.push(nextCard)
}

const displayPlayerHand = () => {
  
  // remove the existing cards from ul
  document.querySelector('.playerHand').textContent = ''

  // add the list of the two card images to the dom

  const lis = player.hand.map((card) => { 
    const img = document.createElement('img')
    img.src = `images/${card.suit}_${card.rank}.png`
  
    const li = document.createElement('li')
    li.appendChild(img)
    return li
  })

  lis.forEach(li => {
    document.querySelector('.playerHand').appendChild(li)
  })
}

const displayPlayerTotal = () => {
  const playerScore = player.hand.reduce((total, card) =>{
    total += card.value
    return total
  }, 0)
  document.querySelector('.playerTotalScore').textContent = playerScore
}

const displayDealerHand = () => {
  // 
}

const dealCardToDealer = () => {
console.log(deck)
let dealerNextCard = deck.shift()
  dealer.hand.push(dealerNextCard)
}

const startGame = () => {
  // deal 2 cards to player and update the deck
  dealCardToPlayer()
  dealCardToPlayer()
  console.log(player)
  
  console.log(deck)
  // show player their cards
  // display cards as list itemes 
  displayPlayerHand()
  
  // deal 2 cards to the dealer
  dealCardToDealer()
  dealCardToDealer()
  console.log(dealer)
  console.log(deck)
  displayPlayerTotal()
  // show only 1 dealer card
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
  startGame()
}


document.addEventListener('DOMContentLoaded', main)
document.querySelector('.dealCard').addEventListener('click', dealCardToPlayer)
document.querySelector('.startGame').addEventListener('click', startGame)