import 'dotenv/config';

import { buildSchema } from 'drizzle-graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { db } from './db';

const { schema } = buildSchema(db);

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
