module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'profile',
    {
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'profile',
    }
  );
  return Profile;
};
