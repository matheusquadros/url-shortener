import { AddAccountController } from '@/controller/add-account-controller'
import { AddAccount } from '@/domain/usecases/add-account'

export class MockRepository implements AddAccount {
  async add(account: AddAccount.Params): Promise<AddAccount.Result> {
    throw new Error()
  }
}

export const makeAddAccountController = (): any => {
  const controller = new AddAccountController(new MockRepository())
  return controller
}
