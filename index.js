function addingEventListener() {
    const button = document.getElementById('button');

    if (button) {
        button.addEventListener('click', function() {
            alert('I was clicked!');
        });
    } else {
        console.error("Element with id 'button' not found.");
    }
}

// Call the function to attach the event listener
addingEventListener();

