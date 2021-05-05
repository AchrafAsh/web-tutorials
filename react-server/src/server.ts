import express, { Application, Request, Response } from 'express'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import Email from './components/Email'

const app = express()

app.get('/', (req: Request, res: Response) => {
    const emailTemplate = renderToString(createElement(Email))
    console.log(emailTemplate)
    return res.send(emailTemplate)
})

const port = 3000

app.listen(port, () => {  console.log('server started: http://localhost:3000')})