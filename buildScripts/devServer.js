// import express from "express";
// import path from "path";
// import open from "open";
// import chalk from "chalk";
// import webpack from "webpack";
// import config from "../webpack.dev";

// const PORT = process.env.PORT || 3000;
// const app = express();
// const compiler = webpack(config);

// app.use(
//   require("webpack-dev-middleware")(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath,
//   })
// );

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../src/index.html"));
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.error(chalk.red(err));
//   } else {
//     console.log(chalk.green(`Dev server running on port ${PORT}`));
//     open("http://localhost" + port);
//   }
// });
