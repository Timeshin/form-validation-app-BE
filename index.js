const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())


app.post('/registration', (req, res) => {
  const { body } = req
  const number = Math.floor(Math.random() * 4) + 1

  if(number <= 3) {
    return res.send(body)
  }

  res.status(400).send({
    message: 'This is an error!'
 })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
