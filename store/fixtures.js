// temporary user geolocation and settings until we implement them
export const userGameSettings = {
  latitude: 45.421532,
  longitude: -75.697189,
  radius: 20000,
  price: '1, 2, 3, 4',
};

const serverBase = 'http://192.168.0.96:3000'
export const fetchEligibleRestaurantsEndpoint = `${serverBase}/restaurant_data`;