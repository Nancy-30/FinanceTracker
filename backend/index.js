const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
const UserRoutes = require("./routes/user");
const TransRoutes = require("./routes/transactionHandling");

const mongoose = require("mongoose");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", UserRoutes);
app.use("/trans", TransRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server on Port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error}`);
  });
