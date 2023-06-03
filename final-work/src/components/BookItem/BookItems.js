import React, { useState } from 'react';
import './BookItems.css';

import Card from '../Card/Card';
import DateRead from '../DateRead/DateRead';

const BookItems =  ({title, author, dateRead, pagesCount}) => {

    const [bookTitle, setBookTitle] = useState(title);

    const changeTitleHandler = () => {
        setBookTitle("Actualizado");
        console.log(bookTitle);
    }

    return (
        <Card>
            <h2>{bookTitle}</h2>
            <h3>{author}</h3>
            <DateRead bookDateRead={dateRead}/>
            <p>{pagesCount}</p>
            <button onClick={changeTitleHandler}>Cambiar título</button>
        </Card>
    );
};

export default BookItems;
