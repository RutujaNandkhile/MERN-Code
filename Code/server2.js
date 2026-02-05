const http=require('http')
const app=http.createServer((req,res)=>{
    
    res.write("<h1>Node JS Server</h1>")
    res.end('response end')


})

const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`Server Is running...http://${HOST}:${PORT}`)
})