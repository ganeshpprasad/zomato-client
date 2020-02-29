import {
  UPDATE_LIST,
  UPDATE_CURRENT_DETAILS,
  UPDATE_LOCATION,
} from './constants';

const initialState = {
  cardList: [],
  detailsItem: {},
  location: 'Ban', // ask for current location
};

const rootState = (state = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_LIST:
      return state;
    case UPDATE_CURRENT_DETAILS:
      return state;
    case UPDATE_LOCATION:
      return Object.assign({}, state, {location: payload});
    default:
      return initialState;
  }
};

export default rootState;
