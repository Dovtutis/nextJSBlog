const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Dovtutis",
        mongodb_password: "memoriam",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-project-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Dovtutis",
      mongodb_password: "memoriam",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-project",
    },
  };
};
