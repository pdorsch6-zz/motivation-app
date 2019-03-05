const Quote = require('mongoose').model('Quote');
const Category = require('mongoose').model('QuoteCategory');

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

module.exports.create = (req, res) => {
    Category.findById(req.body.category)
        .then(category => {
            if(!category) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Category not found'
                });
            }

            new Quote({
                quote: req.body.quote,
                category: category._id
            })
            .save()
            .then(quote => {
                return res.status(200).json({
                    status: 'ok',
                    quote: quote
                });
            })
            .catch(err => {
                return res.status(500).json({
                    status: 'error',
                    error: err,
                    message: 'An unexpected error occured.'
                });
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