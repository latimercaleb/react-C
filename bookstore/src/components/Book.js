function Book({book}) {
    return(<div>
        <p className="book-show">Title: {book.title} with ID: {book.id}</p>
    </div>)
}

export default Book;