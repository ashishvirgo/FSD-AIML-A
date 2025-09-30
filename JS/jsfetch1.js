const url="https://dummyjson.com/users?limit=2";
// const pr=fetch(url);
//      pr.then(function(res){
//                return res.json();
//      })
//      .then((data)=>{
//       console.log('Data=',data);
//      })
//      .catch((err)=>{
//        console.log('Error:',err);
//      })
//      .finally(()=>{
//         console.log('Inside Finally')
//      })
const f1=async()=>{
    try{
    const res=await fetch(url);
    const data=await res.json();
    console.log('Data',data);
    }
    catch(err){
        console.error('Error',err.message);
    }
}
f1();