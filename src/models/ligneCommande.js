module.exports = (sequelize, DataTypes) => {
  return sequelize.define('LigneCommande', {
    idLigneCommande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}