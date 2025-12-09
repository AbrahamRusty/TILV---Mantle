# TILV AI Engine

AI-powered invoice processing backend for the TILV (Transparent Invoice Ledger Validation) system.

## Features

- 🔍 **OCR Processing** - Extract text from invoice images and PDFs using Tesseract
- ⚖️ **Risk Scoring** - AI-powered risk assessment for invoice validation
- ✅ **Validation** - Automated invoice data validation
- 🚀 **FastAPI** - Modern, fast API framework with automatic documentation

## Architecture

```
ai-engine/
├── main.py                    # FastAPI application entry point
├── invoice_ocr/               # OCR processing module
│   └── ocr_processor.py       # Tesseract-based text extraction
├── risk_scoring/              # Risk assessment module
│   └── risk_model.py          # Risk calculation logic
├── validation/                # Validation module
│   └── invoice_validator.py  # Invoice data validation
├── requirements.txt           # Python dependencies
├── Dockerfile                 # Container configuration
└── .env.example              # Environment variables template
```

## Setup

### Prerequisites

- Python 3.9+
- Tesseract OCR installed on your system
  - macOS: `brew install tesseract`
  - Ubuntu: `sudo apt-get install tesseract-ocr`
  - Windows: Download from [GitHub](https://github.com/UB-Mannheim/tesseract/wiki)

### Installation

1. **Create virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Server

```bash
# Activate virtual environment
source venv/bin/activate

# Run the server
python main.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /health
```
Returns server health status.

### Process Invoice
```
POST /process-invoice
```
Upload an invoice image/PDF for processing.

**Request:**
- Content-Type: `multipart/form-data`
- Body: `file` (invoice image or PDF)

**Response:**
```json
{
  "success": true,
  "data": {
    "invoice_number": "INV-12345",
    "date": "12/09/2025",
    "due_date": "12/23/2025",
    "total_amount": "1000.00",
    "buyer_name": "Company A",
    "seller_name": "Company B"
  },
  "validation": {
    "is_valid": true,
    "errors": [],
    "warnings": []
  },
  "risk_score": {
    "risk_score": 20,
    "risk_level": "LOW",
    "risk_factors": []
  }
}
```

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:5000/docs`
- ReDoc: `http://localhost:5000/redoc`

## Docker Deployment

### Build Image
```bash
docker build -t tilv-ai-engine .
```

### Run Container
```bash
docker run -p 5000:5000 tilv-ai-engine
```

## Development

### Adding New Features

1. **New OCR Patterns**: Edit `invoice_ocr/ocr_processor.py` and add patterns to `_parse_invoice_text()`
2. **Custom Risk Rules**: Modify `risk_scoring/risk_model.py` to add new risk factors
3. **Validation Rules**: Update `validation/invoice_validator.py` with new validation logic

### Testing

```bash
# Test the API
curl -X POST "http://localhost:5000/process-invoice" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@sample_invoice.pdf"
```

## Technology Stack

- **FastAPI** - Web framework
- **Tesseract OCR** - Text extraction
- **OpenCV** - Image processing
- **NumPy/Pandas** - Data processing
- **Scikit-learn** - Machine learning (optional)
- **PyTorch/TensorFlow** - Deep learning models (optional)

## Notes

- The current implementation uses basic pattern matching for OCR parsing
- Machine learning models (TensorFlow/PyTorch) can be added for enhanced accuracy
- The risk scoring uses rule-based logic that can be replaced with ML models
- For production use, consider adding authentication and rate limiting

## License

Part of the TILV project.
