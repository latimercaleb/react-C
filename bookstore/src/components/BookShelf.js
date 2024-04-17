import Book from "./Book";
import { useContext } from "react";
import LibraryContext from "../context/books";
function BookShelf({books, onDelete, onEdit}) {
    const message = useContext(LibraryContext);
    return (
        <div className="book-list">
            <h5>{message}</h5>
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