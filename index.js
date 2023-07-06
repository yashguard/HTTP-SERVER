const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/") {
        res.end("jshebfjsrhbf")
    } else if(req.url == "/signup") {
        res.end("jshebfjsrhbf")
    } if(req.url == "/login") {
        res.end("jshebfjsrhbf")
    } if(req.url == "/product") {
        res.end("jshebfjsrhbf")
    } else {res.end("Page not found")}
})

server.listen(8010,()=>{
    console.log("Listening the user")
})