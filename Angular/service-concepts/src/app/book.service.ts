export class BookService {
  books = [
    {
      name: 'Book1',
      author: 'Author1'
    },
    {
      name: 'Book2',
      author: 'Author2'
    },
    {
      name: 'Book3',
      author: 'Author3'
    },
    {
      name: 'Book4',
      author: 'Author4'
    }
  ]
  getBooks() {
    return this.books.slice();
  }
}