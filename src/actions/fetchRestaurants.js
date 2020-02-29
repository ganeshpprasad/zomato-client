import {
  fetchRestaurantsFailure,
  fetchRestaurantsPending,
  fetchRestaurantsSuccess,
} from './fetchRestaurantsActions';
import generateAPI from '../api/RestaurantsAPI';

function fetchRestaurants(location) {
  return dispatch => {
    dispatch(fetchRestaurantsPending());
    const a = `https://developers.zomato.com/api/v2.1/search?entity_id=${location}&entity_type=city`;
    console.log('a', a);

    fetch(a, {
      headers: {
        'user-key': 'd3022fcf2f05c987c27cc0649d1af6a8',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        const requiredData = res.restaurants.map(item => {
          return {
            name: item.restaurant.name,
            locality: item.restaurant.location.locality,
            cuisines: item.restaurant.cuisines,
            url: item.restaurant.url,
            forTwo: item.restaurant.average_cost_for_two,
            rating: item.restaurant.user_rating.aggregate_rating,
            photos: item.restaurant.photos,
          };
        });

        console.log('asdf', requiredData);

        dispatch(fetchRestaurantsSuccess(requiredData));
        return res.restaurants;
      })
      .catch(error => {
        console.log('error', error);

        dispatch(fetchRestaurantsFailure(error));
      });
  };
}

export default fetchRestaurants;
