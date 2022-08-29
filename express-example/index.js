const express = require('express')
const path = require('path')

const friendRouter = require('./routes/friends.router')

const app = express();
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'))

const PORT = 3001



app.use((req,res,next)=>{
    const start = Date.now();
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta} ms`)
})
// 文件目录提供文件服务
app.use('/site', express.static(path.join(__dirname, 'public')))

// 配置之后可以获取post请求上的数据，通过req.body获取
app.use(express.json())

//模版html渲染
app.get('/',(req,res)=>{
  res.render('index',{
      title:'我是标题',
      text:'文本'
  })
})
app.use('/friends',friendRouter)

  
app.listen(PORT,()=>{
    console.log('server is running ')
})