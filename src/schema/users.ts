import { relations } from 'drizzle-orm';
import { serial, text } from 'drizzle-orm/mysql-core';
import { posts } from './posts';
import { createdAt, createTable, updatedAt } from './schema';

export const users = createTable('users', {
  id: serial('id').primaryKey(),
  createdAt: createdAt,
  updatedAt: updatedAt,
  name: text('name').notNull()
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts)
}));
