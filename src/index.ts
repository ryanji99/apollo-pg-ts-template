import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import express from 'express';
import 'dotenv/config';
import { MikroORM } from '@mikro-orm/core';
import mikroORMConfig from './mikro-orm.config';
import BaseResolver from './resolvers/baseResolver';

async function main() {
  const mikroORM = await MikroORM.init(mikroORMConfig);
  const migrator = mikroORM.getMigrator();
  await migrator.up();

  const PORT = process.env.PORT || 5000;
  const app = express();
  const apolloServer = new ApolloServer({
    context: () => ({ dbDriver: mikroORM.em }),
    schema: await buildSchema({
      resolvers: [BaseResolver],
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();
