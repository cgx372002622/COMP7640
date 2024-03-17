var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var swaggerUi = require("swagger-ui-express");
var swaggerJSDoc = require("swagger-jsdoc");
var swaggerDocument = require("./swagger.json");

var indexRouter = require("./routes/index");
var testRouter = require("./routes/test");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 配置 swagger-jsdoc
const options = {
  definition: swaggerDocument,
  // 重点，指定 swagger-jsdoc 去哪个路由下收集 swagger 注释
  apis: [path.join(__dirname, "/routes/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

// 开放 swagger 相关接口，
app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/test", testRouter);

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

module.exports = app;
