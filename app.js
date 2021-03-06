const express = require("express");

// const dotenv = require("dotenv");
// dotenv.config();

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const usersRouter = require("./routes/users");
const linksRouter = require("./routes/links");

const { urls } = require("./models");

const morgan = require("morgan");

const app = express();
const port = 13306;

app.use(
  session({
    secret: "@codestates",
    resave: false,
    saveUninitialized: true,
  })
);

let whitelist = [
  "http://localhost:3000",
  "http://shortlyaws-client.s3-website.ap-northeast-2.amazonaws.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    console.log(`origin`, origin);
    if (!origin || whitelist.indexOf(origin) !== -1) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
// app.use(cors()); // cors
// app.use(
//   cors({
//     origin: [
//       "http://shortlyaws-client.s3-website.ap-northeast-2.amazonaws.com:13306",
//       // "localhost:3000",
//     ],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// ? POSTMAN을 통한 test에 필요할지도 모릅니다. logging을 활용하세요.
// app.use(morgan('dev'));

// TODO : GET / 요청에 대한 응답을 작성해주세요. (api 구현을 가볍게 시작해보세요.)
// app. ...
app.get("/", (req, res) => {
  // if (err) {
  //   return err;
  // }
  res.status(200).send("Success");
});

app.get("/D*", (req, res) => {
  // "/D*"  :  D 로 시작하는 링크로 get 요청이 들어오면,
  // (만들어진 리스트의 각각의 링크를 눌러 접속하면,) (예시 : http://3.20.232.121:13306/D16fd9 주소를 누르면,)

  // 클라이언트의 src/components/LinkItem.js 를 참고했는데,
  // 도메인을 사야 (위와 같이 ip로 나오지 않고) http://Shortly.com/D16fd9 방식으로 표현되는 것 같음..
  urls
    .findOne({
      where: {
        code: "D" + req.params[0], // req.params[0]  :  http://3.20.232.121:13306/D16fd9 중에서, "16fd9" 부분인 듯
      },
    })
    .then((result) => {
      if (result) {
        result.update({
          visits: result.visits + 1,
        });
        res.redirect(result.url); // 찾은 결과의 url로 redirect 해 준다. // 이걸
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.use("/user", usersRouter);
app.use("/links", linksRouter);

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`app is listening in PORT ${app.get("port")}`);
});

module.exports = app;
