module.exports = (sequelize, DataTypes) => {
  const WantToRead = sequelize.define(
    'WantToRead',
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
      tableName: 'want_to_read',
    }
  );
  WantToRead.associate = (models) => {
    WantToRead.belongsToMany(models.User, { foreignKey: 'userId', as: 'user' });
    WantToRead.belongsToMany(models.Books, { foreignKey: 'bookId', as: 'books' });
  };
  return WantToRead;
};
