const Category = require('mongoose').model('QuoteCategory');

module.exports.getAll = (req, res) => {
    Category.find({})
        .then(categories => {
            return res.status(200).json({
                status: 'ok',
                categories: categories ? categories : [],
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
        "category": req.body.category.toLowerCase()
    }).then(category => {
        if(category.length === 0) {
            new Category({
                category: req.body.category.toLowerCase()
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

module.exports.deleteOne = (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(category => {
            if (!category) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Category not found'
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
    Category.findById(req.params.id)
        .then(async category => {
            if (!category) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Category not found',
                });
            }

            category.category = req.body.category.toLowerCase()
                ? req.body.category.toLowerCase()
                : category.category;

            const updated = await category.save();

            return res.status(200).json({
                status: 'ok',
                category: updated,
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                status: 'error',
                error: err,
                message: 'An unexpected internal server error has occurred!',
            });
        });
};