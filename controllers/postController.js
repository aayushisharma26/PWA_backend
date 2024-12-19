const PostUrlPair = require('../models/PostUrlPair');

exports.savePostUrlPair = async (req, res) => {
    const { postId, url } = req.body;

    try {
        const newPair = new PostUrlPair({ postId, url });
        await newPair.save();
        res.status(201).json({ message: 'Post-URL pair saved!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save post-URL pair' });
    }
};