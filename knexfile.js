module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    connection: 'postgres://cczzqytnibzacy:5c98e8f09ce0b76c284d07f1c638bdb43500783c12b0c6378c9ee4ade4dcb3af@ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/dok5bh2nj6c66'
    // {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // }
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/server/db/migrations'
      // tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  }

};
