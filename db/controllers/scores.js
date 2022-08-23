const { Scores } = require(__basedir + "/db/models");

const createScore = async (scoreObj) => {
  const score = await Scores.findOne({ wallet: scoreObj.wallet });

  if (!score) {
    return Scores.create(scoreObj);
  }
  if (score.score < scoreObj.score) {
    score.score = scoreObj.score;
    return score.save();
  }

  return score;
};

const getScores = () => {
  const scores = Scores.find()
    .sort([["score", -1]])
    .limit(8)
    .lean();

  return scores;
};

module.exports = {
  createScore,
  getScores,
};
