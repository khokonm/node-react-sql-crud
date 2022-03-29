### You have to create the backend and frontend for library management system

#### You are allowed to use below technology to complete the task

- Node.js
- Express.js
- SQLite
- React.js
- Javascript
- material-ui/bootstrap/styled-component/css

#### Backend

- Add Book
  - method: POST
  - payload: [name, image, author, price, isbn]
- Get Book List
  - method: GET
- Get Single Book Info
  - method: GET
  - params: book_id
- Update Book Info
  - method: PUT
  - params: book_id
  - payload: same or partial of Add Book payload except image
- Update Book Image
  - method: PUT
  - params: book_id
  - payload: image
- Delete Book

  - method: DELETE
  - params: book_id

  #### Frontend

  - Show list of books(each book should be a card) with server side pagination
  - Add book form and integrate with Add book api
  - Update book form and integrate with update book api
  - Open a modal when click on book card, it will show single book info
  - There should be a icon on each book card to delete it
  - There should be a search option which will fetch books on typing bookname or author name(search should work for at least 3 characters)
