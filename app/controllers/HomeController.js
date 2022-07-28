const fakeEvents = [];

for(let i = 0; i < 10; i++) {
    fakeEvents.push({
        title: `evento ${i}`,
        description: 'description',
        begin: new Date(28, 7, 2022),
        end: new Date(30, 7, 2022)
    });
}



export default function HomeController(req, res) {
    res.render('index', {title: 'Titulo Teste', events: fakeEvents});
}