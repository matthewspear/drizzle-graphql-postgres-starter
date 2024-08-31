import { relations } from 'drizzle-orm';
import { serial, int, text } from 'drizzle-orm/mysql-core';
import { users } from './users';
import { createdAt, createTable, updatedAt } from './schema';

export const posts = createTable('posts', {
  id: serial('id').primaryKey(),
  createdAt: createdAt,
  updatedAt: updatedAt,
  content: text('content').notNull(),
  authorId: int('author_id').notNull()
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, { fields: [posts.authorId], references: [users.id] })
}));
