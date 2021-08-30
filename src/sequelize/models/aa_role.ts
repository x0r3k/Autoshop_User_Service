/* eslint-disable camelcase */
import {
  Model, Sequelize, DataTypes,
} from 'sequelize';

export interface IAARoleAttributes {
  roleId?: number;
  roleCd: string;
  roleName: string;
  note?: string | null;
  // createdAt?: string;
  // updatedAt?: string;
}

export function aaRoleFactory(sequelize: Sequelize) {
  class AA_RoleModel extends Model<IAARoleAttributes> implements IAARoleAttributes {
    roleId!: number;

    roleCd!: string;

    roleName!: string;

    note!: string | null;

    static associate(models: any) {
      AA_RoleModel.hasMany(models.aaRolePermission, { foreignKey: { name: 'roleId', allowNull: false }, foreignKeyConstraint: true });
      AA_RoleModel.hasMany(models.aaUser, { foreignKey: { name: 'roleId', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  AA_RoleModel.init({
    roleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'role_id',
    },
    roleCd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'role_cd',
    },
    roleName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'role_name',
    },
    note: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: null,
      field: 'note',
    },
  }, {
    sequelize,
    modelName: 'aaRole',
    tableName: 'aa_role',
    freezeTableName: true,
  });

  return AA_RoleModel;
}
