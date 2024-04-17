import Book from "./Book";
import { useContext } from "react";
import LibraryContext from "../context/books";
function BookShelf() {
    const {bookData, message} = useContext(LibraryContext);
    return (
        <div className="book-list">
            <h5>{message}</h5>
            <ol>
                {bookData.map(bk => {
                    return (<li key={bk.id}>
                        <Book book={bk}></Book>
                    </li>)
                })}
            </ol>
        </div>
    );
}

export default BookShelf;