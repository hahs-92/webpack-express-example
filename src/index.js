const express = require('express')

const app = express()

const PORT = 5005

//routes
app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`)
})
