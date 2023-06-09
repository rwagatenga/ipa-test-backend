'use strict';
import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/database';
import { UserRoles } from '../enums/UserRoles';

/**
 * @swagger
 *  tags:
 *    name: User
 *    description: user model
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *        - firstName
 *        - lastName
 *        - email
 *        - role
 *        - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of a User
 *         firstName:
 *           type: string
 *           description: The Family name of a User
 *         lastName:
 *            type: string
 *            description: The Surname of a User
 *         email:
 *           type: string
 *           description: The Email of User
 *         role:
 *           type: enum
 *           description: Role of User it can be ADMIN or USER
 *         password:
 *           type: string
 *           description: Password of user must be encrypted
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the user was updated
 *       example:
 *         id: 1
 *         firstName: Doe
 *         lastName: Johon
 *         email: johndoe@example.com
 *         role: ADMIN
 *         password: $Xh8iapa!$
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Model) {
    // define association here
  }
}
User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM(UserRoles.ADMIN, UserRoles.USER),
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    underscored: false,
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

export default User;
