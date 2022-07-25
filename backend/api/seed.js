const axios = require("axios");
const { format } = require("morgan");
const { addorUpdateReview } = require("./dynamo");
require("dotenv").config();

const seedData = async () => {
  const url = "https://api.igdb.com/v4/games";
  const headers = {
    Accept: "application/json",
    "Client-ID": process.env.igdb_client_id,
    Authorization: "Bearer eidnsnn6j1284mdu5g5mtba5jwg6ol",
  };
  try {
    for (offset = 0; offset < 5000; offset += 500) {
      const data = `fields *; limit 500; offset ${offset};`;
      const { data: reviews } = await axios.post(url, data, { headers });
      console.log(reviews);
      const reviewPromises = reviews.map((review, i) => // this is wrong. The id will loop over.
        addorUpdateReview({ ...review, "game_id": i })
      );
      await Promise.all(reviewPromises);
      console.log("reviews added.");
    }
  } catch (e) {
    console.log(e);
  }
};
// console.log(process.env.igdb_client_id);
// console.log(process.env.AWS_DEFAULT_REGION)
seedData();
