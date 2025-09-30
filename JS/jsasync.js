function register(cb){
    setTimeout(()=>{
    console.log("register successfuly")
    cb();
    },1000)
    
}
function sendEmail(cb){
    setTimeout(()=>{
     console.log("send email")
     cb();
    },2000)
    
}
function login(cb){
    setTimeout(()=>{
    console.log("login successfuly");
    cb();
    },1000)
}
    
function getData(cb){
    setTimeout(function (){
     console.log("fetch data successfuly");
     cb();
    },8000)
    
}
function displayData(){
    setTimeout(()=>{
        console.log("display data successfuly")
    },3000)
    
}

//callback hell
register(()=>{
   sendEmail(()=>{
      login(()=>{
           getData(()=>{
               displayData();
           });
      });
   });
});



