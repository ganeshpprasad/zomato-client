import {
  FETCH_REST_PENDING,
  FETCH_REST_SUCCESS,
  FETCH_REST_FAILURE,
} from '../constants';

export function fetchRestaurantsPending() {
  return {
    type: FETCH_REST_PENDING,
  };
}

export function fetchRestaurantsSuccess(list) {
  return {
    type: FETCH_REST_SUCCESS,
    payload: list,
  };
}

export function fetchRestaurantsFailure(error) {
  return {
    type: FETCH_REST_FAILURE,
    payload: error,
  };
}
