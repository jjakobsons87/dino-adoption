require('dotenv').config();

const productData = require('../../data/accessory');
const connectDB = require('./config/connection.js')
const Product = require('./models/Accessory');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log("Data Import Success")

        process.exit();
    } catch (error) {
        console.error("error with data import");
        process.exit(1);
    }
};

importData();