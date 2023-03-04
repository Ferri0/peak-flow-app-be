import fetch from "node-fetch";

import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 123')
})

app.get('/users', async (req, res) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const x = await data.json()

  res.status(200).json(x)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
