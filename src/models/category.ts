'use strict';
import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/database';

class Category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Model) {
    // define association here
  }
}
Category.init(
  {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
  }
);

export default Category;
