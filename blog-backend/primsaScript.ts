import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())


interface User {
    email: string
    password: string
}

async function createUser(user:User) {
    const response = await prisma.user.create({
        data: {
            email: user.email,
            password: user.password
        }
    })
    return response
}


export { createUser }