const {Pool} = require("pg")
const express = require ("express")
const app = express();
app.use(express.json())

const pool = new Pool({
    "user": "postgres",
    "password" : "lealea",
    "host" : "localhost",
    "port" : 5432,
    "database" : "Parkovi"
})

 
app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get("/datatable", (req, res) => res.sendFile(`${__dirname}/datatable.html`))


app.get("/parkovi", async (req, res) => {
    const rows = await readTodos();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})



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
