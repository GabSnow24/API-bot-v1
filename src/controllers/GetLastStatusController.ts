import { Request, Response } from "express";
import { GetLastStatusService } from "../services/GetLastStatusService";

class GetLastStatusController {
  async handle(request: Request, response: Response) {
    const service = new GetLastStatusService();
    const result = await service.execute();
    return response.status(200).json(result);
  }
}

export { GetLastStatusController };
