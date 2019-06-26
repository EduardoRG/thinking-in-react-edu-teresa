import React from 'react'

import BookFilter from './BookFilter'
import BookList from './BookList'
import books from '../mocks/books'

export default class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: books,
      selectedFilter: 'All',
    }
  }

  selectFilter = filter => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === 'All'
          ? books
          : books.filter(book => book.category === filter)
    })
  }

  render() {
    return (
      <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <BookFilter
            selectedFilter={this.state.selectedFilter}
            selectFilter={this.selectFilter}
          />
          <BookList books={this.state.books} />
        </div>
      </section>
    );
  }
}