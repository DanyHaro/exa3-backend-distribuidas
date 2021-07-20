// import { Pool } from 'pg'
const Pool = require('pg')


export const pool = new Pool({
    connectionString: process.env.d8n66d9kscmbp1    ,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-44-194-145-230.compute-1.amazonaws.com',
    user: 'itbggsvapohqsu',
    password: '4c2eb98f833ec8f0fa62d4c1ddad5ad5179e173a502d86104b4c44e7f0447fe0',
    database: 'd8n66d9kscmbp1',
    port: 5432,
    
});
