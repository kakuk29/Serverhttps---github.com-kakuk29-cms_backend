module.exports = (sequelize, DataTypes) => {
  return sequelize.define('CategorieProduit', {
    idCategorieProduit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}