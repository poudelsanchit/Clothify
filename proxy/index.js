import express from "express";
import cors from "cors";
import Khalti from "khalti-js/dist/index.mjs";

const app = express();

const k = new Khalti({
  mode: "Sandbox",
  returnUrl: "http://localhost:3030/cart",
  websiteUrl: "http://localhost:3030",
  secretKey: "add the token",
});

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const returnUrl = await k.getPaymentUrl({
    amount: req.body.amount,
    purchase_order_id: req.body.purchaseOrderId,
    purchase_order_name: req.body.purchaseOrderName,
  });
  res.json({ returnUrl });
});

app.listen(3030, () => console.log("Server running on port 3030"));
