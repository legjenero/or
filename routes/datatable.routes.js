const express = require('express');
const router = express.Router();
const db = require('../db');
var fs = require('fs');

const converter = require('json-2-csv');

router.get('/', async function (req, res, next) {
    const sqlparkovi = `SELECT * FROM parkovijezera;`;
    try {
        const rezultat = (await db.query(sqlparkovi, [])).rows;
        
        console.log(rezultat);

        res.render('datatable', {
            parkovi: rezultat,
            filter: "niz",
            atribut: "atribut"
            });
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async function (req, res, next) {
    const sqlparkovi = `SELECT * FROM drzava;`;
    try {
        const rezultat = (await db.query(sqlparkovi, [])).rows;
        console.log(rezultat);

        res.render('datatable', {
            drzave: rezultat,
            filter: req.body.filter,
            atribut: req.body.atribut, 
            });

        var filtrirano = [];

        filter = req.body.filter;
        filter = filter.toLowerCase();

        atribut = req.body.atribut;

        var parkovi = fs.readFileSync('parkovi.json');
        parkovi = JSON.parse(parkovi);
        
       for (let park of parkovi){
       
           switch(atribut){
               case "wildcard": {
                   if(park.naziv.toLowerCase().includes(filter) || park.vrsta.toLowerCase().includes(filter) || park.velicina.toLowerCase().includes(filter) 
                   || park.osnovan.toLowerCase().includes(filter) || park.rijeka.toLowerCase().includes(filter) || park.regija.toLowerCase().includes(filter) 
                   || park.stranica.toLowerCase().includes(filter) || park.najvisi_vrh.toString().includes(filter) || park.nazivJezera.toLowerCase().includes(filter)
                   || park.velicinaJezera.toLowerCase().includes(filter) || park.dubina.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
               case "naziv":{
                   if(park.naziv.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "vrsta":{
                   if(park.vrsta.toLowerCase().includes(filter))
                       filtrirano.push(park);   
                   break;
               }
   
               case "velicina":{
                   if(park.velicina.toLowerCase().includes(filter))
                       filtrirano.push(park);  
                   break;
               }
               
               case "osnovan":{
                   if(park.osnovan.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "rijeka":{
                   if(park.rijeka.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "regija":{
                   if(park.regija.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "stranica":{
                   if(park.stranica.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "najvisi_vrh":{
                   if(park.najvisi_vrh.toString().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "nazivJezera":{
                   if(park.nazivJezera.toLowerCase().includes(filter))
                       filtrirano.push(park);
                   break;
               }
   
               case "velicinaJezera":{
                if(park.velicinaJezera.toLowerCase().includes(filter))
                    filtrirano.push(park);
                break;
            }
            case "dubina":{
                if(park.dubina.toLowerCase().includes(filter))
                    filtrirano.push(park);
                break;
            }
           }
       }

      var filtrirano;

     converter.json2csv(filtrirano, (err, filtriranoCSV) => {
        if (err) {
            throw err;
        }
    
         fs.writeFileSync('filtriranoCSV.csv', filtriranoCSV); 
    });


    fs.writeFileSync('filtriranoJSON.json', JSON.stringify(filtrirano, null, 2)); 
    } catch (err) {
        console.log(err);
    }

});
module.exports = router;