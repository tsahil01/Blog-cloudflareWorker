import { Hono } from "hono";
import { addPosts, allPosts } from "../../primsaScript";

const posts = new Hono();

posts.get('/', async (e)=>{
    return e.json({
        msg: "n /posts route"
    })
})

posts.get('/posts', async (c)=>{
    try{
        const posts = await allPosts();
        return c.json({
            msg: posts
        })
    }
    catch (e){
        return c.json({
            err: e
        })
    }
})

posts.post('/posts', async (c)=>{
    const body = await c.req.json();
    try{
        const newPost = await addPosts({
            title: body.title,
            description: body.description
        })
        return c.json({
            msg: newPost
        })
    } catch(e){
        return c.json({
            err: e
        })
    }
})


export default posts