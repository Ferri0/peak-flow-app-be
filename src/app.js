import express from 'express'
import fetch from 'node-fetch';
import cors from "cors";

import authRouter from "./routers/authRouter.js";

const app = express()

// TODO - remove
const allowedOrigins = ['http://localhost:9000', 'https://peak-flow-app.netlify.app/'];

app.use(cors({
  origin: allowedOrigins
}));

app.use('/auth', authRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('It works!')
})

app.get('/test-endpoint', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
