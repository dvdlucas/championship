import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env.DB_TYPE); 

const config: ConnectionOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    "src/models/**/*.ts"
  ],
  migrations: [
    "src/migrations/**/*.ts"
  ],
  subscribers: [
    "src/subscribers/**/*.ts"
  ]
};

export default config;
