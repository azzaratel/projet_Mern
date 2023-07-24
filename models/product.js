const mongoose=require("mongoose");
const schema=mongoose.Schema;
const productSchema = new schema({
   name_product:String,
   image_product:String,
   descrition:String,
   prix:String,
   categorie:String,
   
    });
    const Product = mongoose.model('Product', productSchema);


    module.exports=Product;