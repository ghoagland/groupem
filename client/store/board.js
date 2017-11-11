/*----------ACTION TYPES----------*/
const GET_NEW_BOARD = 'GET_NEW_BOARD'

/*----------ACTION CREATORS----------*/
const getNewBoard = (board) => ({type: GET_NEW_BOARD, board})

/*----------THUNK CREATORS/HELPER FUNCTIONS ----------*/
export function generateBoard(numCards = 9, currentBoard = []) {
  return function thunk (dispatch) {
    for (let i = 0; i < numCards - 1; i++) {
      currentBoard.push(generateRandomCard());
    }
    // ensures there is at least one set
    const newBoard = generateLastCard(currentBoard);
    dispatch(getNewBoard(newBoard));
    return newBoard
  }
}

function generateRandomNum(min = 0, max = 2) {
  return (Math.round((max - min) * Math.random()) + min)
}

function generateRandomCard() {
  const card = []
  for (let i = 0; i < 4; i++) {
    card.push(generateRandomNum());
  }
  console.log("card", card);
  return card;
}

function generateLastCard(currentBoard) {
  if (currentBoard.length < 2) {
    throw new Error ('Board must have at least two cards');
  }
  //chooses two random cards from the current board
  const idx1 = generateRandomNum(0, (currentBoard.length - 1));
  let idx2 = generateRandomNum(0, (currentBoard.length - 1));
  while (idx1 === idx2) {
    idx2 = generateRandomNum(0, (currentBoard.length - 1));
  }
  const card1 = currentBoard[idx1];
  const card2 = currentBoard[idx2];

  //generates a card to finish the set
  const newCard = completeSet(card1, card2);

  //inserts the card at a random location in the board
  const insertIdx = generateRandomNum(0, currentBoard.length - 1);
  return [...currentBoard.slice(0, insertIdx), newCard, ...currentBoard.slice(insertIdx)];
}

function completeSet(card1, card2) {
  const newCard = []
  card1.forEach((card1Prop, idx) => {
    const card2Prop = card2[idx];
    if (card1Prop === card2Prop) {
      newCard.push(card1Prop)
    } else {
      newCard.push((((card1Prop + card2Prop) * 2) % 3 + 3) % 3)
    }
  })
  return newCard;
}
/*----------REDUCER----------*/

export default function reducer (initialState = [], action) {
  switch (action.type) {
    case GET_NEW_BOARD:
      return action.board;
    default:
      return initialState
  }
}
