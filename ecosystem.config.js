module.exports = {
  apps: [
    {
      script: "./app.js",
      env: {
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
      },
      env_production: {
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
      },
    },
  ],

  // deploy: {
  //   production: {
  //     user: "SSH_USERNAME",
  //     host: "SSH_HOSTMACHINE",
  //     ref: "origin/master",
  //     repo: "GIT_REPOSITORY",
  //     path: "DESTINATION_PATH",
  //     "pre-deploy-local": "",
  //     "post-deploy":
  //       "npm install && pm2 reload ecosystem.config.js --env production",
  //     "pre-setup": "",
  //   },
  // },
};
