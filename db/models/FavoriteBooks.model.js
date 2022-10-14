module.exports = (sequelize, DataTypes) => {
  const FavoriteBooks = sequelize.define(
    'FavoriteBooks',
    {
      bookId: {
        type: DataTypes.STRING,
        foreignKey: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'favorite_books',
    }
  );
  FavoriteBooks.associate = (models) => {
    FavoriteBooks.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });
    models.Users.belongsToMany(models.FavoriteBooks, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });

    FavoriteBooks.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
    models.Books.hasMany(models.FavoriteBooks, {
      foreignKey: 'bookId',
      as: 'books',
    });
  };
  return FavoriteBooks;
};
