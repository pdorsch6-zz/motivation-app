import { 
    LOAD_QUOTE,
    LOAD_QUOTE_ERROR,
    LOAD_QUOTE_SUCCESS,
    LOAD_QUOTES,
    LOAD_QUOTES_ERROR,
    LOAD_QUOTES_SUCCESS } from '../actionTypes';

const initialState = {
    selectedQuote: null,
    quotes: null,
	loading: true,
	error: null,
};

export function quote(state = initialState, action) {
	switch (action.type) {
		case LOAD_QUOTE:
			return {
				...state,
				loading: true,
			};

		case LOAD_QUOTE_SUCCESS:
			return {
				...state,
				loading: false,
				selectedQuote: action.quote,
				error: null,
			};

		case LOAD_QUOTE_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		default:
			return state;
	}
}

export function quotes(state = initialState, action) {
	switch (action.type) {
		case LOAD_QUOTES:
			return {
				...state,
				loading: true,
			};

		case LOAD_QUOTES_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.quotes,
				error: null,
			};

		case LOAD_QUOTES_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		default:
			return state;
	}
}