require('dotenv').config();

const yelp = require('yelp-fusion');
const apiKey = process.env.API_KEY;
const client = yelp.client(apiKey);
const _ = require('lodash');

/**
 * 
 * @param {decimal} latitude Latitude of the location you want to search nearby.
 * @param {decimal} longitude Longitude of the location you want to search nearby.
 * @param {integer} radius A suggested search radius in meters. The max value is 40000 meters.
 * @param {integer} limit Number of business results to return maximum is 50.
 * @param {string} price Pricing levels to filter the search result with: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$.
 * @param {string} offset Offset the list of returned business results by this amount.
 */
async function getNearby(latitude, longitude, radius, price, limit = 5, offset = 5) {
    const searchRequest = {
        latitude,
        longitude,
        radius,
        price,
        limit,
        offset,
    };

    try {
        let result = await client.search(searchRequest);
        let businessDetails = _.map(result.jsonBody.businesses, business => getDetails(business));
        const businesses = await Promise.all(businessDetails);
        return JSON.stringify(businesses, null, 4);
    } catch(err) {
        console.log(err);
    }
}

/**
 * 
 * @param {string} id Unique Yelp ID of this business.
 */
async function getDetails(business) {
    try {
        let response = await client.business(business.id);
        business.photos = response.jsonBody.photos;
        return business;
    } catch(err) {
        console.log(err);
    }
}


exports.getNearby = getNearby;