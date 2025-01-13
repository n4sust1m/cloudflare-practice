export default {
	async fetch(request, env, ctx): Promise<Response> {
    console.log(`👺 got a request ${env.ENV_NAME}`)
		return new Response('Hello Cloudflare Practice');
	},
} satisfies ExportedHandler<Env>;
