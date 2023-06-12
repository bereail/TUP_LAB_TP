import sql from 'ssql';

const config  = {
    user: 'bere',
    password: '1230',
    server: 'servidor',
    database: 'basededatos',
    options: {
        trustedConnection: true, //si estas utilizando la autentiacion de window
    }
}

//ejecutar consulta sql utilizando la conexion establecida
const executeQuery = async () => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM tu_tabla');
        console.log(result.recordset); //resultado de la consulta
        sql.close();
    }catch(error){
        console.log(error);
    }
}

executeQuery();