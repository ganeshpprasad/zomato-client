export const generateAPI = loc => {
  return +`https://developers.zomato.com/api/v2.1/search?entity_id=${loc}&entity_type=city`;
};
