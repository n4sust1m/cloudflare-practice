import { Hono} from 'hono'
import {env} from 'hono/adapter'

const app = new Hono()

app.get('/', (c) => {
  const { ENV_NAME } = env<{ ENV_NAME: string }>(c)
  console.log(`👺 got a request ${ENV_NAME}`)
	return c.text('Hello Cloudflare Practice');
})

app.get('/health-check', (c) => c.text('ok'))

export default app