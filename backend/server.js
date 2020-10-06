const express = require('express')
const products = require('./data/products')

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

app.listen(5000, console.log('Server running on port 5000!'))    // listen on port 5000 to run server



