const { Pirate } = require('../models')

class PirateController {
    static getPirate(req,res){
        Pirate.findAll() 
        .then(result => {
            res.render('pirate.ejs', { pirates : result })
        })
        .catch(err => {
            console.log(err)
        })
    }
    static addFormPirate(req,res){
        res.render('addPirate.ejs')
    }
    static addPirate(req,res){
        const { name, status, haki } = req.body;
        Pirate.create({
            name,
            status,
            haki
        })
        .then(result => {
            res.redirect('/pirates')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static deletePirate(req,res){
        const id = req.params.id
        Pirate.destroy({
            where : { id }
        })    
        .then(() => {
            res.redirect('/pirates')
        })    
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = PirateController