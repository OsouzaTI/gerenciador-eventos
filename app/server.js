import express from "express"; 
import bodyParser from 'body-parser';
import passport from "passport";
import flash from 'connect-flash';

import { create, engine } from "express-handlebars";
import { router } from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";

// conectando com mongodb
import "./Database/MongoDb.js";
import session from "express-session";

// autenticacao
import auth from './config/auth.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

let hbs = create({});

hbs.handlebars.registerHelper("dateFormatter", function(date) {
  let day = date.getUTCDate().toString().padStart(2, "0");
  let month = date.getUTCMonth().toString().padStart(2, "0");
  let year = date.getUTCFullYear();
  return new hbs.handlebars.SafeString(`${day}/${month}/${year}`);
});

const app = express();

// passport
auth(passport);
// sessao
app.use(session({
  secret: 'projeto-final',
  resave: true,
  saveUninitialized: true
}));
// inicializando o passport
app.use(passport.initialize());
// iniciando a sessao do passport
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

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


