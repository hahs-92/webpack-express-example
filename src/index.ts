import * as express from 'express'
import { Request, Response } from 'express'


const app = express()

const PORT = 5005

//routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hi there!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})
