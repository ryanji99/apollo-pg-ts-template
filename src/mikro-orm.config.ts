import path from 'path';
import { MikroORM } from '@mikro-orm/core';
import BaseEntity from './entities/BaseEntity';

export default {
  dbName: process.env.DBNAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  type: 'postgresql',
  // Set to false in production
  debug: true,
  entities: [BaseEntity],
  allowGlobalContext: true,
  migrations: {
    path: path.join(__dirname, './migrations'),
  },
} as Parameters<typeof MikroORM.init>[0];
