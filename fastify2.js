import Fastify from 'fastify';
const fastify = Fastify({
    logger: true
  })
const port = 3000

fastify.get('/greet', async (request, reply) => {
  const { name } = request.query; // Extract 'name' from query params http://localhost:3000/greet?name=John
  return { message: `Hello, ${name || 'Guest'}!` };
});

fastify.listen({ port }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
