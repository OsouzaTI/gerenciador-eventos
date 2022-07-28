import express from "express"; 
import bodyParser from 'body-parser';
import { create, engine } from "express-handlebars";
import { router } from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";

// conectando com mongodb
import "./Database/MongoDb.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

let hbs = create({});

hbs.handlebars.registerHelper("dateFormatter", function(date) {
  let day = date.getDate();
  let month = date.getFullMonth();
  let year = date.getYear();
  return new hbs.handlebars.SafeString(`${day}/${month}/${year}`);
});


const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({
  layoutDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(router);
app.listen(PORT, ()=>console.log(`Rodando na porta ${PORT}`));


