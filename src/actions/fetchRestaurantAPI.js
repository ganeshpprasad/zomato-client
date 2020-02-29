import {
  fetchRestaurantsFailure,
  fetchRestaurantsPending,
  fetchRestaurantsSuccess,
} from './fetchRestaurants';

function fetchRestaurants() {
  return dispatch => {
    console.log('action called');
    dispatch(fetchRestaurantsPending());
    fetch(
      'https://developers.zomato.com/api/v2.1/search?entity_id=5200&entity_type=zone',
      {
        headers: {
          'user-key': 'd3022fcf2f05c987c27cc0649d1af6a8',
        },
      },
    )
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
