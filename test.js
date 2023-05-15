const tareas = [ 
    {id: 25, nombre:"x"},
    {id: 12, nombre:"z"},
    {id: 14, nombre:"y"},
    {id: 23, nombre:"a"}
]

const ids = tareas.map( e => e.id) //lista [25, 12, 14, 23] 
//La max de Math nececita una secuencia 25,12,14,23  que la obtenemos de utilizar el operador ...
//const maxId = tareas.length > 0 ? Math.max(...ids) + 1 : 1

const maxId = ids.reduce ( (e1, e2) => e1 > e2 ? e1: e2, 0 )
console.log(maxId)


tareas.push( {id: maxId + 1, nombre:"xxxx"}   )

const idxABorrar = tareas.findIndex( e=> e.nombre=="a")
if (idxABorrar >= 0) {
    tareas.splice(idxABorrar, 1)
}

const filtradas = tareas.filter( e=> e.id >= 20)

console.log(tareas)
console.log(filtradas)
