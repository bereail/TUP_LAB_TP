import React from 'react';
import BookItems from '../BookItem/BookItems';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const BooksHome = () => {
  const hardcoreBooks = [
    { 
      id: 1,
      title: 'Padre Rico, Padre Pobre', 
      author: 'Robert',
      dateRead: new Date( 2021 , 8 , 12 ),
      pageCount: 410,
    },
    {
      id: 2,
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date( 2020 , 6 , 11 ),
      pageCount: 197,
    },
    {
      id: 3,
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date( 2021 , 5 , 9 ),
      pageCount: 256,
    },
    {
      id: 4,
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date( 2020 , 3 , 22 ),
      pageCount: 352,
    },
  ];
  
  return (
    
    <div>
      <NavBar />
      <Header />
      <BookItems
        bookTitle = {hardcoreBooks[0].title}
        author = {hardcoreBooks[0].author}
        dateRead = {hardcoreBooks[0].dateRead}
        pagesCount = {hardcoreBooks[0].pagesCount}
      />
      <BookItems
        bookTitle = {hardcoreBooks[1].title}
        author = {hardcoreBooks[1].author}
        dateRead = {hardcoreBooks[1].dateRead}
        pagesCount = {hardcoreBooks[1].pagesCount}
      />
      <BookItems
        bookTitle = {hardcoreBooks[2].title}
        author = {hardcoreBooks[2].author}
        dateRead = {hardcoreBooks[2].dateRead}
        pagesCount = {hardcoreBooks[2].pagesCount}
      />
      <BookItems
        bookTitle = {hardcoreBooks[3].title}
        author = {hardcoreBooks[3].author}
        dateRead = {hardcoreBooks[3].dateRead}
        pagesCount = {hardcoreBooks[3].pagesCount}
      />
      <Footer />
    </div>

  );
}


export default BooksHome;
