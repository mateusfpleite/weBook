module.exports = (sequelize, DataTypes) => {
    const Reviews = sequelize.define(
        'reviews',
        {

            rating: {
                type: DataTypes.INTEGER,
            },
            reviewContent: {
                type: DataTypes.STRING,
            },
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
            tableName: 'reviews',
        }
    );
    Reviews.associate = (models) => {
        Reviews.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
        models.Users.hasMany(models.Reviews, {
            foreignKey: 'userId',
            as: 'user',
        });

        Reviews.belongsTo(models.Books, { foreignKey: 'bookId', as: 'books' });
        models.Books.hasMany(models.Reviews, {
            foreignKey: 'bookId',
            as: 'books',
        });
    };
    return Reviews;
};
