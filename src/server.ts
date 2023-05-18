import fastify from 'fastify'

const app = fastify()

const PORT = process.env.PORT || 3333

app
  .listen({
    port: Number(PORT),
  })
  .then(() => {
    console.log(`HTTP server listening on port ${PORT}`)
  })
