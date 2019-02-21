import axios from 'axios';

/**
 * ACTION TYPES
 */

const SET_CLOTHING = 'SET_CLOTHING';
/**
 * INITIAL STATE
 */

/**
 * ACTION CREATORS
 */
const setClothing = clothing => ({ type: SET_CLOTHING, clothing });

/**
 * THUNK CREATORS
 */

export const fetchClothing = (type, warmth, occasion) => async dispatch => {
	try {
		const { data } = await axios.get(
			`'/:${type}/warmth/:${warmth}/occasion/:${occasion}'`
		);
		dispatch(setClothing(data));
	} catch (error) {
		throw new Error();
	}
};

/**
 * REDUCER
 */

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CLOTHING:
			return { clothing: action.clothing };
		default:
			return state;
	}
}
