module.exports = (sequelize, DataTypes) => {
  const UserBooks = sequelize.define(
    'UserBooks',
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
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    }
  );
  UserBooks.associate = (models) => {
    UserBooks.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });
    models.Users.belongsToMany(models.UserBooks, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });

    UserBooks.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
    models.Books.hasMany(models.UserBooks, {
      foreignKey: 'bookId',
      as: 'books',
    });
  };
  return UserBooks;
};
