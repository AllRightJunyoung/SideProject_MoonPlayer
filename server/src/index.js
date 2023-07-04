const express = require("express");
const bodyParser = require("body-parser"); //ajax 요청의 데이터를 req.body객체로 만들어준다.
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session"); //세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장 , req.sesstion객체에 유지
const morgan = require("morgan");
dotenv.config();
const musicRoutes = require("./routes/music");
const authRoutes = require("./routes/auth");
const app = express();

app.set("port", process.env.PORT);
app.use(morgan("dev")); //에러로그 트래킹
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET)); // 요청에 동봉된쿠키를 해석하여 req.cookies객체로만듬
// 세션 관리시 클라이언트에 쿠키 전송
app.use(
  session({
    resave: false, // false로해놔야 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장
    saveUninitialized: false, // 세션에 저장할내역이없더라도 다시 젖아할지 설정
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true, //클라이언트에서 쿠키를 확인못함
      secure: false, // https가 아닌환경에서도 사용가능
    },
  })
);

app.use("/api/music", musicRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(
    process.env.MONGODB_CONNECTION_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } //https://mongodb.github.io/node-mongodb-native/3.3/reference/unified-topology/ 참고하기 나중에
  )
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(app.get("port"), "번에서 동작중");
    });
  })
  .catch((err) => {
    console.log(err);
  });
