import {authConstants} from '../Constants/authConstants';

const initialState = {
	loginData: null,
	errors: '',
	forgotPasswordDetails: '',
	resetPasswordDetails: '',
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case authConstants.LOGIN_SUCCESS:
			return {
				...state,
				loginData: action.response,
				errors: '',
			};
		case authConstants.LOGIN_FAILURE:
			return {...state, errors: action.error.response.data};
		case authConstants.FORGOT_PASSWORD_SUCCESS:
			return {...state, forgotPasswordDetails: action.response};
		case authConstants.FORGOT_PASSWORD_FAILURE:
			return {...state, errors: action.error.response.data};
		case authConstants.RESET_PASSWORD_SUCCESS:
			return {...state, resetPasswordDetails: action.response};
		case authConstants.RESET_PASSWORD_FAILURE:
			return {...state, errors: action.error.response.data};
		case authConstants.RESET_SERVER_ERROR:
			return {...state, errors: {}};
		default:
			return state;
	}
};

export default authReducer;
