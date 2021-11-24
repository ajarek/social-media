const express =require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
const app = express()
app.use(cors())
dotenv.config()
const port=process.env.PORT

//databasa
mongoose.connect(process.env.DATABASE,()=>{
    console.log("Connecting to Database")
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(require('./routes/posts'))
app.use(require('./routes/register'))
app.use(require('./routes/login'))

app.listen(port, () => {
    console.log('Backend is running:'+ port)
})