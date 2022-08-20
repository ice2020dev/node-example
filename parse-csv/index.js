const {parse} = require('csv-parse')
const fs = require('fs')

let results = []

fs.createReadStream('./cumulative_2022.08.15_07.13.46.csv')
.pipe(parse({
    comment:'#',
    columns:true
}))
.on('data',(data)=>{
    results.push(data)
})
.on('error',(error)=>{
    console.log('error',error)
})
.on('end',()=>{
    console.log(results)
    console.log('读取完成！')
})