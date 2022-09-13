module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Admin', {
    idAdmin: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}