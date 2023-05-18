import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

const PORT = process.env.PORT || 3333
app
  .listen({
    port: Number(PORT),
  })
  .then(() => {
    console.log(`HTTP server listening on port ${PORT}`)
  })
