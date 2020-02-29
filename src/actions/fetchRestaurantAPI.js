import {
  fetchRestaurantsFailure,
  fetchRestaurantsPending,
  fetchRestaurantsSuccess,
} from './fetchRestaurants';

function fetchRestaurants() {
  return dispatch => {
    console.log('action called');
    dispatch(fetchRestaurantsPending());
    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=5200', {
      headers: {
        'user-key': 'd3022fcf2f05c987c27cc0649d1af6a8',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchRestaurantsSuccess(res.restaurants));
        return res.restaurants;
      })
      .catch(error => {
        console.log('error', error);

        dispatch(fetchRestaurantsFailure(error));
      });
  };
}

export default fetchRestaurants;
