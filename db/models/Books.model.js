module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    'Books',
    {
      bookId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      bookPicture: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'books',
    }
  );
  return Books;
};
