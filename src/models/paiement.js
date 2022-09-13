module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Paiement', {
    idPaiement: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}