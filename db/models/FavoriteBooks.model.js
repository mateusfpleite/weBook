module.exports = (sequelize, DataTypes) => {
  const FavoriteBooks = sequelize.define(
    'FavoriteBooks',
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
      tableName: 'favorite_books',
    }
  );
  FavoriteBooks.associate = (models) => {
    FavoriteBooks.belongsToMany(models.User, { foreignKey: 'userId', as: 'user' });
    FavoriteBooks.belongsToMany(models.Books, { foreignKey: 'bookId', as: 'books' });
  };
  return FavoriteBooks;
};