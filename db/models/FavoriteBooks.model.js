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
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'favorite_books',
    }
  );
  return FavoriteBooks;
};
