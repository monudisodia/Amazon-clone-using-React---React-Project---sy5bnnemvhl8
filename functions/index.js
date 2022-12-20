const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });




//http://127.0.0.1:5001/clone-a08c5/us-central1/api
const express= require('express')
const cors= require('cors')
const stripe=require('stripe')('sk_test_51MCbukSBu6hpYFcYHZw0qbPJvjmNmPxr1GqdkX91tV88YebTqIVwx1nBAkWGHQvcCpqAJczRWlWMlZH3Zc4s3eSq009H36YzTn')

const app=express();
const port = 8000;

app.use(express.json());
app.use(cors({origin: true}));

app.get("/",(req,res)=>res.status(200).send("hello from cloud"));


app.post('/payment/create',async (req,resp)=>{
    const total=req.query.total;
    console.log("payment request recieved for Rupees",total);

    const payment= await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    });
    resp.status(201).send({
        clientSecret:payment.client_secret,

    });

})

exports.api=functions.https.onRequest(app);