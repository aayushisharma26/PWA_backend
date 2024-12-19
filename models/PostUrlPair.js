const mongoose = require('mongoose');

const PostUrlPairSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('PostUrlPair', PostUrlPairSchema);