const config = require('config');
const dbOptions = config.get('db');
//const { Strings } = require('./src/common/utils/Strings');

module.exports = {
  name: "default",
  type: dbOptions.type,
  host: dbOptions.host,
  port: dbOptions.port,
  database: dbOptions.name,
  username: dbOptions.username,
  password: dbOptions.password,
  logging: dbOptions.logging,
  entities: [
    //'./src/**/*.entity.ts',
    './dist/**/*.entity.js'
  ],
  synchronize: dbOptions.synchronize,
  /*"migrationsRun": true,
  "migrations": ["./src/migrations/!**!/!*.ts"],
  "cli": {
    "entitiesDir": "./src/!**!/!*.entity.ts",
    "migrationsDir": "./src/migrations",
  },*/
};
