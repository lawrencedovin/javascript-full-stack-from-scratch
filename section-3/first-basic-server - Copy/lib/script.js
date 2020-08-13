let http = require("http");

let server = http.createServer((request, response) => {
    console.log(request.url);
    switch(request.url){
        case "/":
            response.end("Hello welcome to our home page");
            break;
        case "/about":
            response.end("Thanks for visiting our about");
            break;
        default:
            response.end("404 Not Found");
            break;
    }
});
server.listen(3000);
// dog.jump();
// cat.meow();