import React from 'react'
import Book from './Book'

function RenderingLists() {

    const bookList = [
        'To kill a mockingbird',
        'Bla',
        'Blablabla'
    ]
    const books = [
        {
        title: 'To kill a mockingbird',
        author: 'Kill forfatter',
        pages: 234
        },
        {
        title: 'Bla',
        author: 'Bla forfatter',
        pages: 123
        },
        {
        title: 'Blablabla',
        author: 'Blablabla Forfatter',
        pages: 123411
        }
        
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return(
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author} </p>
                        <p>{book.pages} </p>
                    </div>
                )
            })
        }
        <hr />
        {
            books.map(book => {
                return <Book key={book.title} book={book} />
            })
        }
    </div>
  )
}

export default RenderingLists