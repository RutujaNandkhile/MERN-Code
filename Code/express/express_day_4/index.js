const express=require('express')
const app=express()

// middleware to serve static files
app.use(express.static('public/'))

// routing defined
app.get('/',(req,res)=>{
    // res.send("<h1>Home Page</h1>")

    // used to render html pages 
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{

    const obj={
        "id":1,
        "name":"pratik@gmail.com"
    }

    // data traversing
    // passing data to ejs file
    // data must be in a  Object while passing
    
    // result acts as enevloper/wrapper
    const result={data:obj}

    res.render('about.ejs',result)
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

// fall back routing
app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running ... on http://${HOST}:${PORT}`)
})