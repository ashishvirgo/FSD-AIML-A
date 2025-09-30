const username='ashishvirgo';
const url=`https://api.github.com/users/${username}`;
const resp=fetch(url);
    //   resp.then((res)=>{
    //        return res.json();
    //   })
      resp.then((data)=>{
        console.log("Data:",data);
      })
      .catch((err)=>{
       console.log("Error:",err.message);
      })
      .finally(()=>{
        console.log('Inside Finally block')
      })