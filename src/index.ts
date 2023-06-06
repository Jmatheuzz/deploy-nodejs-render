import 'dotenv/config'
import express, { Request, Response } from 'express'

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req: Request, res: Response) => {
    res.render('index')
})

app.listen(process.env.APP_PORT, () => console.log('server running on port ' + process.env.APP_PORT))