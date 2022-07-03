import { forbidden, noContent, serverError } from '@/common/helpers/http-helper'
import { Controller, HttpResponse } from '@/common/presentation/protocols'
import { AddAccount } from '@/domain/usecases/add-account'

export class AddAccountController implements Controller {
  constructor(private readonly addAccount: AddAccount) {}

  async handle(request: AddAccountController.Request): Promise<HttpResponse> {
    try {
      const isValid = this.addAccount.add({
        email: request.email,
        name: request.name,
        password: request.password
      })

      if (!isValid) {
        return forbidden(new Error())
      }

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddAccountController {
  export type Request = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
}
