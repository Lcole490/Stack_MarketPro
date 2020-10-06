import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import colors from "colors"



dotenv.config()


connectDB()

const app = express()               // "Rename" express to app. Express will be "app" after this point



app.get('/', (req, res)=>{
    res.send('API is running...')
})


// Route to get All products from Database


app.get('/api/products', (req, res)=>{
    res.json(products)                      //send result in JSON format
})


// Route to get Product from Database by product ID

app.get('/api/products/:id', (req, res)=>{
    const product = products.find(p => p._id === req.params.id)
    res.json(product)                      //send result in JSON format
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`))    // listen on port 5000 to run server



