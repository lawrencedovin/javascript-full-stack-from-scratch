let express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({extended: false}));
// Used for activating request.body.skyColor 

ourApp.get("/", (request, response) => {
    response.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" type="text" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
});

ourApp.post("/answer", (request, response) => {
    // In response to submitting a form/ POSTing form data to the server.
    if(request.body.skyColor.toLowerCase() == "blue") {
        // body is the body of the POST what they are sending and then we are looking inside
        // that for the skyColor property
        response.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `);
    } else {
        response.send(`
        <p>Wrong answer try again!</p>
        <a href="/">Back to homepage</a>
        `);
    }
});

ourApp.listen("3000");

// ourApp.get("/answer", (request, response) => {
//     response.send("Are you lost?");
//     // In response to when you manually type the address or click a navigation link.
// });
