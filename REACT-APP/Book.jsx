function Book({book}){
return (
    <div className="card">
<img src={book.image} width="200" height="200" alt="Book Image"/> 
<h3>Title: {book.title}</h3>
<h4>Price: {book.price}</h4>
    </div>
)
}
export default Book;