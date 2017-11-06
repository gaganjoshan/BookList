import React, {Component} from 'react';
import { connect } from 'react-redux';
import { SelectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
        key={book.title}
        className="list-group-item"
        onClick={()=>this.props.selectBook(book)}>
        {book.title}
        </li>
      )
    })
  }
}

//Very important function to glue together the react-app container to the redux state
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook:SelectBook},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
