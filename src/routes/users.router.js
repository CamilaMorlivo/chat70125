const {Router} = require('express')

const router = Router()

function auth(req, res, next){
    req.user = {
         name: 'fede',
         role: 'admin'
    }
    if(req.user.role != 'admin'){
        res.send('no puede avanzar a partir de aquí')
    }
    next()
}  


const users = []

router.get('/', auth,(peticion, respuesta) => {
    respuesta.send({data: users})
})

router.post('/', (peticion, respuesta) => {
    const { body } = peticion
    if(!body.email || !body.password){
        return respuesta.status(400).send({status: 'error', error: 'falta data' })
    } 
    users.push({ id: users.length + 1, ...body })
    respuesta.status(200).send({data:users})
})

router.put('/', (peticion, respuesta) => {
    respuesta.send('put hola mundo')
})

router.delete('/:uid', (peticion, respuesta) => {
    const {uid} = peticion.params
    const nuevaLista = users.filter(user => user.id != Number(uid))
    respuesta.send(nuevaLista)
})

router.get('/productos', )


module.exports = router 