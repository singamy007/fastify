import Fastify from 'fastify';
const fastify = Fastify({
    logger: true
  })
fastify.get('/user/:id', async (request, reply) => {
  const { id } = request.params; // Extract 'id' from route
  return { userId: id };
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on http://localhost:3000');
});
