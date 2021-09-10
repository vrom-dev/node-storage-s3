const app = require('./app')
const { PORT } = require('./config/server')

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})
