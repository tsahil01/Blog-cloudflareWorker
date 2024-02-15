import { Hono } from "hono";
import { createUser, signinUser } from "../../primsaScript";
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const secretKey = "jey";

const user = new Hono();

user.get('/', (c)=>{
    return c.text("Hello World, I am from /user")
})

user.post('/signup', async (c)=>{
    const body = await c.req.json();
    try{
        const createUserResponse = await createUser({
            email: body.email,
            password: body.password
        })
        const payload = {
            email: body.email
        }
        // const token = jwt.sign(payload, secretKey);
        return c.json({
            msg: "success",
            email: createUserResponse.email,
            // token: token
        })
    } catch(e){
        return c.json({
            msg: e
        })
    }
})

user.post('/signin', async (c)=>{
    const body = await c.req.json();
    try{
        const userLoginResponse = await signinUser({
            email: body.email,
            password: body.password
        })
        if(userLoginResponse == null){
            return c.json({
                msg: "Invalid User"
            })
        }
        const payload = {
            email: body.email
        }
        // const token = jwt.sign(payload, secretKey);   
        return c.json({
            msg: "success",
            email: userLoginResponse.email,
            // token: token
        })
    } catch(e){
        return c.json({
            msg: e
        })
    }

})

export default user;