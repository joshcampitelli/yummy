// temporary user geolocation and settings until we implement them
export const USER_GAME_SETTINGS = {
  latitude: 45.421532,
  longitude: -75.697189,
  radius: 20000,
  price: '1, 2, 3, 4',
};

const SERVER_BASE_URL = 'http://192.168.0.96:3000'
export const FETCH_ELIGIBLE_RESTAURANTS_URL = `${SERVER_BASE_URL}/restaurant_data`;