const mongoose=require("mongoose");
const Product=require("./models/product")

const seedData=async ()=>{
   await Product.insertMany(products);
   console.log("DataBase seeded");
}
module.exports=seedData;