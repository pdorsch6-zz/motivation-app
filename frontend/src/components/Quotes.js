import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import AddQuote from './AddQuote';
import QuoteTable from './QuoteTable';

class Quotes extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const { quotes, loadQuotes } = this.props;
      if (!quotes) {
        loadQuotes();
      }
    }


    render() {
      const { quotes, loading, error } = this.props;
      if (error) {
        return (
          <>
            <p> {error} </p>
          </>
        );
      }
      return (
        <>
          <div>
            <AddQuote />
          </div>
          <br />
          <div>
            {quotes ?
              <QuoteTable />
              // quotes.map((quote, index) => <li key={index}> {quote.quote}  </li> )
              : <p>Loading...</p>
            }
          </div>
          <br />
        </>
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
	return bindActionCreators({ ...actions.quotes }, dispatch);
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Quotes)
);