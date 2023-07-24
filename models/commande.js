const mongoose=require("mongoose");
const schema=mongoose.Schema;
const commandeSchema = new schema({
    name_user:String,
    lastname_user:String,
    name_prod:String,
    img_prod:String,
   qte_prod:String,
   price:String,
    });
    const Commande = mongoose.model('Commande', commandeSchema);


    module.exports=Commande;

