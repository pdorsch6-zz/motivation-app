import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class QuoteList extends Component {

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
          <ul>
            {quotes ?
              quotes.map((quote, index) => <li key={index}> {quote.quote}  </li> )
              : <p>Loading...</p>
            }
          </ul>
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
	)(QuoteList)
);