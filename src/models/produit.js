module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Produit', {
    idProduit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Le nom est déjà pris.'
      },
      validate: {
        len: {
          args: [1, 25],
          msg: 'Le nom doit contenir entre 1 et 25 caractères.'
        },
        notEmpty: { msg: 'Le nom ne peut pas être vide.' },
        notNull: { msg: 'Le nom est une propriété requise.'}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10, 500],
          msg: 'Le nom doit contenir entre 10 et 500 caractères.'
        },
        notEmpty: { msg: 'La description ne peut pas être vide.' },
        notNull: { msg: 'La description est une propriété requise.'}
      }
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'L\'image est une propriété requise.'}
      }
    },
    prixHT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entiers pour le prix HT.' },
        min: {
          args: [0],
          msg: 'Le prix doit être supérieurs ou égales à 0 Euro.'
        },
        max: {
          args: [100000],
          msg: 'Le prix doit être inférieures ou égales à 100 000 Euros.'
        },
        notNull: { msg: 'Le prix HT est une propriété requise.'}
      }
    },
    TVA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TTC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entiers pour le prix TTC.' },
        min: {
          args: [0],
          msg: 'Le prix TTC doit être supérieurs ou égales à 0 Euro.'
        },
        max: {
          args: [100000],
          msg: 'Le prix TTC doit être inférieures ou égales à 100 000 Euros.'
        },
        notNull: { msg: 'Le prix TTC est une propriété requise.'}
      }
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