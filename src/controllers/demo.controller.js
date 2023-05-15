const getAll = (req, res)=>{
    res.status(200).json({mensaje: "Hola Mundo"})
}

const getById =  (req, res)=>{
    const id = req.params.id
    res.status(200).json({mensaje: `recibí el id nro: ${id}`})
}

const deleteById =  (req, res)=>{
    const id = req.params.id
    res.status(200).json({mensaje: `recibí el id nro para ser elminiado: ${id}`})
}

module.exports = { getAll, getById, deleteById  }