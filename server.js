const fastify = require('fastify')();

fastify
  .register(require('@fastify/nextjs'), {
    dev: false,
  })
  .after(() => {
    fastify.next('/*');
  });

const start = async () => {
  try {
    await fastify.listen({port: 3000});
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
