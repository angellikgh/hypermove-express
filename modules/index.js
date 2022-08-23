/**
 * @file index.js
 * @summary Initiate and expose routes
 * */
const user = require("./user");
const score = require("./score");

const initiateRoutes = (router) => {
  // all modules with routes will be added here
  user(router);
  score(router);
};

module.exports = initiateRoutes;
