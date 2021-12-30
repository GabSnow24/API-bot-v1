import { PrismaClient } from "@prisma/client";

class MasterService {
  model: any;
  constructor(model: any) {
    this.model = model;
  }

  async create() {}
}
