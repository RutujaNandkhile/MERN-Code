// Server create

// used to create server

const http=require('http')
const { request } = require('http')
const app=http.createServer((request,response)=>{
    // this method helps to create to write responsive
    //call multiple times
    // inside data must be string

    response.write("hello welcome To node js...")
   response.end()

})
const PORT=1000
const HOST='127.0.0.1'
// you should pass port no compulsory to listen incomming requsets

app.listen(PORT, HOST,()=>{
    console.log("welcome is server sucessfulty running....")
})