window.onload = function() {
    let itemInput = document.querySelector("#itemInput");
    let toDoForm = document.querySelector("#toDoForm");
    let itemList = document.querySelector("#itemList");

    toDoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // it is default behavior to refresh and reload the web page
        // then send that data off somewhere event.preventDefault() prevents that.
        createItem(itemInput.value);
        itemInput.value = '';
    });

    function createItem(item) {
        let ourHTML = `<li>${item}<button>Delete</button></li>`;
        itemList.insertAdjacentHTML("beforeend", ourHTML);
        // 1st argument where do we want to add the new bit of content.
    }
}