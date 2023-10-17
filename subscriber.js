const mongoose = require("mongoose"),
 subscriberSchema = mongoose.Schema({
 name: String,
 email: String,
 zipCode: Number
 });
module.exports = mongoose.model("Subscriber", subscriberSchema);


var subscriber1 = new Subscriber({
    name: "Oskari Lehto",
    email: "oskari@oskari.com"
   });

   Subscriber.create(
    {
    name: "Oskari Lehto",
    email: "oskari@oskari.com"
    }, 
   )