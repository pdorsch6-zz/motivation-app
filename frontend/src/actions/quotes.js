import * as actionTypes from '../actionTypes';

const loadQuotesSuccess = quotes => {
	return {
		type: actionTypes.LOAD_QUOTES_SUCCESS,
		quotes,
	};
};

const loadQuotesError = error => {
	return {
		type: actionTypes.LOAD_QUOTES_ERROR,
		error,
	};
};

const loadQuotesLoading = () => {
	return {
		type: actionTypes.LOAD_QUOTES,
	};
};
export function loadQuotes() {
	return async (dispatch) => {
		dispatch(loadQuotesLoading());
		let url = `/api/quote/all`;
		let settings = {
			method: 'GET',
			mode: 'cors',
			headers: {
			  'Content-Type': 'application/json',
			},
		  };
		  try {
            let response = await fetch(url, settings);
            let json = await response.json();
		
			if(!response.ok) {
			  return dispatch(loadQuotesError(json.message));
			}
			return dispatch(loadQuotesSuccess(json.quotes));
		  } catch (err) {
			return dispatch(loadQuotesError(err));
		  }	

	}
}