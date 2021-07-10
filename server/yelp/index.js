require('dotenv').config();

const yelp = require('yelp-fusion');

const apiKey = process.env.API_KEY;
const client = yelp.client(apiKey);

/**
 *
 * @param {decimal} latitude Latitude of the location you want to search nearby.
 * @param {decimal} longitude Longitude of the location you want to search nearby.
 * @param {integer} radius A suggested search radius in meters (max 4000 meters).
 * @param {string} price Pricing levels to filter the search result with (1 -> 4, increasing price).
 * @param {string} offset Offset the list of returned business results by this amount.
 * @param {integer} limit Number of business results API maximum is 50
 */
async function getNearby(latitude, longitude, radius, price, offset, limit = 5) {
  const searchRequest = {
    latitude,
    longitude,
    radius,
    price,
    limit,
    offset,
    open_now: true,
  };

  const result = await client.search(searchRequest);
  const businessDetails = result.jsonBody.businesses.map((business) => getDetails(business));
  const businesses = await Promise.all(businessDetails);
  return JSON.stringify(businesses, null, 4);
}

/**
 *
 * @param {string} id Unique Yelp ID of this business.
 */
async function getDetails(business) {
  const response = await client.business(business.id);
  const updatedBusiness = { ...business };
  updatedBusiness.photos = response.jsonBody.photos;

  return updatedBusiness;
}

exports.getNearby = getNearby;
