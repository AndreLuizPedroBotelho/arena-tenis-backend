import { Sequelize } from 'sequelize'
import env from './env'

export const sequelize = new Sequelize(env.url, {
  logging: false
});

export default async () => {
  await sequelize.authenticate()
  await sequelize.sync();
}