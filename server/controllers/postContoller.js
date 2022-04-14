
const getPosts = (req, res) => {
    res.send('post')
}

const createPosts = (req, res) => {
    res.send('post')
}

const getPost = (req, res) => {
    const { id } = req.params;
    res.send(`post from server: ${id}`);
}

const updatePost = (req, res) => {
    res.send('post')
}

const deletePost = (req, res) => {
    res.send('post')
}

module.exports = {
    getPosts,
    createPosts,
    getPost,
    updatePost,
    deletePost
}
