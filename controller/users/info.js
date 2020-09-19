const { users } = require("../../models");

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.
    let session = req.session;

    if (!session.userid) {
      res.status(401).send("need user session");
    } else {
      users
        .findOne({
          // 여기를 findAll로 주면, 아래 data에서 '0' 이라는 뜬금없는 값이 추가된다(뭐임?)
          // findAll / findOne 차이를 고민할 것.
          where: { id: session.userid },
        })
        .then((data) => {
          // console.log(data);
          res.status(200).json(data);
        });
    }

    // res.end();
  },
};
