const { async } = require('@firebase/util');
const express= require('express')
const stripe=require('stripe')('sk_test_51MCbukSBu6hpYFcYHZw0qbPJvjmNmPxr1GqdkX91tV88YebTqIVwx1nBAkWGHQvcCpqAJczRWlWMlZH3Zc4s3eSq009H36YzTn')

const app=express();
const port = 8000;

app.use(express.json());
app.use(cors());


//payment api 

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

app.listen(port, ()=>console.log("listening on the port",port));