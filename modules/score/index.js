const { addScore, getScores } = require("./controller");

module.exports = (router) => {
  router.post("/scores", addScore);
  router.get("/scores", getScores);
};
