require("dotenv").config(); // Add this at the very top

const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use env variable
const uuid = require("uuid");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("It is working fine");
});

app.post("/payment", (req, res) => {
  const { total, token } = req.body;
  console.log(total);
  const idempontencykey = uuid();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) =>
      stripe.charges.create(
        {
          amount: total * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: "This is my product",
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencykey }
      )
    )
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json({ message: err.message })); // Add error handling
});

// listen
app.listen(1234, () => {
  console.log("Listening at port 1234");
});
