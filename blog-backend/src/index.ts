import { Hono } from 'hono'
import user from './routes/user'
import posts from './routes/posts';

const app = new Hono()
app.get('/', (c) => c.text('Welcome to Hono!'))

app.route('/user', user);
app.route('/post', posts);

export default app ; 