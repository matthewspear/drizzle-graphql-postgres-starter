import { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/*.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: String(process.env.DATABASE_URL)
  }
} satisfies Config;
