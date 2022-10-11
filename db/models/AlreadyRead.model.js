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
    AlreadyRead.belongsToMany(models.User, { foreignKey: 'userId', as: 'user' });
    models.User.belongsToMany(models.AlreadyRead, { foreignKey: 'userId', as: 'user' });
    AlreadyRead.belongsToMany(models.Books, { foreignKey: 'bookId', as: 'books' });
  };
  return AlreadyRead;
};
