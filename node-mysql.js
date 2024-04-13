const mydb = require('mysql')


const conn = mydb.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.database

});

conn.connect((err)=>{
    if(err) throw err;
    console.log('connaction made')
})