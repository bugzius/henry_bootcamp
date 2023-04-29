const getPostsController = (req, res) => {
    res.status(200).send('Correcto desde Controller POSTS');
};

module.exports = {
    getPostsController
}