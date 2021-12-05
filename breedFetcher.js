const request = require('request');
const breedNotFound = "the mentioned breed not found in our database";

const uriPath = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {



request(breedInput, (error, response, body) => {
if (error) {
callback (`This is the Error code form API: ${error}`);
}

const data = JSON.parse(body);
  if (data[0] !== undefined) {
  callback(null, data[0].description);
  } else {
  callback(breedNotFound);
  }

});
};
module.exports = {fetchBreedDescription}