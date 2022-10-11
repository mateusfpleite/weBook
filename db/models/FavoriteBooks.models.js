module.exports = (sequelize, DataTypes) => {
  const FavoriteBooks = sequelize.define(
    'FavoriteBooks',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      bookPicture: {
        type: DataTypes.STRING,
      },
      bookId: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'favorite_books',
    }
  );
  return FavoriteBooks;
};
