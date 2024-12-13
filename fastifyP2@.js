const fastify = require('fastify')()

// Register PostgreSQL plugin
fastify.register(require('@fastify/postgres'), {
  connectionString: 'postgres://user:password@localhost/dbname' // Replace with your actual PostgreSQL connection details
})

// Define a route to fetch user data by ID
fastify.get('/user/:id', async (req, reply) => {
  const client = await fastify.pg.connect() // Get a client from the connection pool

  try {
    const { rows } = await client.query('SELECT id, username, email FROM users WHERE id = $1', [req.params.id]) // Execute query
    if (rows.length === 0) {
      reply.status(404).send({ message: 'User not found' }) // Return 404 if no user is found
    } else {
      reply.send(rows[0]) // Return the user data
    }
  } catch (err) {
    reply.status(500).send({ error: 'Internal Server Error', details: err.message }) // Return an error if query fails
  } finally {
    client.release() // Release the client back to the pool
  }
})

// Start the server
fastify.listen(3000, err => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server listening on http://localhost:3000')
})
