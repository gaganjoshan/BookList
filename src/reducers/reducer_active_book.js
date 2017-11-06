//state here is not application state but the state of this reducer i.e. books
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':return action.payload
  }
  return state;
}
