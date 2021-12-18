import prismaClient from "../prisma";

class CreateStatusService {
  async execute(text: any) {
    const status = await prismaClient.status.create({
      data: text,
    });
    return status;
  }
}

export { CreateStatusService };
