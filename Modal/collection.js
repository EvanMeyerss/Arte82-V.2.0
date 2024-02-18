// Load JSON data
fetch('info.json')
  .then(response => response.json())
  .then(data => {
    // Store the JSON data in a variable
    var imageData = data;

    // Function to open modal
    function openModal(imageId) {
      var modal = document.getElementById("modal");
      var modalImage = document.getElementById("modal-image");
      var modalDescription = document.getElementById("modal-description");

      // Get image source and description from JSON data
      var imageSrc = imageData[imageId].src;
      var description = imageData[imageId].description;

      // Set modal content
      modalImage.src = imageSrc;
      modalDescription.textContent = description;

      // Display modal
      modal.style.display = "block";
    }

    // Function to close modal
    function closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }
// Get all elements with class "pic"
var pics = document.querySelectorAll('.pic');

// Attach event listeners to each pic
pics.forEach(function(pic) {
  pic.addEventListener("click", function() {
    // Log the image source to the console
    console.log(pic.getAttribute('src'));
  });
});
    var pics = document.querySelectorAll('.pic');

    // Attach event listeners to each pic
    pics.forEach(function(pic) {
      pic.addEventListener("click", function() {
        // Get the image source
        var imageSrc = pic.getAttribute('src');
        // Extract the image ID from the source
        var filename = imageSrc.substring(imageSrc.lastIndexOf('/') + 1); // Get the filename
        var imageId = filename.split('.')[0]; // Remove the extension to get the image ID
        openModal(imageId);
      });
    });
  })
  .catch(error => console.error('Error loading JSON:', error));