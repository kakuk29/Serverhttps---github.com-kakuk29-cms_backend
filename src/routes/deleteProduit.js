const { Produit } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.delete('/api/produits/:id', auth, (req, res) => {
    Produit.findByPk(req.params.id)
      .then(produit => {        
        if(produit === null) {
          const message = `Le produit demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return Produit.destroy({ where: { id: produit.id } })
        .then(_ => {
          const message = `Le produit avec l'identifiant n°${produit.id} a bien été supprimé.`
          res.json({message, data: produit })
        })
      })
      .catch(error => {
        const message = `Le produit n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}