/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Article } = require('../models/Article');

/**
* Creates the data
*
* article Article data to be created
* returns article
* */
const createarticle = ({ article }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Article(article).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* articleId String the Id parameter
* no response value expected for this operation
* */
const deletearticle = ({ articleId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Article.findOneAndDelete({ _id:articleId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllarticle = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Article.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* articleId String the Id parameter
* returns article
* */
const getarticle = ({ articleId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Article.findById(articleId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* articleId String the Id parameter
* article Article data to be updated (optional)
* returns article
* */
const updatearticle = ({ articleId, article }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Article.findOneAndUpdate({ _id:articleId },article).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createarticle,
  deletearticle,
  getAllarticle,
  getarticle,
  updatearticle,
};
