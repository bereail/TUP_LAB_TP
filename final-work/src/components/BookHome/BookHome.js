import React, { useState } from "react";

const DUMMY_BOOKS = [
      { 
        id: 1,
        title: 'Padre Rico, Padre Pobre', 
        author: 'Robert',
        date: new Date( 2021 , 8 , 12 ),
        pageCount: 410,
      },
      {
        id: 2,
        title: "Todos los fuegos el fuego",
        author: "Julio Cortazar",
        date: new Date( 2020 , 6 , 11 ),
        pageCount: 197,
      },
      {
        id: 3,
        title: "Asesinato en el Orient Express",
        author: "Agatha Christie",
        date: new Date( 2021 , 5 , 9 ),
        pageCount: 256,
      },
      {
        id: 4,
        title: "Las dos torres",
        author: "J.R.R Tolkien",
        date: new Date( 2020 , 3 , 22 ),
        pageCount: 352,
      },
    ];

    const Dashboard = () => {
      const [books, setBooks] = useState(DUMMY_BOOKS);

      const addedBookHandler = (bookData) => {
        const newBooksArray = [bookData, ...books];
        setBooks(newBooksArray);
      };

      return (
        <>
          <h2>Books Champion App</h2>
          <NewBook onBookAdded={addedBookHandler} />
          <Books books={books} />
        </>
      )

    }



export default Dashboard;