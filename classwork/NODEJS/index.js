const express = require('express')
const bodyParser = require('body-parser')
require('colors')


const app = express()
app.use(bodyParser.json())

const students=[
{
    id:1,
    name: 'Ferhad'
},
{
    id:2,
    name: 'Tural'
},
{
    id:3,
    name:'ayhan'
}

]
app.get('/students',(req, res)=>{
    res.status(200).json(students)
})
app.get

const PORT = 7000

app.listen(PORT, () => console.log(`Server is running on; http://localhost:${PORT}`.bold.green));