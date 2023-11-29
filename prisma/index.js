import { PrismaClient } from "@prisma/client";

export * from "@prisma/client";

const prisma= new PrismaClient()

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    errorFormat: "minimal",
  });
} else {
  globalThis["prisma"] =
    globalThis["prisma"] ||
    new PrismaClient({
      errorFormat: "pretty",
    });
  prisma = globalThis["prisma"];
}

export default prisma;