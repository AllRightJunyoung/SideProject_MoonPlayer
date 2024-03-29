const express = require("express");
const bodyParser = require("body-parser"); //ajax 요청의 데이터를 req.body객체로 만들어준다.
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();

const { genreRoutes, authRoutes, userPlayListRoutes } = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.use(morgan("dev")); //에러로그 트래킹
app.use(
  cors({
    origin: process.env.CLIENT_URI,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/music", genreRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/userPlayList", userPlayListRoutes);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(app.get("port"), "번에서 동작중");
    });
  })
  .catch((err) => {
    console.log(err);
  });
