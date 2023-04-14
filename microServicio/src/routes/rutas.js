//Definir rutas del servidor
const {Router} = require('express');
const router = Router(); 

const { getUsers, createUsers, getUserId, deleteUsers, updateUsers, getDepartment,  getIdDepartment, createDepartment, deleteDepartment, updateDepartment } = require('../controllers/funciones.controller');

//Importar de rutas updateDepartment

//Empleado
router.get('/Consultar', getUsers)
router.get('/Consultar/:id', getUserId)
router.post('/Crear', createUsers)
router.delete('/Borrar/:id', deleteUsers);
router.put('/Actualizar/:id', updateUsers)

//Departamento
router.get('/ConsultarDep', getDepartment)
router.get('/ConsultarDep/:id', getIdDepartment)
router.post('/CrearDep', createDepartment)
router.delete('/BorrarDep/:id', deleteDepartment);
router.put('/ActualizarDep/:id', updateDepartment)

module.exports = router