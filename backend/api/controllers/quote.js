const Quote = require('mongoose').model('Quote');
const Category = require('mongoose').model('QuoteCategory');
const Author = require('mongoose').model('Author');

module.exports.getAll = (req, res) => {
    Quote.find({})
        .populate(['category', 'author'])
        .then(quotes => {
            return res.status(200).json({
                status: 'ok',
                quotes: quotes ? quotes : [],
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
    new Quote({
        quote: req.body.quote,
        author: req.body.author,
        category: req.body.category
    })
        .save()
        .then(quote => {
            return res.status(200).json({
                status: 'ok',
                quote: quote,
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

module.exports.deleteOne = (req, res) => {
    Quote.findByIdAndDelete(req.params.id)
        .then(quote => {
            if (!quote) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Quote not found'
                });
            }
            return res.status(200).json({
                status: 'ok',
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

module.exports.update = (req, res) => {
    Quote.findById(req.params.id)
        .then(async quote => {
            if (!quote) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Quote not found'
                });
            }

            if (req.body.category) {
                const category = await Category.findById(req.body.category);
                if (!category) {
                    return res.status(404).json({
                        status: 'error',
                        message: 'Unable to find category',
                    });
                }
            }

            if (req.body.author) {
                const author = await Author.findById(req.body.author);
                if (!author) {
                    return res.status(404).json({
                        status: 'error',
                        message: 'Unable to find author',
                    });
                }
            }

            quote.category = req.body.category
                ? req.body.category
                : quote.category;
            
            quote.quote = req.body.quote
                ? req.body.quote
                : quote.quote;

            quote.author = req.body.author
                ? req.body.author
                : quote.author;

            quote.date_added = req.body.date_added
                ? req.body.date_added
                : quote.date_added;

            const updated = await quote.save();

            return res.status(200).json({
                status: 'ok',
                quote: updated
            });

        }).catch(err => {
            return res.status(500).json({
                status: 'error',
                error: err,
                message: 'An unexpected internal server error has occurred!',
            });
        });
}