let express = require("express");
let mongodb = require("mongodb");

let app = express();
let db = mongodb();

let connectionString = '';
mongodb.connect(connectionString, b, (error, client) => {

});

app.use(express.urlencoded({extended: false}));

app.get('/', (request, response) => {
    response.sendFile('index.html', {root: __dirname });
});

app.post('/create-item', (request, response) => {
    console.log(request.body.item);
    // db.collection('items').insertOne({name: "Meowsalot", species: "cat"})
    // MAKE NOTES WHEN YOU RETURN // 
    db.collection('items').insertOne({item: request.body.item}, () => {
        response.send("Thanks for submitting");
    })
});

app.listen(3000);