import { Router } from 'express'
import { CreateStatusController } from './controllers/CreateStatusController'
import { GetLastStatusController } from './controllers/GetLastStatusController'
import { GetStatusController } from './controllers/GetStatusController'

const router = Router()



router.get('/status', new GetStatusController().handle)
router.get('/last-status', new GetLastStatusController().handle)
router.post('/status', new CreateStatusController().handle)
export { router }