# Drizzle GraphQL Postgres API Example

This example starts an [drizzle-graphql](https://github.com/drizzle-team/drizzle-graphql/releases) server written in [TypeScript](https://www.typescriptlang.org/).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/4KBHfo?referralCode=matt)

## ✨ Features

- Drizzle
- GraphQL
- TypeScript

## 💁‍♀️ How to use

- Install dependencies `pnpm i`
- Connect to your Railway project `railway link`
- Start the development server `railway run pnpm dev`

## 📝 Notes

To launch a local instance of Postgres for testing run `docker compose up`

When setting up a database for the first time run `pnpm db:push` to create the database schema.

To use the GraphiQL interface head to `/graphql` on your local or hosted domain. Below are some operations to try out:

Creating a user:

```gql
mutation {
  insertIntoUsers(values: { name: "Matt" }) {
    id
    name
  }
}
```

Creating a post:

```gql
mutation {
  insertIntoPosts(values: { authorId: 1, content: "Hello world!" }) {
    id
    content
    authorId
  }
}
```

Querying the user and posts:

```gql
query {
  users {
    id
    name
    posts {
      id
      content
    }
  }
}
```
