// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { bigint, mysqlTableCreator, timestamp } from 'drizzle-orm/mysql-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `${name}`);

export const createdAt = timestamp('createdAt').defaultNow().notNull();
export const updatedAt = timestamp('updatedAt')
  .defaultNow()
  .onUpdateNow()
  .notNull();

export function serialRef(name: string) {
  return bigint(name, { mode: 'number', unsigned: true });
}
