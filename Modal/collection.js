// Reads in info.json file and store information accordingly into array
let array = [];
$.getJSON('Modal/info.json', function (json) {
    for (let key in json) {
        if (json.hasOwnProperty(key)) {
            let item = json[key];
            array.push({
                src: item.src,
                description: item.description,
                name: item.name,   // Note: Use 'Name' instead of 'name'
                surname: item.surname,
                title: item.title,
                social: item.social

            });
        }
    }
    // Now you can use 'array' or call a function that works with the data
    console.log(array);
    for(let x = 0; x < array.length; x++) {
        console.log(array[x].description);
    }
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


function toggleMenu() {
    document.body.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll');
  }
// // Optional: Hide the menu when clicking outside
// window.addEventListener('click', (event) => {
//     if (!menuIcon.contains(event.target) && !optionsMenu.contains(event.target)) {
//         optionsMenu.style.display = 'none';
//         overlay.style.display = 'none';
//     }
// });
//code above for options menu

// Load JSON data
// fetch('info.json')
    // .then(response => response.json())
    // .then(data => {
    //     // Store the JSON data in a variable
    //     var imageData = data;

        // Function to open modal
        // function openModal(imageId) {
        //     var modal = document.getElementById("modal");
        //     var modalImage = document.getElementById("modal-image");
        //     var modalDescription = document.getElementById("modal-description");
        //
        //     // Get image source and description from JSON data
        //     var imageSrc = imageData[imageId].src;
        //     var description = imageData[imageId].description;
        //
        //     // Set modal content
        //     modalImage.src = imageSrc;
        //     modalDescription.textContent = description;
        //
        //     // Display modal
        //     modal.style.display = "block";
        // }
        //
        // // Function to close modal
        // function closeModal() {
        //     var modal = document.getElementById("modal");
        //     modal.style.display = "none";
        // }
// // Get all elements with class "pic"
//         var pics = document.querySelectorAll('.pic');
//
// // Attach event listeners to each pic
//         pics.forEach(function(pic) {
//             pic.addEventListener("click", function() {
//                 // Log the image source to the console
//                 console.log(pic.getAttribute('src'));
//             });
//         });
//         var pics = document.querySelectorAll('.pic');
//
//         // Attach event listeners to each pic
//         pics.forEach(function(pic) {
//             pic.addEventListener("click", function() {
//                 // Get the image source
//                 var imageSrc = pic.getAttribute('src');
//                 // Extract the image ID from the source
//                 var filename = imageSrc.substring(imageSrc.lastIndexOf('/') + 1); // Get the filename
//                 var imageId = filename.split('.')[0]; // Remove the extension to get the image ID
//                 openModal(imageId);
//             });
//         });
//     })
//     .catch(error => console.error('Error loading JSON:', error));
