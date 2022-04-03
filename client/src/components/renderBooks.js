import React from 'react'
import BookCard from './bookCard'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import http from "../lib/baseAPI";
const RenderBooks = ({allBooks, setAllBooks}) =>{
    const deleteBook = (id) =>{
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this book?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    http.delete(`/books/${id}`)
                    .then(res=>{
                        const newBooks = allBooks.filter(book=>book.id!==id)
                        setAllBooks(newBooks)
                    })
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
        });
    }
    return allBooks.map((book,index)=>{
        return <BookCard key={index} book={book} initDelete={deleteBook}/>
    })
}
export default RenderBooks;