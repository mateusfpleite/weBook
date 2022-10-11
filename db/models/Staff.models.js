module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'staff',
    }
  );
  return Staff;
};
