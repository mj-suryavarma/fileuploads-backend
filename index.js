const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./database.js');
const cors = require('cors');

///  config
require('dotenv').config();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

const port = process.env.PORT || 5000
// import routes
const fileRoutes = require('./routes/fileupload');


/// routes 
app.use('/api', fileRoutes);

app.use('/',()=>{
    res.status(200).send('hello world from backend');
})



const start  = () =>{
    connectDB(process.env.MONGO_URI);
    app.listen(port , () =>{
        console.log(`server listing the port no ${port}`)
    })
}

start();


