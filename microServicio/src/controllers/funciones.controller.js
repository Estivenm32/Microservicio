//Conxión a PostgreSql
const {Pool} = require('pg');
const { user } = require('pg/lib/defaults');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'dbprueba',
    port: '5432'
})

//Creación de rutas - funciones


//Empleado
const getUsers = async (req, res)=> {
    const response = await pool.query('SELECT * FROM public."Empleado"');
    res.status(200).json(response.rows)
}

const getUserId = async (req, res)=> {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM public."Empleado" WHERE codigo = $1', [id]);
    res.json(response.rows)
}

const createUsers = async (req, res)=> {

    const {codigo, nif, nombre, apellido1, apellido2, codigo_departamento} = req.body;
    const response = await pool.query('INSERT INTO public."Empleado" (codigo, nif, nombre, apellido1, apellido2, codigo_departamento) VALUES ($1, $2, $3, $4, $5, $6)', [codigo, nif, nombre, apellido1, apellido2, codigo_departamento]);
    console.log(response);
    res.send('Usuario Creado');  
}

const updateUsers = async (req, res)=> {
    const codigo = req.params.id;
    const {nif, nombre, apellido1, apellido2, codigo_departamento} = req.body;
  
    const response = await pool.query('UPDATE public."Empleado" SET nif=$1, nombre=$2, apellido1=$3, apellido2=$4, codigo_departamento=$5 WHERE codigo = $6', [
        nif, 
        nombre, 
        apellido1, 
        apellido2, 
        codigo_departamento, 
        codigo
    ]);
    res.json('Usuario Actualizado')
    
}

const deleteUsers = async (req, res)=> {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM public."Empleado" WHERE codigo = $1', [id]);
    res.json(response.rows + 'Usuario Eliminado')
}


//Departamento

const getDepartment = async (req, res)=> {
    const response = await pool.query('SELECT * FROM public."Departamento"');
    res.status(200).json(response.rows)
}

const getIdDepartment = async (req, res)=> {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM public."Departamento" WHERE codigo = $1', [id]);
    res.json(response.rows)
}

const createDepartment = async (req, res)=> {

    const {codigo, nombre, presupuesto} = req.body;
    const response = await pool.query('INSERT INTO public."Departamento" (codigo, nombre, presupuesto) VALUES ($1, $2, $3)', [codigo, nombre, presupuesto]);
    console.log(response);
    res.send('Departamento Creado');  
}

const updateDepartment = async (req, res)=> {
    const codigo = req.params.id;
    const {nombre, presupuesto} = req.body;
  
    const response = await pool.query('UPDATE public."Departamento" SET nombre=$1, presupuesto=$2 WHERE codigo = $3', [
        nombre, 
        presupuesto,
        codigo
    ]);
    res.json('Departamento Actualizado')
    
}

const deleteDepartment = async (req, res)=> {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM public."Departamento" WHERE codigo = $1', [id]);
    res.json(response.rows + 'Departamento Eliminado')
}

module.exports ={
    getUsers,
    createUsers,
    getUserId,
    deleteUsers,
    updateUsers,
    getDepartment,
    createDepartment,
    getIdDepartment,
    deleteDepartment,
    updateDepartment
}

