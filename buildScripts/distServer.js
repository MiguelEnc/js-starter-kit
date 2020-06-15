// import express from "express";
// import path from "path";
// import open from "open";
// import chalk from "chalk";
// import compression from "compression";

// /* eslint-disable no-console */

// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(compression());
// app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.error(chalk.red(err));
//   } else {
//     console.log(chalk.green(`Dev server running on port ${PORT}`));
//     open("http://localhost" + port);
//   }
// });
