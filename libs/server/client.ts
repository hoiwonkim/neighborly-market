import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient
}

const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

export default client;
