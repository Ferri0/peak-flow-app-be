import express from 'express'

import authRouter from "./routers/authRouter.js";

const app = express()

app.use('/auth', authRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('It works!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
