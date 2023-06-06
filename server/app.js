require("dotenv").config();

const express = require("express");
let cors = require('cors');
const stripe = require('stripe')('sk_test_51NFoihEG0Ge7fcQZanlh4pFU2UUATPuog7kFFBeCGZ5h3tJuoXJGEItOCWvEQt96cTTP54DNwMXk3s4YRHXCaNsn00ShighAcT')
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

const db = require("./db");
const usersRouter = require("./controllers/users");
const sessionRouter = require("./controllers/session");
const productsRouter = require("./controllers/products");
const wishlistRouter = require("./controllers/wishlist-products")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
  })
);

app.use(express.static('public'))
app.use(cors())
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/session", sessionRouter);
app.use("/api/products", productsRouter);
app.use("/api/wishlist_products", wishlistRouter)

app.post("/checkout", async (req, res) => {
  console.log(req.body)
  const items = req.body.items
  let lineItems = [];
  items.forEach(item => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel"
  })

  console.log(hello)

  res.send(JSON.stringify({
    url: session.url,
    items: items
  }))
})

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});