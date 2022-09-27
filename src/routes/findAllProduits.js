const { Produit } = require('../db/sequelize')
const { Op } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/produits', auth, (req, res) => {
    if(req.query.nom) {
      const nom = req.query.nom
      const limit = parseInt(req.query.limit) || 5

      if(nom.length < 2) {
        const message = `Le terme de recherche doit contenir au minimum 2 caractères.`
        return res.status(400).json({ message })        
      }

      return Produit.findAndCountAll({ 
        where: { 
          nom: {
            [Op.or]: {
              [Op.like]: `%${nom}%`,
              [Op.startsWith]: capitalize(nom)
            }
          }
        },
        order: ['nom'],
        limit: limit
      })
      .then(({count, rows}) => {
        const message = `Il y a ${count} qui correspondent au terme de recherche ${nom}.`
        return res.json({ message, data: rows })
      })
    } 
    else {
      Produit.findAll({ order: ['nom'] })
      .then(produits => {
        const message = 'La liste des produits a bien été récupéré.'
        res.json({ message, data: produits })
      })
      .catch(error => {
        const message = `La liste des produits n'a pas pu être récupéré. 
                         Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
    }
  })
}