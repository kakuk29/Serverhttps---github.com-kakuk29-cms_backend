const { Produit } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/produits/:id', auth, (req, res) => {
    Produit.findByPk(req.params.id)
      .then(produit => {
        if(produit === null) {
          const message = `Le produit demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un produit a bien été trouvé.'
        res.json({ message, data: produit })
      })
      .catch(error => {
        const message = `Le produit n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}