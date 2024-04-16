import Book from "./Book";
function BookShelf({books, onDelete, onEdit}) {
    return (
        <div className="book-list">
            <ol>
                {books.map(bk => {
                    return (<li key={bk.id}>
                        <Book book={bk} deleteBook={onDelete} editBook={onEdit}></Book>
                    </li>)
                })}
            </ol>
        </div>
    );
}

export default BookShelf;