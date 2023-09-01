const express = require('express');
const path = require("path");
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbconfig')
const port = process.env.PORT || 3000;
const app = express();

const registrationformRoutes = require('./calvin-ogwang/controllers/registrationformRoutes');



app.use(express.urlencoded({ extended: false}))
app.use(express.json())

connectDB();

app.engine ("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views" , path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', registrationformRoutes);





app.listen(port, ()=>console.log(`server is running at http://localhost:${port}`));