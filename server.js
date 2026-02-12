//pour importer les dépendances
require('dotenv').config();
const express = require('express');
const {Pool} = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path'); 


const app = express();

app.use(express.json());
//sert les fichiers statiques (index.html,style.css, script.js)
app.use(express.static(path.join(__dirname,'public')));

//configuration de la connexion mysql
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// ---------Routes authentification: création de route pour un nouvelle utilisateur----------
/**
 * Inscription d'un nouvelle utilisateur
 */

app.post('/api/auth/register', async (req, res) =>{
    const {email, password} = req.body;

    //gestion d'erreur
    try{
        // 1. On hache le mdp (salage+ hachage 10 tours)
        const passwordHash = await bcrypt.hash(password, 10);

        // 2. insertion utilisateur dans la table users
        await pool.query(
            'INSERT INTO users(email, password_hash) VALUES ($1, $2)',
            [email, passwordHash]
        );
        res.status(201).json({message: "Utilisateur crée avec succés !!"});
    }catch (error){
        console.error(error);
        res.status(500).json({error: "Erreur lors de l'inscription (Email peut-être déjà utilisé)"})
    }
});
