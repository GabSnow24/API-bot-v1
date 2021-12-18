import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import robo from './robo'


import { router } from "./routes"

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)


app.use(express.json())

app.use(router)

robo()


export {  serverHttp }