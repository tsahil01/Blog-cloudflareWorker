import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface User {
    email: string
    password: string
}

async function createUser(user:User) {
    const response = await prisma.user.create({
        data: user
    })
    return response
}


export { createUser }