const mongoose = require("mongoose");
mongoose.connect(
 "mongodb://localhost:27017/recipe_db",
 {useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
   });

   const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
    vip: Boolean,
   });

const Subscriber
= mongoose.model("Subscriber", subscriberSchema);

var subscriber1 = new Subscriber({
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
   });

   Subscriber.create(
    {
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
    }, 
   )





