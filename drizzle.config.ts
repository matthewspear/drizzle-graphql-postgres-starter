import { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/*.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: String(process.env.DATABASE_URL)
  }
} satisfies Config;
