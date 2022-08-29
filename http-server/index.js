const http = require('http')

const PORT = 3001;
const server =  http.createServer((req,res)=>{
  res.writeHead(200,{
      'Content-type':'text/plain'
    //   'Content-type':'application/json'

  })
    res.end('hello world')
//   res.end(JSON.stringify({
//     text:'hello word'
// }))
})
server.listen(PORT)