const { users } = require("../../models");

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    let userData = req.body;
    users
      .findOrCreate({
        where: { email: userData.email },
        defaults: {
          email: userData.email,
          username: userData.username,
          password: userData.password,
        },
      })
      .then(([result, created]) => {
        // console.log(result);
        if (!created) {
          return res.status(409).send("Already exists user"); // find
        } else {
          res.status(200).json(result); // Created

          /*
            const data = await result.get({ plain: true });    plain : 이건 뭐임?
            res.status(200).json(data);
          */
        }
      });
    // res.end();
  },
};
