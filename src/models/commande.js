module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Commande', {
    idCommande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}