function updateRemoteStudents(arr){
    if(arr.length===0){
        return []
    }

    // newArr=arr.map(({...x})=>x)

    // for(let i=0;i<newArr.length;i++){

    //     if(!newArr[i].location){
    //         newArr[i].location="remote"
    //     }
    // }
    let newArr=arr.map(mapFunc)

  function mapFunc({...x}){
    if (!x.location){
      x.location="remote"
      
    }return x
  }
    
    return newArr

}



module.exports=updateRemoteStudents