const express = require('express')
const cors = require('cors')
const app = express()
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')
const passportRouter = require('./routes/passportRoutes')
const infoRouter = require('./routes/infoRouter')

app.use(express.json())
app.use(cors())
// >> requestDater Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})
// *** Router
const apiV1Route = ''
app.use(`${apiV1Route}/users`, userRouter)
app.use(`${apiV1Route}/tours`, tourRouter)
app.use(`${apiV1Route}/pass`, passportRouter)
app.use(`${apiV1Route}/info`, infoRouter)

// Export
module.exports = {
  path: '/api',
  handler: app,
}
