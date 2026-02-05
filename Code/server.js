const http= require("http")
const app = http.createServer((req, res)=>{
    for(let i=0; i<=100; i++){
        res.write(`<div style=height:${i}px; width:${1}px; margin:10px; background-color:orange; display:inline-block></div>`)


    }
   
    
    res.end();

})

const PORT=3000
const HOST= `127.0.0.1`
app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on http:// ${HOST}:${PORT}`)
})
