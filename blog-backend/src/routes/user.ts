import { Hono } from "hono";
import { createUser } from "../../primsaScript";
const user = new Hono();

user.get('/', (c)=>{
    return c.text("Hello World, I am from /user")
})

user.post('/signup', async (c)=>{
    await console.log(c.req)
    const body = await c.req.json();
    console.log(body)
    const createUserResponse = await createUser(body)
    return c.json({
        msg: createUserResponse
    })
})

export default user;