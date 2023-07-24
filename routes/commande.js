const express = require("express");
const Commande = require("../models/commande");

const commandeRouter = express.Router();
//add Commande
commandeRouter.post("/add", async (req, res) => {
  try {
    const newcommande = new Commande(req.body);
    const result = await newcommande.save();
    res.send({ commande: result, msg: "commande is added" });
  } catch (error) {
    console.log(error);
  }
});
// get commande
commandeRouter.get("/", async (req, res) => {
  try {
    const result = await Commande.find();
    res.send({ commandes: result, msg: "all commandes" });
  } catch (error) {
    console.log(error);
  }
});

// delets commande
commandeRouter.delete("/:id", async (req, res) => {
  try {
    const result = await Commande.findByIdAndDelete(req.params.id);
    res.send({ msg: " commande is deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update commande
commandeRouter.put("/:id", async (req, res) => {
  try {
    const result = await Commande.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ commande: result, msg: " commande is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = commandeRouter;
