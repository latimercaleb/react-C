import Book from "./Book";
function BookShelf({books}) {
    return (
        <div className="book-list">
            <ol>
                {books.map(bk => {
                    return (<li key={bk.id}>
                        <Book book={bk}></Book>
                    </li>)
                })}
            </ol>
        </div>
    );
}

export default BookShelf;