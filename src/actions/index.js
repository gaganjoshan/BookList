export function SelectBook(book){
  //SelectBook is an ActionCreator that needs to return an action in object
  //with a type property
  return {
    type:'BOOK_SELECTED',
    payload:book
  }
}
