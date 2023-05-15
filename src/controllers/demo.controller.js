const tareas = require('../../data/tarea.json')

const getAll = (req, res)=>{
    res.status(200).json(tareas)
}

const getById =  (req, res)=>{
    const id = req.params.id
    res.status(200).json({mensaje: `recibí el id nro: ${id}`})
}

const deleteById =  (req, res)=>{
    const id = req.params.id
    res.status(200).json({mensaje: `recibí el id nro para ser elminiado: ${id}`})
}

const add = (req, res)=>{
    const nombre = req.body.nombre
    if (nombre.length > 25 ) {
        const ids = tareas.map( e => e.id)
        const maxId = tareas.length > 0 ? Math.max(...ids) + 1 : 1
        tareas.push( {id: maxId, nombre})
        res.status(201).json(tareas[tareas.length - 1])
    } else {
        res.status(400).json(`El nombre ${nombre} es corto. No se puede agregar la tarea}`)
    }
}


module.exports = { getAll, getById, deleteById, add  }