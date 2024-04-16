import Book from "./Book";
function BookShelf({books, onDelete}) {
    return (
        <div className="book-list">
            <ol>
                {books.map(bk => {
                    return (<li key={bk.id}>
                        <Book book={bk} deleteBook={onDelete}></Book>
                    </li>)
                })}
            </ol>
        </div>
    );
}

export default BookShelf;