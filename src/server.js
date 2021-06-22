import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import env from './configs/env'

app.listen(env.port, () => {
  console.log(`Server running ar http://localhost:${env.port}`)
})