module.exports = {
  apps: [
    {
      script: "./app.js",
      env: {
        DATABASE_PASSWORD: 12345678,
      },
      env_production: {
        DATABASE_PASSWORD: 12345678,
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
