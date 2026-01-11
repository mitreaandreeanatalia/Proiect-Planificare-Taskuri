const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db'); // Importam conexiunea din config/db.js
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Serverul este ONLINE si baza de date este conectata!');
});

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }) 
    .then(() => {
        console.log("-----------------------------------------");
        console.log("CONEXIUNE REUSITA CU BAZA DE DATE!");
        console.log("Tabelele au fost create automat in XAMPP.");
        console.log("-----------------------------------------");
        
        app.listen(PORT, () => {
            console.log(`Serverul ruleaza pe http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error("EROARE LA BAZA DE DATE:", err);
    });