import { FastifyInstance, FastifyReply } from 'fastify';

export default async function getMessage(
  fastify: FastifyInstance
): Promise<void> {
  fastify.get('/', {}, async (_, reply: FastifyReply) => {
    reply.status(201).send({ message: 'Hello World' });
  });
}
