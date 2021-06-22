import { sequelize } from '../configs/database'

import { DataTypes } from 'sequelize'

export const sizeColumns = {
  name: 255
}

export const Example = sequelize.define('examples', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    field: 'id',
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(sizeColumns.name),
    allowNull: false,
    field: 'name',
  }
}, {
  tableName: 'example',
  sequelize,
  freezeTableName: true,
});
