import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/database';

/**
 * @swagger
 *  tags:
 *    name: ActivityLog
 *    description: Activity Logs Model
 *
 * components:
 *   schemas:
 *     ActivityLog:
 *       type: object
 *       required:
 *        - performedBy
 *        - userAgent
 *        - action
 *        - createdAt
 *        - metadata
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of a User
 *         performedBy:
 *           type: string
 *           description: represents the user who performed the activity.
 *           example: John Doe
 *         userAgent:
 *            type: string
 *            description: that represents the user agent of the device used to perform the activity.
 *            example: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
 *         action:
 *           type: string
 *           description: represents the type of activity performed.
 *           example: Logged in
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *         metadata:
 *           type: object
 *           description: a mixed type that represents additional information about the activity.
 *           properties:
 *              IP:
 *                 type: string
 *                 example: "192.168.1.100"
 *              browserType:
 *                 type: string
 *                 example: Chrome
 *              OS:
 *                 type: string
 *                 example: "Mac OS"
 */
class ActivityLog extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Model) {
    // define association here
  }
}
ActivityLog.init(
  {
    performedBy: DataTypes.STRING,
    userAgent: DataTypes.STRING,
    action: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    metadata: DataTypes.JSON,
  },
  {
    sequelize,
    modelName: 'ActivityLog',
    tableName: 'activitylogs',
    underscored: false,
  }
);

export default ActivityLog;
