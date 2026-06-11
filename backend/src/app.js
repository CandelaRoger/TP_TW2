const express = require('express');
const cors = require('cors');
const sql = require('mssql');
require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(express.json());


const config = {
  user: process.env.DB_USER,             
  password: process.env.DB_PASSWORD, 
  server: process.env.DB_SERVER, 
  database: process.env.DB_DATABASE, 
 options: {
  encrypt: process.env.DB_ENCRYPT === 'true',
  trustServerCertificate: true,
  cryptoCredentialsDetails: { minVersion: 'TLSv1' }  
}
};


app.get('/api/datos', async (req, res) => {
  try {
    
    const result = await sql.query`SELECT * FROM Productos`; 
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


async function startServer() {
  try {
    
    await sql.connect(config);
    console.log('¡Conectado exitosamente a SQL Server!');

    
    const PORT = process.env.PORT || 3000;
     app.listen(PORT, () => {
     console.log(`Servidor ejecutándose en puerto ${PORT}`);
});

  } catch (err) {
    console.error('ERROR CRÍTICO: No se pudo conectar a SQL Server:', err);
    process.exit(1); 
  }
}

startServer();