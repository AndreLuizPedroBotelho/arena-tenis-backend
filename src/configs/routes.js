import NotFoundRoute from '../routes/not-found'
import ExampleRoute from '../routes/example'

export default (app) => {
  ExampleRoute.route(app)
  NotFoundRoute.route(app)
}

