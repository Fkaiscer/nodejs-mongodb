import express from "express";
import router from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

const __dirname = path.resolve();
app.set("views", path.join(__dirname, "src/views"));

// app.engine(
//   ".hbs",
//   exphbs.engine({
//     layoutsDir: path.join(app.get("views"), "layouts"),
//     partialsDir: path.join(app.get("views"), "partials"),
//     defaultLayout: "main",
//     extname: ".hbs",
//   })
// );
const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs", exphbs.engine);

app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(router);

//Static files
app.use(express.static(path.join(__dirname, "src/public")));

export default app;
