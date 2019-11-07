const Registro = require("../Models/register");

//GET ALL
const getAll = (req, res)=>{
    Registro.find((err, registros)=>{
        if(err) return res.status(500).json({mensaje:"error :v"})

        return res.status(200).json({registros});

    })

}

//GET ONE 
const getOneById = (req, res)=>{
    Registro.findById((err, registros)=>{
        if(err) return res.status(500).json({mensaje:"error :v"})

        return res.status(200).json({registros});

    })


}

//INSERT
const insert = (req, res)=>{
    let Registro = new Registro({
        carnet: req.body.carnet,
        schedule: req.body.schedule,
        isLate: req.body.isLate
    });
    registro.save((err)=>{
        if(err) return res.status(500).json({mensaje:"error :v"})
        res.status(201).json({mensaje: "yay!"})
    });

}

//UPDATE
const update = (req, res)=>{

}

//DELETE
const erase = (req, res)=>{

}

module.exports = {

}