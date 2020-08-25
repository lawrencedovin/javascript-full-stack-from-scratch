
document.addEventListener('click', (event) => {

    // Delete Feature
    if(event.target.classList.contains("delete-me")) {
        if (confirm("Do you really want to delete this item?")) {
            axios.post('/delete-item', {id: event.target.getAttribute("data-id")}).then(() => {
                // will grab the id value of the button that was selected
                event.target.parentElement.parentElement.remove();
                // target the entire list item and delete it
                // event.target selects the button that was clicked on
            }).catch(() => {
                console.log("Please try again later");
            });
        }
    }

    // Update Feature
    if(event.target.classList.contains("edit-me")) {
        // only if the element that was clicked on contains a class of edit-me
        let userInput = prompt("Enter your new desired text", event.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        // Send this value to a Node server, tell the web browser
        // to send a request to our server without submitting a form or 
        // visiting a new URL.
        // Send a request to the server on the fly.
        if (userInput) {
            axios.post('/update-item', {item: userInput, id: event.target.getAttribute("data-id")}).then(() => {
                // id: event.target.getAttribute("data-id") is the value from our data-id="item._id" in our edit btn
                // this will run once our axios request and our database action has completed
                event.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
                // gets the span element with a class of item-text which contains the previous user input
                // updates the user interface with the new database value once the database action is complete
            }).catch(() => {
                console.log("Please try again later");
            });
        }
    }
});

