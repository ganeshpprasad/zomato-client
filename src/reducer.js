import {
  UPDATE_CURRENT_DETAILS,
  UPDATE_LOCATION,
  FETCH_REST_FAILURE,
  FETCH_REST_SUCCESS,
  FETCH_REST_PENDING,
} from './constants';

const initialState = {
  apiPending: false,
  error: null,
  cardList: [],
  detailsItem: {},
  location: 'Ban', // ask for current location
};

const rootState = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_REST_PENDING:
      return {
        ...state,
        apiPending: true,
      };
    case FETCH_REST_SUCCESS:
      return {
        ...state,
        apiPending: false,
        cardList: payload,
      };
    case FETCH_REST_FAILURE:
      return {
        ...state,
        apiPending: false,
        error: payload,
      };
    case UPDATE_CURRENT_DETAILS:
      return state;
    case UPDATE_LOCATION:
      return Object.assign({}, state, {location: payload});
    default:
      return state;
  }
};

export default rootState;
