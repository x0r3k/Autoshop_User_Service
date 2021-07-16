import {
  Model, Sequelize, DataTypes, Optional,
} from 'sequelize';

export interface TestAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: boolean;
  fk_users_id: number
  // createdAt?: string;
  // updatedAt?: string;
}

export interface TestCreationAttributes extends Optional<TestAttributes, 'id'> {}

export function testFactory(sequelize: Sequelize) {
  class TestModel extends Model<TestAttributes, TestCreationAttributes> {
    static associate(models: any) {
      TestModel.belongsTo(models.users, { foreignKey: { name: 'fk_users_id', allowNull: false }, foreignKeyConstraint: true });
    }
  }

  TestModel.init({
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
    fk_users_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'tests',
    freezeTableName: true,
  });

  return TestModel;
}

/**
 * WORKING EXAMPLE WITH SEQUELIZE.DEFINE
 */

// interface TestInstance
//   extends Model<TestAttributes, TestCreationAttributes>,
//   TestAttributes {}

// type TestModelStatic = typeof Model & {
//   new (values?: object, options?: BuildOptions): TestInstance;
// };

// export function testFactory(sequalize: Sequelize): TestModelStatic {
//   const Test = sequalize.define<TestInstance, TestAttributes>(
//     'Test',
//     {
//       id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       firstName: {
//         type: DataTypes.STRING,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//       },
//       email: {
//         type: DataTypes.STRING,
//       },
//     },
//     {
//       freezeTableName: true,
//       timestamps: false,
//     },
//   );

//   return Test;
// }
