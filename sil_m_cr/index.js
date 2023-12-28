import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import 'dotenv/config'
import { blogRouter } from './src/router/BlogRoute.js';
import { userRouter } from './src/router/UserRoute.js';

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


app.use("/api/blogs",blogRouter)
app.use("/api/users",userRouter)

mongoose.connect(process.env.DB)
    .then(() => console.log("connnected"))
    .catch(() => console.log("Not connnected"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})