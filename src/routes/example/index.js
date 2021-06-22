import { ExampleController } from '../../controllers/example'
import { ExampleValidation } from '../../validations/example'

import { Validators } from '../../validations/validators'
class ExampleRoute {
  constructor() {
    this.exampleController = new ExampleController(
      new ExampleValidation(
        new Validators()
      )
    )
  }

  route(app) {
    app.post('/api/example', (request, response) => this.exampleController.create({
      request,
      response
    }))

    app.get('/api/example', (request, response) => this.exampleController.index({
      request,
      response
    }))

    app.get('/api/example/:id', (request, response) => this.exampleController.show({
      request,
      response
    }))

    app.put('/api/example/:id', (request, response) => this.exampleController.update({
      request,
      response
    }))

    app.delete('/api/example/:id', (request, response) => this.exampleController.delete({
      request,
      response
    }))

    return app
  }

}

export default new ExampleRoute()
