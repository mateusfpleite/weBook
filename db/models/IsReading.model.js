module.exports = (sequelize, DataTypes) => {
  const IsReading = sequelize.define(
    'IsReading',
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
      tableName: 'is_reading',
    }
  );
  IsReading.associate = (models) => {
    IsReading.belongsToMany(models.User, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });
    models.Users.belongsToMany(models.IsReading, {
      foreignKey: 'userId',
      as: 'user',
      through: 'Users',
    });

    IsReading.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
    models.Books.hasMany(models.IsReading, {
      foreignKey: 'bookId',
      as: 'books',
    });
  };
  return IsReading;
};
