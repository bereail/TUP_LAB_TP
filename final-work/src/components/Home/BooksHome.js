import React from 'react';
import BookItems from '../BookItem/BookItems';
import NavBar from '../NavBar/NavBar';

const BooksHome = () => {
  const hardcoreBooks = [
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
  
  return (
    <div>
      <NavBar/>
      <BookItems
        title = {hardcoreBooks[0].title}
        author = {hardcoreBooks[0].author}
        date = {hardcoreBooks[0].date}
        pages = {hardcoreBooks[0].pages}
      />
      <BookItems
        title = {hardcoreBooks[1].title}
        author = {hardcoreBooks[1].author}
        date = {hardcoreBooks[1].date}
        pages = {hardcoreBooks[1].pages}
      />
      <BookItems
        title = {hardcoreBooks[2].title}
        author = {hardcoreBooks[2].author}
        date = {hardcoreBooks[2].date}
        pages = {hardcoreBooks[2].pages}
      />
      <BookItems
        title = {hardcoreBooks[3].title}
        author = {hardcoreBooks[3].author}
        date = {hardcoreBooks[3].date}
        pages = {hardcoreBooks[3].pages}
      />
    </div>

  );
}


export default BooksHome;
