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
    AlreadyRead.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });
    models.Users.belongsToMany(models.AlreadyRead, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });

    AlreadyRead.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
    models.Books.hasMany(models.AlreadyRead, {
      foreignKey: 'bookId',
      as: 'books',
    });
  };
  return AlreadyRead;
};
