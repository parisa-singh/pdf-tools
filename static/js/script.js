document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("upload-form");
    const loadingContainer = document.getElementById("loading-container");
    const progressBar = document.getElementById("progress-bar");
    const loadingMessage = document.getElementById("loading-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent default form submission

        // Show loading bar and message
        loadingContainer.style.display = "block";
        loadingMessage.textContent = "Merging PDFs... Please wait.";

        // Simulated progress animation
        let width = 0;
        const interval = setInterval(() => {
            width += 10;
            progressBar.style.width = width + "%";

            if (width >= 100) {
                clearInterval(interval);
            }
        }, 500);

        // Submit form after 2 seconds
        setTimeout(() => {
            form.submit();  // Continue with form submission
        }, 2000);
    });

    // Listen for file download completion
    window.addEventListener("focus", function() {
        // Change message after download is initiated
        loadingMessage.textContent = "Saved to your desktop!";

        // Hide the progress bar after 3 seconds
        setTimeout(() => {
            loadingContainer.style.display = "none";
            progressBar.style.width = "0%";
        }, 3000);
    });
});
