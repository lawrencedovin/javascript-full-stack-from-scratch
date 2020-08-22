
// Add new notes
document.addEventListener('click', (event) => {
    if(event.target.classList.contains("edit-me")) {
        // only if the element that was clicked on contains a class of edit-me
        let userInput = prompt("Enter your new desired text");
        // Send this value to a Node server, tell the web browser
        // to send a request to our server without submitting a form or 
        // visiting a new URL.
        // Send a request to the server on the fly.
        axios.post('/update-item', {item: userInput}).then(() => {
            // do something interesting here in the next video
        }).catch(() => {
            console.log("Please try again later");
        });
        // send an on the fly post request to the server
    }
});

