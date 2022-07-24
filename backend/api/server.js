var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var AWS = require("aws-sdk");

// Routers
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testapi");
var testDDBRouter = require("./routes/testDDB");

// Configurations
require("dotenv").config();
AWS.config.update({region: "us-west-1"})
console.log(AWS.config)

var app = express();

// create a DynamoDB client
var ddbclient = new AWS.DynamoDB(AWS.config);
// var tableName = "ProductCatalog";

// app.get("/rows/all", (req, res) => {
//   var params = {
//     TableName: tableName,
//   };

//   ddbclient.scan(params, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       var items = [];
//       for (var i in data.Items) items.push(data.Items[i]["Title"]);
//       console.log(items);
//       res.contentType = "application/json";
//       res.send(items);
//     }
//   });
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testapi", testAPIRouter);
app.use("/testddb", testDDBRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = {
  app: app,
  ddbclient: ddbclient,
}
