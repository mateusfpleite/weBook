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

  Staff.associate = (models) => {
    Staff.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' })
  }
  return Staff;
};
