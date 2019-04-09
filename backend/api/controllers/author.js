const Quote = require('mongoose').model('Quote');
const Author = require('mongoose').model('Author');

module.exports.getAll = (req, res) => {
    Author.find({})
        .then(author => {
            return res.status(200).json({
                status: 'ok',
                author: author ? author : [],
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
    Author.find({
        "name": req.body.name.toLowerCase()
    }).then(author => {
        if(author.length === 0) {
            new Author({
                name: req.body.name.toLowerCase()
            })
            .save()
            .then(author => {
                return res.status(200).json({
                    status: 'ok',
                    author: author
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
                message: 'That author already exists in this database',
                author: author[0]
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
    Author.findByIdAndDelete(req.params.id)
        .then(author => {
            if (!author) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Author not found'
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
    Author.findById(req.params.id)
        .then(async author => {

            if (!author) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Author not found',
                });
            }

            author.name = req.body.name
                ? req.body.name
                : name.name;

            const updated = await author.save();

            return res.status(200).json({
                status: 'ok',
                author: updated
            });

        }).catch(err => {
            return res.status(500).json({
                status: 'error',
                error: err,
                message: 'An unexpected internal server error has occurred!',
            });
        });
}