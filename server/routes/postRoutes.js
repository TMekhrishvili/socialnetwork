const express = require('express');
const {
    getPosts,
    createPosts,
    getPost,
    updatePost,
    deletePost
} = require('../controllers/postContoller');

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports.postRoutes = router;
