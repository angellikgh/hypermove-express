const { constants } = require(__basedir + "/config");
const { addScoreData, getScoresData } = require("./actions");
const { SUCCESS } = constants;

const addScore = async (req, res, next) => {
  try {
    const scoreObj = req.body;
    const data = await addScoreData(scoreObj);
    res.status(SUCCESS.CODE).send({ data });
    next();
  } catch (error) {
    res.status(error.code).send({
      error: error.message,
    });
    next();
  }
};

const getScores = async (req, res, next) => {
  try {
    const data = await getScoresData();
    res.status(SUCCESS.CODE).send({ data });
    next();
  } catch (error) {
    res.status(error.code).send({
      error: error.message,
    });
    next();
  }
};

module.exports = {
  addScore,
  getScores,
};
