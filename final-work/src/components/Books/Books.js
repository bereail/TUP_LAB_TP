import "./Books.css";
import BookItems from "../BookItem/BookItems";


const Books = ({books, filterYear}) => {
    if (books.length === 0) {
        return <></>
    }

    const booksMapped = books
    .filter((book) => book.dateRead.getFullYear().toString() === filterYear)
    .map((book) => (
        <BookItems 
            key={book.id}
            bookTitle={book.title}
            bookDateRead={book.dateRead}
            bookPagesCount={book.pageCount}
        />
    ));

    return (
        <div className="books">
            {booksMapped.length === 0 ? (
                <p>No hay libros disponibkes</p>
            ) : (
                booksMapped
            )}
        </div>
    )
}

export default Books;