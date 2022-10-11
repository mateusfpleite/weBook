module.exports = (sequelize, DataTypes) => {
  const AlreadyRead = sequelize.define(
    'AlreadyRead',
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
      tableName: 'already_read',
    }
  );
  AlreadyRead.associate = (models) => {
    AlreadyRead.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    AlreadyRead.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
  };
  return AlreadyRead;
};
