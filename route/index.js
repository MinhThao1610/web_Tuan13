function route(app) {
    app.get('/students', (req, res) => {
        let students = {
            "status": "OK",
            "data": [1, 2, 3, 4, 5]
        }
        res.json(students);
    });
    
    app.get('/students/:id', (req, res) => {
        let id = req.params.id;
        let student = {
            "status": "OK",
            "data": {"masv": id}
        }
        res.json(student);
    });
    
    app.put('/students/:id', (req, res) => {
        let student = {
            "status": "OK",
            "data": req.body,
        }
        res.json(student);
    });
    app.use('/', (req, res) => {
        res.send('Trang chủ');
    });
}

module.exports = route;

