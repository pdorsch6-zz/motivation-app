const Quote = require('mongoose').model('Quote');

module.exports.getAll = (req, res) => {
    Quote.find({})
        .then(quote => {
            return res.status(200).json({
                status: 'ok',
                quote: quote ? quote : [], // Ensure we always at the bare minimum send back an empty array
            });
        })
        .catch(err => {
            return res.status(500).json({
                status: 'error',
                error: err,
                message: 'An unexpected internal server error has occurred!',
            });
        });
};