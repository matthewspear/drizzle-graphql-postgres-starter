import 'dotenv/config';

import { buildSchema } from 'drizzle-graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { db } from './db';

const { schema } = buildSchema(db);

const yoga = createYoga({ schema });

const server = createServer(yoga);

const port = process.env.PORT || 3333;
server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
