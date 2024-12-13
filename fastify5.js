const fastify = require('fastify')();

fastify.addHook('onRequest', async (request, reply) => {
  console.log(`Incoming request: ${request.method} ${request.url}`);
});

fastify.get('/', async (request, reply) => {
  return { message: 'Middleware demo' };
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on http://localhost:3000');
});
