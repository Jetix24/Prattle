import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

//Esto hace que se pueda acceder a la variable prisma desde cualquier parte del código
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client