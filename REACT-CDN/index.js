function Book(book){
const image=React.createElement("img",{
             src: book.image,
             width: 250,
             height: 250,
             alt: "Physics Book Image"
},null);
const h4=React.createElement("h4",null,book.title);
const h3=React.createElement("h3",null,book.price);
const bt=React.createElement("button",null,"Add To cart");
const child=React.createElement("div",{className: "card"},image,h4,h3,bt);
return (child);
}
const books=[{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6kiJrlxnOvKHA-tVGAFxrXc6N4XJjco7ORRV2GK_Ylwdy1t4mgXCWZwW-w&s",title:"Chemistry",price: 345},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s",title:"Mathematics",price: 645},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf11D1bzaUppC6DjV12qXUwmtW260qNjDEXFE4TXRpvTO_clo56akU5Mg&s",title:"Physics",price: 785}
]
   const bookele=books.map((b,i)=>(
    React.createElement(Book,{key:{i},
        src: b.image,
        title: b.title,
        price: b.price},null)));

   const booklist=React.createElement("div",{className: "booklist"},bookele);
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(booklist);
// ReactDOM.render(React.createElement(Book),parent);