module.exports = (sequelize, DataTypes) => {
  const IsReading = sequelize.define(
    'IsReading',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bookId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'is_reading',
    }
  );
  IsReading.associate = (models) => {
    IsReading.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    IsReading.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
  };
  return IsReading;
};
