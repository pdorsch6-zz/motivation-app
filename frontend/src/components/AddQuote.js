import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const REACT_APP_DB_HOST = process.env.REACT_APP_DB_HOST;
console.log(REACT_APP_DB_HOST);

class AddQuote extends Component {

    constructor(props) {
    super(props);
    
		this.state = {
			quote: '',
			author: '',
      category: '',
      open: false
		};
        this.addQuote = this.addQuote.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    
    handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };
  
    handleClickClose = () => {
      this.setState({
        open: false,
      });
    };

    onFieldChange(name, e) {
      this.setState({ [name]: e });
    }

    async addQuote() {
        let { quote, author, category } = this.state;

        try {
            let authorResponse = await fetch(`${REACT_APP_DB_HOST}/api/author`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: author
                })
            });

            let categoryResponse = await fetch(`${REACT_APP_DB_HOST}/api/category`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    category: category
                })
            });

            let categoryJson = await categoryResponse.json();
            let authorJson = await authorResponse.json();

            if ((authorResponse.status === 200 ||
                authorResponse.status === 400) &&
                (categoryResponse.status === 200 ||
                categoryResponse.status === 400)) {
                let quoteResponse = await fetch(`${REACT_APP_DB_HOST}/api/quote`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        category: categoryJson.category._id,
                        author: authorJson.author._id,
                        quote: quote
                    })
                });
                if (quoteResponse.status === 200) {
                    let quoteJson = await quoteResponse.json();
                    console.log("Quote added: \"" + quoteJson.quote + "\"");
                }
            }
        } catch (e) {
            console.log("ERROR: ", e);
        }
        
    }

    render() {
        return (
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Add Quote
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="simple-dialog-title">
            <DialogTitle id="dialog-title">Add Quote</DialogTitle>
            <form className={classes.container} noValidate autoComplete="on">
              <TextField
                label="Category"
                onChange={e => this.onFieldChange('category',  e.target.value)}
                margin="normal"
              />

              <TextField
                required
                label="Quote"
                multiline
                onChange={e => this.onFieldChange('quote',  e.target.value)}
                margin="normal"
              />

              <TextField
                label="Author"
                onChange={e => this.onFieldChange('author',  e.target.value)}
                margin="normal"
              />
            </form>
            {/* <div>
              Category:
                <input
                  type="text"
                  onChange={e => this.onFieldChange('category',  e.target.value)}
                  placeholder="Category"
                  style={{ width: "200px" }}
                />
                <br />
                Quote: 
                <input
                  type="text"
                  onChange={e => this.onFieldChange('quote',  e.target.value)}
                  placeholder="Quote"
                  style={{ width: "200px" }}
                />
                <br />
                Author:
                <input
                  type="text"
                  onChange={e => this.onFieldChange('author',  e.target.value)}
                  placeholder="Author"
                  style={{ width: "200px" }}
                />
                <br />
                <button onClick={this.addQuote}>
                  ADD
                </button>
            </div> */}
            <Button onClick={this.addQuote} />
          </Dialog>
        </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		quotes: state.quotes.data,
		loading: state.quotes.loading,
		error: state.quotes.error,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions.quote }, dispatch);
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AddQuote)
);