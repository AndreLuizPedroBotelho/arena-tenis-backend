import { Example, sizeColumns } from '../../models/example'

export class ExampleValidation {
  constructor(validate) {
    this.validators = validate
  }

  async validate({ data, fields }) {

    const validations = []

    for (const field of fields) {
      const validateRequired = this.validators.validateRequired({ field, data })

      if (validateRequired) {
        validations.push(validateRequired)
      }

      const validateSize = this.validators.validateSize({
        value: data[field],
        field,
        size: sizeColumns[field]
      })

      if (validateSize) {
        validations.push(validateSize)
      }
    }

    return {
      erro: validations.length > 0,
      messages: validations
    }
  }
}