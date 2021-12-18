import { Request, Response } from "express";
import prismaClient from "../prisma";
import { GetStatusService } from "../services/GetStatusService";

class GetStatusController {
  async handle(request: Request, response: Response) {
    const service = new GetStatusService();
    const result = await service.execute();
    return response.status(200).json(result);
  }
}

export { GetStatusController };
