import * as actionTypes from '../actionTypes';

const loadQuoteSuccess = quote => {
	return {
		type: actionTypes.LOAD_QUOTE_SUCCESS,
		quote,
	};
};

const loadQuoteError = error => {
	return {
		type: actionTypes.LOAD_QUOTE_ERROR,
		error,
	};
};

const loadQuoteLoading = () => {
	return {
		type: actionTypes.LOAD_QUOTE,
	};
};

export function loadQuote(id) {
	return async (dispatch) => {
		dispatch(loadQuoteLoading());
		let url = `/api/quote/${id}`;
		let settings = {
			method: 'GET',
			mode: 'cors',
			headers: {
			  'Content-Type': 'application/json',
			},
		  };
		  try {
			let response = await fetch(url, settings).json();
		
			if(!response.ok) {
			  return dispatch(loadQuoteError(response.message));
			}
		
			return dispatch(loadQuoteSuccess(response.quote));
		  } catch (err) {
			return dispatch(loadQuoteError(err));
		  }	

	}
}