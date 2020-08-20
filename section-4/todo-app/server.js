let express = require("express");
let mongodb = require("mongodb");

let app = express();
let db;

let connectionString = 'mongodb+srv://todoAppUser:pungkin123@cluster0.u4auy.mongodb.net/ToDoApp?retryWrites=true&w=majority';
mongodb.connect(connectionString, {useNewUrlParser: true}, (error, client) => {
    db = client.db();
    // by the time our app is ready for request our db variable is good to go
    app.listen(3000);
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