# PDF Merger Web App

## 📌 Project Overview
This is a **PDF Merger Web Application** built using **Flask, PyPDF2, HTML, CSS, and JavaScript**. The web app allows users to upload multiple PDF files, merge them into a single document, and download the merged PDF. It also features a **progress bar** to indicate file processing and updates the message to "Saved to your desktop!" after download.

## 🚀 Features
✅ Upload multiple PDF files
✅ Merge PDFs using **PyPDF2**
✅ Download the merged PDF
✅ Animated **progress bar** during processing
✅ Success message after download
✅ Responsive & modern UI design

---

## 📂 Project Structure
```
pdf_merger_app/
│── static/                # Stores CSS & JavaScript
│   │── css/
│   │   ├── style.css      # Styling for the webpage
│   │── js/
│   │   ├── script.js      # JavaScript for progress bar
│── templates/             # Stores HTML templates
│   ├── index.html         # Main UI page
│── uploads/               # Stores uploaded PDFs (temporary)
│── merged_pdfs/           # Stores merged output PDFs
│── app.py                 # Flask backend
│── requirements.txt       # Project dependencies
│── README.md              # Documentation
```

---

## 🔧 Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/pdf-merger-app.git
cd pdf-merger-app
```

### **2️⃣ Install Dependencies**
Make sure you have Python installed, then run:
```bash
pip install -r requirements.txt
```

### **3️⃣ Run the Flask App**
```bash
python app.py
```
Visit **`http://127.0.0.1:5000/`** in your browser.

---

## 🖥️ Usage Guide
1️⃣ **Select multiple PDF files** from your system.
2️⃣ Click the **"Merge PDFs"** button.
3️⃣ Watch the **progress bar** as files are processed.
4️⃣ Once the merging is complete, the file downloads automatically.
5️⃣ The message updates to **"Saved to your desktop!"** after download.

---

## 🛠️ Technologies Used
- **Flask** - Python web framework
- **PyPDF2** - PDF merging library
- **HTML/CSS** - Frontend UI design
- **JavaScript** - Progress bar & dynamic UI

---

## 🎨 UI Preview
![PDF Merger UI Screenshot](https://via.placeholder.com/800x400)

---

## 🤝 Contributing
Feel free to **fork** this repository and submit a **pull request** if you want to improve this project!

---

## 📜 License
This project is licensed under the **MIT License**. You are free to use and modify it.

---

## 📧 Contact
For any questions or support, reach out at:
📩 Email: your.email@example.com

Enjoy merging PDFs! 🚀

