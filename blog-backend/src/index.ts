import { Hono } from 'hono'
import user from './routes/user'

const app = new Hono()
app.get('/', (c) => c.text('Hono!'))

app.route('/user', user);

export default app ; 