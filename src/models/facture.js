module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Facture', {
    idFacture: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero: {
      type: DataTypes.INTEGER,
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