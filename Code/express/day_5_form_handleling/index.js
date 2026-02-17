const express=require('express')
const app=express()
const url=require('url')

// built in middleware to server static files
app.use(express.static('public/'))


// routing defined
app.get('/',(req,res)=>{
    res.render('home.ejs')  
})

// about us
app.get('/signup',(req,res)=>{
    
        res.render('signup.ejs')
})





// middleware
// fall back routing
app.use((req,res)=>{
    res.send(`
        <h1>404- Page Not Found</h1>
        <a href='/'>Go To Home Page</a>
        
        `)
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server Is running on http://${HOST}:${PORT}`)
})