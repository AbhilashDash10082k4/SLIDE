import {PrismaClient} from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

export const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_DEV !== 'production') {
    globalThis.prisma = client
}