import { Request, Response } from 'express'
import { GetLast3MessageService } from '../services/GetLast3MessageService'



class GetLast3MessagesController {
    async handle(request: Request, response: Response) {
        const service = new GetLast3MessageService()
        const result = await service.execute()

        return response.json(result)
    }

}

export { GetLast3MessagesController }