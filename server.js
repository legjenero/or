const {Pool} = require("pg")
const express = require ("express")
const app = express();
app.use(express.json())
require('dotenv').config()

const pool = new Pool({
    "user": "postgres",
    "password" : "lealea",
    "host" : "localhost",
    "port" : 5432,
    "database" : "Parkovi"
})
const { auth } = require('express-openid-connect');
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
  };
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//auth

 
app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get("/datatable", (req, res) => res.sendFile(`${__dirname}/datatable.html`))

//get svih
app.get("/parkovi", async (req, res) => {
    const rows = await readTodos();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})
//get pomocu id
app.get('/parkovi/:id', async(req, res)=> {
    const parkovi= await readTodos()
    var park = parkovi.getDataById(req.params.id);
    res.setHeader("content-type", "application/json")
    res.json(park);
  });

//3 get
app.get("/jezera/:id", async (req, res) => {
    const rows = await readJezera();
    var row = rows.getDataById(req.params.id);
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(row))
})

app.get("/jezera", async (req, res) => {
    const rows = await readJezera();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})

app.get("/parkovi/np", async (req, res) => {
    const rows = await readNP();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})

//post
app.post('/dodajJezero', async (req,res) =>{
    var nazivJezera = req.body.nazivJezera;
    var velicinaJezera = req.body.velicinaJezera;
    var dubina = req.body.dubina;
    var id = req.body.id;
    insertInto();
})

//put
app.put('/urediJezero/:id', async (req,res) => {
    var nazivJezera = req.body.nazivJezera;
    var velicinaJezera = req.body.velicinaJezera;
    var dubina = req.body.dubina;
    var id = req.body.id;
    updateJezero(id);
})



exports.getDataById = function(id) {
   for (var i = 0; i < data.length; i++) {
     if (data[i].id == id) return data[i];
            }
};

app.post("/parkovi", async (req, res) => {
    let result = {}
    try{
        const reqJson = req.body;
        
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


app.listen(8080, () => console.log("Web server is listening.. on port 8080"))

start()

async function start() {
    await connect();
}

async function connect() {
    try {
        await pool.connect(); 
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}

async function readTodos() {
    try {
    const results = await pool.query("select * from parkovijezera");
    return results.rows;
    }
    catch(e){
        return [];
    }
}


async function readJezera() {
    try {
    const results = await pool.query("select * from jezero");
    return results.rows;
    }
    catch(e){
        return [];
    }
}

async function readNP() {
    try {
    const results = await pool.query("select * from parkovi where vrsta=NP");
    return results.rows;
    }
    catch(e){
        return [];
    }
}

async function insertInto() {
    try {
    await pool.query(`INSERT INTO jezero (nazivJezera, velicinaJezera,dubina,id)
    VALUES($1, $2, $3, $4)`, [nazivJezera,velicinaJezera, dubina, id]);
    }
    catch(e){
        return [];
    }
}

async function updateJezero(iid) {
    try {
    await pool.query(`UPDATE jezero SET nazivJezera=$1, velicinaJezera = $2, dubina = $3, id = $4 where id = $5
    VALUES($1, $2, $3, $4, $5)`, [nazivJezera,velicinaJezera, dubina, id,iid]);
    }
    catch(e){
        return [];
    }
}
