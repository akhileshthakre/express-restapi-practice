const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3080

const data = []

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    //res.status(200).send("Hello there")
    res.json(data)
})

app.post('/test',(req,res) => {
    const newData = req.body
    console.log(newData)
    const add = data.push(newData)
    console.log(add)
    res.json(add)
})


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))