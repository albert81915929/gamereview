const AWS = require("aws-sdk");
require("dotenv").config();
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secreteAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB(AWS.config);
const tableName = "GameReviews";

const addorUpdateReview = async (review) => {
  const params = {
    TableName: tableName,
    Item: review,
  };
  return await dynamoClient.putItem(params).promise();
};

const deleteReview = async (id) => {
  const params = {
    TableName: tableName,
    Key: {
      id,
    },
  };
  return await dynamoClient.deleteItem(params).promise();
};

module.exports = {
  dynamoClient,
  addorUpdateReview,
  deleteReview,
};

const review = {
  game_id: "123",
//   id: 104314,
//   category: 0,
  //   "created_at": 1530144000,
  //   "external_games": [1140282, 1965931],
  //   "name": "Sim Racing Dashboard",
  //   slug: "sim-racing-dashboard",
  //   updated_at: 1604620800,
  //   url: "https://www.igdb.com/games/sim-racing-dashboard",
  //   checksum: "b6b52c7c-ca6b-9567-4209-d619e495f981",
};
console.log(review);
addorUpdateReview(review);
