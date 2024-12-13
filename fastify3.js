import Fastify from 'fastify';
const fastify = Fastify({
    logger: true
  })

fastify.post('/echo', async (request, reply) => {
  const data = request.body; // JSON body
  return { received: data }; // Echo response
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on http://localhost:3000');
});
