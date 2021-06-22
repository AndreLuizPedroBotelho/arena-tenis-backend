import { convertToFirstLetterToUppercase, isValidCPF } from '../../utils/functions'
import validator from 'validator'

export class Validators {
  validateRequired({ field, data }) {
    if (!data[field]) {
      return `${convertToFirstLetterToUppercase(field)} is required!`
    }
  }

  validateCpf(cpf) {
    if (!isValidCPF(String(cpf))) {
      return 'Cpf is invalid!'
    }
  }

  validateEmail(email) {
    if (!validator.isEmail(email)) {
      return `Email is invalid!`
    }
  }

  validateIsInteger({ field, value }) {
    if (!Boolean(parseInt(value))) {
      return `${convertToFirstLetterToUppercase(field)} is invalid!`
    }
  }

  validateSize({ value, field, size }) {
    if (String(value).length > size) {
      return `${convertToFirstLetterToUppercase(field)} is too long!`
    }
  }
}


