module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    'Books',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bookId: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      bookPicture: {
        type: DataTypes.STRING,
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
  return Books;
};
