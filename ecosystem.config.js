// 환경변수에 관하여, 이 코드는 필요햐지 않거나 정상 작동하지 않는 것 같다.
// 터미널에서 환경변수로 비밀번호를 줘 놓으면, 이 코드가 없더라도 pm2 로 서버가 정상적으로 열리고,
// node와는 달리, 터미널이 꺼지더라도 포트가 계속 유지되고 비밀번호(환경변수) 역시 유지되고 있는 듯
// 그래서 지금도 기능이 정상 작동하는 것 같다.

// module.exports = {
//   apps: [
//     {
//       script: "./app.js",
//       env: {
//         DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
//       },
//       env_production: {
//         DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
//       },
//     },
//   ],

//   // deploy: {
//   //   production: {
//   //     user: "SSH_USERNAME",
//   //     host: "SSH_HOSTMACHINE",
//   //     ref: "origin/master",
//   //     repo: "GIT_REPOSITORY",
//   //     path: "DESTINATION_PATH",
//   //     "pre-deploy-local": "",
//   //     "post-deploy":
//   //       "npm install && pm2 reload ecosystem.config.js --env production",
//   //     "pre-setup": "",
//   //   },
//   // },
// };
