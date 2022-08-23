const { scores } = require(__basedir + "/db/controllers");

const getScoresData = async () => {
  const result = await scores.getScores();

  return {
    scores: result,
  };
};

module.exports = {
  getScoresData,
};
