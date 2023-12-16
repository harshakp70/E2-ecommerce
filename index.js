require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/categories', categoryRoutes)


main().then(() => console.log("db connected"))
  .catch(err => console.log(err));

async function main() {
  const url = process.env.DB_URL
  const password  =process.env.DB_PASSWORD
  const urlWithPassword = url.replace('<password>',password)
  await mongoose.connect(urlWithPassword);
    

  

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })}