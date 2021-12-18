import prismaClient from "../prisma";

class GetStatusService {
  async execute() {
    const status = await prismaClient.status.findMany();
    return status;
  }
}

export { GetStatusService };
