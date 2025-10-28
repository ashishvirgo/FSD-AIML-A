import Book from './Book'
const books=[{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6kiJrlxnOvKHA-tVGAFxrXc6N4XJjco7ORRV2GK_Ylwdy1t4mgXCWZwW-w&s",title:"Chemistry",price: 345},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",title:"Mathematics",price: 645},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf11D1bzaUppC6DjV12qXUwmtW260qNjDEXFE4TXRpvTO_clo56akU5Mg&s",title:"Physics",price: 785}
]
function App(){   
     return (
        <div className="booklist">
            {books.map((b,i)=>(
                <Book key= {i} book={b}/>
            ))}
        </div>
     )
    }
export default App;    