import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
dotenv.config()
import { errorHandler } from './backend/middleware/errorMiddleware.js'
import connectDB from './backend/config/db.js'
import apiRouter from './backend/routes/apiRoutes.js'

const port = process.env.PORT || 8000

const app = express()

app.set('trust proxy', 1)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, './frontend/dist')))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

if (process.env.NODE_ENV === 'production') {
  app.use('/*wildcard', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend', 'dist', 'index.html'))
  })
}

app.use(errorHandler)

async function main() {
  await connectDB()
  // Ensures DB connection is established before the server starts listening for requests
  app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
  })
}

main()
