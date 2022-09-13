module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Produit', {
    idProduit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prixHT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TVA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TTC: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codeBarre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}