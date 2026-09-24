const express = require('express');
const { getPostController } = require('./PostController');
const PostRoutes = express.Router();

PostRoutes.use("/", getPostController);

module.exports = PostRoutes;