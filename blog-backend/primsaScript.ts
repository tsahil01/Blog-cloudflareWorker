import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())


interface User {
    email: string
    password: string
}

interface Post {
    title: string
    description: string
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

async function signinUser(user: User) {
    const response = await prisma.user.findFirst({
        where: {
            email: user.email,
            password: user.password
        }
    })
    return response;
}

async function allPosts() {
    const response = await prisma.blog.findMany()
    return response;
}

async function addPosts(post: Post) {
    const response = await prisma.blog.create({
        data:{
            title: post.title,
            description: post.description
        }
    })
    return response;
}

async function getPostById(postId:string) {
    const response = await prisma.blog.findFirst({
        where:{
            id: await parseInt(postId)
        }
    })
    return response;
}

export { createUser, signinUser, allPosts, addPosts, getPostById }