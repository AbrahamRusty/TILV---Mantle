import pytesseract
from pdf2image import convert_from_path
import cv2
import numpy as np
from PIL import Image
import re

class OCRProcessor:
    def __init__(self):
        pass
    
    def process(self, file_path: str) -> dict:
        """Extract text from invoice image/PDF"""
        
        if file_path.lower().endswith('.pdf'):
            images = convert_from_path(file_path)
            text = ""
            for img in images:
                text += pytesseract.image_to_string(img)
        else:
            img = Image.open(file_path)
            text = pytesseract.image_to_string(img)
        
        return self._parse_invoice_text(text)
    
    def _parse_invoice_text(self, text: str) -> dict:
        """Parse extracted text into structured data"""
        
        patterns = {
            "invoice_number": r"(?:Invoice\s*(?:No|Number|#)?\s*[:]?\s*)([A-Z0-9\-]+)",
            "date": r"(?:Date\s*[:]?\s*)(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})",
            "due_date": r"(?:Due\s*Date\s*[:]?\s*)(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})",
            "total_amount": r"(?:Total\s*[:]?\s*)(?:USD|USDT|USDC)?\s*\$?\s*([\d,]+\.?\d*)",
            "buyer_name": r"(?:Bill\s*To|Customer|Buyer)[\s\:]*([^\n]+)",
            "seller_name": r"(?:From|Seller|Vendor)[\s\:]*([^\n]+)",
        }
        
        result = {}
        for key, pattern in patterns.items():
            match = re.search(pattern, text, re.IGNORECASE)
            result[key] = match.group(1) if match else None
        
        return result
