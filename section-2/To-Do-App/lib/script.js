window.onload = function() {
    let toDoForm = document.querySelector("#toDoForm");
    let itemInput = document.querySelector("#itemInput");
    let itemList = document.querySelector("#itemList");

    toDoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // it is default behavior to refresh and reload the web page
        // then send that data off somewhere event.preventDefault() prevents that.
        createItem(itemInput.value);
    });
    
    function createItem(item) {
        let ourHTML = `<li>${item}<button onclick="this.parentElement.remove()">Delete</button></li>`;
        itemList.insertAdjacentHTML("beforeend", ourHTML);
        // 1st argument where do we want to add the new bit of content.
        itemInput.value = '';
        itemInput.focus();
    }

    function deleteItem(itemToDelete) {
        itemToDelete.parentElement.remove();
    }
    
}


// this.parentElement.remove()