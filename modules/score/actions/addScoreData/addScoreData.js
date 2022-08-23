const { scores } = require(__basedir + "/db/controllers");

const addScoreData = async (scoreObj) => {
  const result = await scores.createScore(scoreObj);

  return {
    score: result,
  };
};

module.exports = {
  addScoreData,
};
