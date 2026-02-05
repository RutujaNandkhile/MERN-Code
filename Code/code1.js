const calci=(a,b) =>{
    console.log(a+b)
}

const Addition=(callback,x,y)=>{
   result= callback(20,30) +(x+y)
    console.log("addtiona funtion",result);
}
Addition(calci, 100, 200);;