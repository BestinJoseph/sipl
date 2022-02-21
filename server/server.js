import express, { urlencoded } from 'express'
import cors from 'cors'

const app = express()
const port = 8000

app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(cors())

app.listen(port, () => console.log('its running good.'))