const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./database.js');
const cors = require('cors');
const cloudinary = require('cloudinary').v2


///  config
require('dotenv').config();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use(express.urlencoded({ extended: true}));


//// cloud config   
cloudinary.config({ 
    cloud_name: 'mj-web', 
    api_key: '744843369658319', 
    api_secret: 'ocrPMZdEp904Woop492rIor_NeE' 
  });

const port = process.env.PORT || 5000
// import routes
const fileRoutes = require('./routes/fileupload');


/// routes 
app.use('/api', fileRoutes);

app.use('/',(req, res)=>{
    res.status(200).send('hello world from backend');
})



const start  = () =>{
    connectDB(process.env.MONGO_URI);
    app.listen(port , () =>{
        console.log(`server listing the port no ${port}`)
    })
}

start();


