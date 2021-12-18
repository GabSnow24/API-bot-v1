import { Request, Response } from "express";
import prismaClient from "../prisma";
import { CreateStatusService } from "../services/CreateStatusService";

class CreateStatusController {
  async handle(request: Request, response: Response) {
    const text: string = request.body;
    const service = new CreateStatusService();
    const result: any = await service.execute(text);
    return response.json(result);
  }
}

export { CreateStatusController };
