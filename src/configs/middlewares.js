import { contentType, bodyParser, cors, limiter } from '../middlewares'
import helmet from 'helmet'
import cors from 'cors'

export default (app) => {
  app.use(bodyParser)
  app.use(contentType)
  app.use(limiter)

  app.use(helmet())
  app.use(cors())
}
