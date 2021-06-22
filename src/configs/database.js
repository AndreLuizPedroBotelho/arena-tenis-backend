import { Sequelize } from 'sequelize'
import env from './env'

let otherConfigs = {}
if (env.nodeEnv === "production") {
  otherConfigs = {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  }
}

export const sequelize = new Sequelize(env.url, {
  logging: false,
  ...otherConfigs
});

export default async () => {
  await sequelize.authenticate()
  await sequelize.sync();
}