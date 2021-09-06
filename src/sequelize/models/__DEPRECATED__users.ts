import {
  Model, Sequelize, DataTypes, Optional,
} from 'sequelize';

export interface IUsersAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: boolean;
  // createdAt?: string;
  // updatedAt?: string;
}

export interface IUserCreationAttributes extends Optional<IUsersAttributes, 'id'> {}

export function userFactory(sequelize: Sequelize) {
  class UserModel extends Model<IUsersAttributes, IUserCreationAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      UserModel.hasMany(models.Test, { foreignKey: { name: 'fk_users_id', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  UserModel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
  });

  return UserModel;
}

// module.exports = (sequelize, DataTypes) => {
//   class users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   users.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'users',
//   });
//   return users;
// };
