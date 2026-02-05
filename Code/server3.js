const http=require('http')
const url=require('url')

const app=http.createServer((req,res)=>{

    // must be string
    res.write("<h1>Node JS Server Up....</h1>")

    const url_link="https://www.google.com/search?q=apple+macbook+pro+m5+pro&oq=apple+mac&gs_lcrp=EgZjaHJvbWUqEAgDEAAYgwEYsQMYgAQYigUyDAgAEEUYORixAxiABDIKCAEQABixAxiABDINCAIQLhixAxiABBjlBDIQCAMQABiDARixAxiABBiKBTINCAQQLhixAxiABBjlBDIKCAUQABixAxiABDINCAYQLhixAxiABBjlBDIKCAcQABixAxiABDIKCAgQLhiABBjlBDIHCAkQABiPAtIBCDMxMzNqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
    // The url.parse() method takes a URL string, parses it, and returns a URL object.
    const result=url.parse(url_link,true)
    // res.write(JSON.stringify(result))
    console.log(result)


    res.end("response end")

})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})