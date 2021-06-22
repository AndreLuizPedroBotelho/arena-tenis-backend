import { Example } from '../../models/example'

export class ExampleController {

  constructor(validation) {
    this.validation = validation
  }

  async index({ response }) {
    try {
      const examples = await Example.findAll({
        order: [
          ['id', 'DESC']
        ]
      })

      return response.status(200).json({ examples })
    } catch (err) {
      return response.status(500).json({ message: 'Server erro!' })
    }

  }

  async show({ request, response }) {
    try {

      const { id } = request.params
      const example = await Example.findByPk(id)

      if (!example) {
        const message = 'Example doesn\'t found!'

        return response.status(400).json({ message })
      }

      return response.status(200).json({ example })
    } catch (err) {
      return response.status(500).json({ message: 'Server erro!' })
    }

  }

  async create({ request, response }) {
    try {
      const { name } = request.body

      const { erro, messages } = await this.validation.validate({
        data: { name },
        fields: ['name']
      })

      if (erro) {
        return response.status(400).json({ messages })
      }

      const example = await Example.create({
        name,
      })

      const message = 'Example was created with success!'

      return response.status(200).json({ message, example })
    } catch (err) {
      return response.status(500).json({ message: 'Server erro!' })
    }
  }

  async update({ request, response }) {
    try {
      const { id } = request.params
      const { name } = request.body

      const { erro, messages } = await this.validation.validate({
        data: { id, name },
        fields: ['name']
      })

      if (erro) {
        return response.status(400).json({ messages })
      }

      const example = await Example.findByPk(id)

      if (!example) {
        const message = 'Example doesn\'t found!'

        return response.status(400).json({ message })
      }

      example.name = name

      await example.save()
      const message = 'Example was updated with success!'

      return response.status(200).json({ message, example })
    } catch (err) {
      return response.status(500).json({ message: 'Server erro!' })
    }
  }

  async delete({ request, response }) {
    try {
      const { id } = request.params

      const example = await Example.findByPk(id)

      if (!example) {
        const message = 'Example doesn\'t found!'

        return response.status(400).json({ message })
      }

      await example.destroy()

      const message = 'Example was deleted with success!'

      return response.status(200).json({ message })
    } catch (err) {
      return response.status(500).json({ message: 'Server erro!' })
    }
  }


}