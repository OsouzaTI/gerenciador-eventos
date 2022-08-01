import getAllEvents from "../api/events.js";

export default async function HomeController(req, res) {
    let eventos = await getAllEvents();
    res.render('index', {title: 'Titulo Teste', events: eventos});
}