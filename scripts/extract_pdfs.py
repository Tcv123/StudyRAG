import pdfplumber

for label, path in [
    ("QUESTION PAPER", r"C:\Users\Tharun\.claude\projects\C--Users-Tharun-Desktop-StudyRAG-main\488aa9b7-392c-4ce3-80b5-8d7e926b7e7e\tool-results\webfetch-1782163494829-9ceg7p.pdf"),
    ("MARK SCHEME", r"C:\Users\Tharun\.claude\projects\C--Users-Tharun-Desktop-StudyRAG-main\488aa9b7-392c-4ce3-80b5-8d7e926b7e7e\tool-results\webfetch-1782163495732-p9q9bf.pdf"),
]:
    print(f"\n\n{'='*60}\n{label}\n{'='*60}\n")
    with pdfplumber.open(path) as pdf:
        for i, page in enumerate(pdf.pages):
            print(f"\n--- Page {i+1} ---\n")
            text = page.extract_text()
            if text:
                print(text)
