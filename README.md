# node-sample-app
Sample node app with back-end service


## Setup

Install dependencies
```
npm install
```

### Setup steps for knex

Install knex globally

```
npm install -g knex
```

Create database with terminal

```
createdb <database_name>
```

Create knexfile.js

```
knex init
```

Create migration files

```
knex migrate:make create_new_migration_file
```

Create seeds file for auto-populating

```
knex seed:make 01_<seed_file_name>
```

Run all migrations

```
knex migrate:latest
```

Run seeds file

```
knex seed:run
```

## Start server

Run server
```
npm start
```

Your localhost will run at http://localhost:9000/
