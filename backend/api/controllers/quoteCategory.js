const Category = require('mongoose').model('QuoteCategory');

module.exports.getAll = (req, res) => {
    Category.find({})
        .then(categories => {
            return res.status(200).json({
                status: 'ok',
                categories: categories ? categories : [], // Ensure we always at the bare minimum send back an empty array
            });
        })
        .catch(err => {
            return res.status(500).json({
                status: 'error',
                error: err,
                message: 'An unexpected internal server error has occurred',
            });
        });
};

module.exports.create = (req, res) => {
    Category.find({
        category: `/${req.body.category}/i`
    }).then(category => {
        if(category.length === 0) {
            new Category({
                category: req.body.category
            })
            .save()
            .then(category => {
                return res.status(200).json({
                    status: 'ok',
                    category: category
                });
            }).catch(err => {
                return res.status(500).json({
                    status: 'error',
                    error: err,
                    message: 'An unexpected internal server error has occurred',
                });
            });
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'That category already exists in this database'
            });
        }
    }).catch(err => {
        return res.status(500).json({
            status: 'error',
            error: err,
            message: 'An unexpected internal server error has occurred',
        });
    });
};