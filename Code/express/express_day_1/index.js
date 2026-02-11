const express = require('express')
const app =express()
const port=3000

app.get('/', (req,res)=>{
    res.send("Hellow Express js")

})
app.listen(port,()=>{
    console.log(`example app listining on port ${port}`)
})