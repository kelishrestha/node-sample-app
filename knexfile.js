require('dotenv').config()

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.NODE_POSTGRES_DATABASE,
      user:     process.env.NODE_POSTGRES_USERNAME,
      password: process.env.NODE_POSTGRES_PASSWORD,
      host:     process.env.NODE_POSTGRES_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: process.env.NODE_POSTGRES_DATABASE,
      user:     process.env.NODE_POSTGRES_USERNAME,
      password: process.env.NODE_POSTGRES_PASSWORD,
      host:     process.env.NODE_POSTGRES_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.NODE_POSTGRES_DATABASE,
      user:     process.env.NODE_POSTGRES_USERNAME,
      password: process.env.NODE_POSTGRES_PASSWORD,
      host:     process.env.NODE_POSTGRES_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
