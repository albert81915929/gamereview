const AWS = require("aws-sdk");
require("dotenv").config();
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secreteAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB(AWS.config);
const tableName = "gamereviews";

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
