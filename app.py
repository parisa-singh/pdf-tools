# imports
import os
from flask import Flask, render_template, request, send_file
from PyPDF2 import PdfMerger
from werkzeug.utils import secure_filename

app = Flask(__name__, template_folder="templates")

# defines file paths
UPLOAD_FOLDER = "uploads"
MERGED_FOLDER = "merged_pdfs"
ALLOWED_EXTENSIONS = {"pdf"}

# ensures that the folders exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(MERGED_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["MERGED_FOLDER"] = MERGED_FOLDER

# function to check file type
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/", methods=["GET", "POST"])
def upload_files():
    if request.method == "POST":
        files = request.files.getlist("pdf_files")
        if not files or all(f.filename == "" for f in files):
            return "No files uploaded. Please select PDFs."

        pdf_paths = []
        for file in files:
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
                file.save(filepath)
                pdf_paths.append(filepath)

        if pdf_paths:
            merged_file_path = os.path.join(app.config["MERGED_FOLDER"], "merged_output.pdf")
            merger = PdfMerger()
            
            for pdf in pdf_paths:
                merger.append(pdf)
            
            merger.write(merged_file_path)
            merger.close()

            return send_file(merged_file_path, as_attachment=True)

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
