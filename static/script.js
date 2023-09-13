document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("file-input");
    const imagePreview = document.getElementById("preview-image");
    const imageFilename = document.getElementById("image-filename");
    const predictionsList = document.getElementById("predictions-list");
    const classTextContent = document.getElementById("class-text-content");

    const predictionButtons = document.querySelectorAll(".prediction-item");
    const className = predictionButtons[0].dataset.class;
    fetch("/class_text/" + className)
    .then(response => response.text())
    .then(text => {

        classTextContent.innerHTML = text;
    });

    fileInput.addEventListener("change", function() {
        const file = fileInput.files[0];
        imageFilename.textContent = file.name;

        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    predictionsList.addEventListener("click", function(e) {
        const predictionItem = e.target.closest(".prediction-item");
        if (predictionItem) {
            const className = predictionItem.dataset.class;
            fetch("/class_text/" + className)
                .then(response => response.text())
                .then(text => {
                    classTextContent.innerHTML = text;
                });
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var fileInput = document.getElementById("file-input");
    var previewImage = document.getElementById("preview-image");
    var imageFilename = document.getElementById("image-filename");
    var predictionResults = document.getElementById("prediction-results");
    var classTextContent = document.getElementById("class-text");
    var imagePreview = document.getElementById("image-preview");
  
    fileInput.addEventListener("change", function() {

      if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();
  
        imageFilename.textContent = "Selected file: " + file.name;

        reader.onload = function(e) {
          previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);


        imagePreview.classList.add("show");
  
      
        predictionResults.style.display = "none";
        classTextContent.innerHTML = "";
      } else {

        imageFilename.textContent = "";
        previewImage.src = "";

        imagePreview.classList.remove("show");

        predictionResults.style.display = "none";
        classTextContent.innerHTML = "";
      }
    });
  });