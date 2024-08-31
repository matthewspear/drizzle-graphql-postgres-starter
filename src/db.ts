import { drizzle } from 'drizzle-orm/mysql2';
import { createPool, type Pool } from 'mysql2/promise';

import * as schema from './schema/schema';
import * as users from './schema/users';
import * as posts from './schema/posts';

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn = globalForDb.conn ?? createPool({ uri: process.env.DATABASE_URL });
if (process.env.NODE_ENV !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, {
  schema: {
    ...schema,
    ...users,
    ...posts
  },
  mode: 'default'
});
