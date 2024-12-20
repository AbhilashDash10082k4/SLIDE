import {PrismaClient} from '@prisma/client'
//The Prisma Client is the main way to interact with your database when using Prisma. It allows you to query and mutate data.

//This is to ensure TypeScript recognizes global.prisma as a valid global variable throughout your application.
declare global {
    var prisma: PrismaClient | undefined
}

//globalThis refers to the global object, which is shared across all modules in the same runtime.
export const client = globalThis.prisma || new PrismaClient();

//Avoids creating multiple instances of the Prisma Client during development, which can lead to connection limits.
if (process.env.NODE_ENV !== 'production') {
    //By storing the Prisma Client instance in globalThis.prisma, subsequent imports can reuse the existing instance instead of creating a new one.
    globalThis.prisma = client
}