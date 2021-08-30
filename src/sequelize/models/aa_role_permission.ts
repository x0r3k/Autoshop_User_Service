/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAARolePermissionAttributes {
  roleId: number;
  permissionId: number;
}

export function aaRolePermissionFactory(sequelize: Sequelize) {
  class AA_RolePermissionModel extends Model<IAARolePermissionAttributes> implements IAARolePermissionAttributes {
    roleId!: number;

    permissionId: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      AA_RolePermissionModel.belongsTo(models.aaRole, { foreignKey: { name: 'roleId', allowNull: false }, foreignKeyConstraint: true });
      AA_RolePermissionModel.belongsTo(models.aaPermission, { foreignKey: { name: 'permissionId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_RolePermissionModel.init({
    roleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      field: 'role_id',
    },
    permissionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      field: 'permission_id',
    },
  }, {
    sequelize,
    modelName: 'aaRolePermission',
    tableName: 'aa_role_permission',
    freezeTableName: true,
  });

  return AA_RolePermissionModel;
}
