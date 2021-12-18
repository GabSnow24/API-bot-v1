import prismaClient from "../prisma";

class GetLastStatusService {
  async execute() {
    const status = await prismaClient.status.findMany({
      take: 1,
      orderBy: {
        created_at: "desc",
      },
    });
    return status;
  }
}

export { GetLastStatusService };
