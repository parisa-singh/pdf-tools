document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("pdf_files");
    const fileListContainer = document.getElementById("file-list-container");
    const fileList = document.getElementById("file-list");
    const mergeButton = document.getElementById("merge-button");
    const form = document.getElementById("upload-form");
    const loadingContainer = document.getElementById("loading-container");
    const progressBar = document.getElementById("progress-bar");
    const loadingMessage = document.getElementById("loading-message");

    function updateMergeButtonState() {
        mergeButton.disabled = fileInput.files.length === 0;
    }

    fileInput.addEventListener("change", function () {
        fileList.innerHTML = "";
        if (fileInput.files.length > 0) {
            fileListContainer.style.display = "block";
            Array.from(fileInput.files).forEach(file => {
                const listItem = document.createElement("li");
                listItem.textContent = file.name;
                fileList.appendChild(listItem);
            });
        } else {
            fileListContainer.style.display = "none";
        }
        updateMergeButtonState();
    });

    form.addEventListener("submit", function (event) {
        if (fileInput.files.length === 0) {
            event.preventDefault();
            alert("Please select at least one PDF file.");
            return;
        }

        event.preventDefault();
        loadingContainer.style.display = "block";
        loadingMessage.textContent = "Merging PDFs... Please wait.";

        let width = 0;
        const interval = setInterval(() => {
            width += 10;
            progressBar.style.width = width + "%";
            if (width >= 100) {
                clearInterval(interval);
            }
        }, 500);

        setTimeout(() => {
            form.submit();
        }, 2000);
    });

    window.addEventListener("focus", function () {
        loadingMessage.textContent = "Saved to your desktop!";
        setTimeout(() => {
            loadingContainer.style.display = "none";
            progressBar.style.width = "0%";
        }, 3000);
    });

    updateMergeButtonState();
});
