let express = require("express");
let mongodb = require("mongodb");

let app = express();
let db;

app.use(express.static('public'));
// Will allow the content in the public folder be available from the root of our server

let connectionString = 'mongodb+srv://todoAppUser:pungkin123@cluster0.u4auy.mongodb.net/ToDoApp?retryWrites=true&w=majority';
mongodb.connect(connectionString, {useNewUrlParser: true}, (error, client) => {
    db = client.db();
    // by the time our app is ready for request our db variable is good to go
    app.listen(3000);
});

app.use(express.json());
// We want the same action to happen as express.urlencoded
// where we gather the user data and add it to a body object
// but instead of submitted forms we want it for asynchronous requests.
// for prompts.

app.use(express.urlencoded({extended: false}));
// Tells express to automatically take submitted form data and add it
// to a body object that lives on the request object


app.get('/', (request, response) => {
    db.collection('items').find().toArray((error, items) => {
        response.send(`
            <!DOCTYPE html>
            <html>
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple To-Do App</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
            </head>
            <body>
            <div class="container">
                <h1 class="display-4 text-center py-1">To-Do App</h1>
                
                <div class="jumbotron p-3 shadow-sm">
                <form action="/create-item" method="POST">
                    <div class="d-flex align-items-center">
                    <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
                    <button class="btn btn-primary">Add New Item</button>
                    </div>
                </form>
                </div>
                
                <ul class="list-group pb-5" id="itemList">
                    ${items.map((item) => {
                        return `
                            <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                            <span class="item-text">${item.item}</span>
                            <div>
                                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
                                <button class="delete-me btn btn-danger btn-sm">Delete</button>
                            </div>
                            </li>
                        `;
                    }).join("")}
                </ul>
                
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            <script src="/browser.js"></script>
            </body>
            </html>
        `);
    });
});

app.post('/create-item', (request, response) => {
    // console.log(request.body.item);
    // db.collection('items').insertOne({name: "Meowsalot", species: "cat"})
    db.collection('items').insertOne({item: request.body.item}, () => {
        response.redirect('/')
    })
});

app.post('/update-item', (request, response) => {
    // will be used to communicate with our Mongo DB database
    // find one document in your collection and then allow you to update it
    db.collection('items').findOneAndUpdate({_id: new mongodb.ObjectID(request.body.id)}, {$set: {item: request.body.item}}, () => {
        response.send("Success");
    })
});