const { Ship } = require('../models')

class ShipController {
    static getShip(req,res){
        Ship.findAll() 
        .then(result => {
            res.render('ship.ejs', { ships : result })
        })
        .catch(err => {
            console.log(err)
        })
    }
    static addFormShip(req,res){
        res.render('addShip.ejs')
    }
    static addShip(req,res){
        const { name, type, power } = req.body;
        Ship.create({
            name,
            type,
            power
        })
        .then(result => {
            res.redirect('/ships')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static deleteShip(req,res){
        const id = req.params.id
        Ship.destroy({
            where : { id }
        })    
        .then(() => {
            res.redirect('/ships')
        })    
        .catch((err) => {
            res.send(err)
        })
    }
    
}

module.exports = ShipController