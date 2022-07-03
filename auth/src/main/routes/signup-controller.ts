import { adaptRoute } from '@/main/adapters'
import { makeAddAccountController } from '../factories/add-account-factory'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeAddAccountController()))
}
