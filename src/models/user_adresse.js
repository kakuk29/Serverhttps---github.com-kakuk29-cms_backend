module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserAdresse', {
    idUserAdresse: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: false
    },
    etage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codePostal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ville: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pays: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}