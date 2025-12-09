class RiskModel:
    def __init__(self):
        pass
    
    def calculate_score(self, invoice_data: dict) -> dict:
        """Calculate risk score for invoice data"""
        
        # Basic risk scoring logic (can be enhanced with ML models)
        risk_score = 0
        risk_factors = []
        
        # Check for missing critical fields
        critical_fields = ['invoice_number', 'total_amount', 'date']
        missing_fields = [field for field in critical_fields if not invoice_data.get(field)]
        
        if missing_fields:
            risk_score += 30
            risk_factors.append(f"Missing critical fields: {', '.join(missing_fields)}")
        
        # Check amount validity
        if invoice_data.get('total_amount'):
            try:
                amount = float(invoice_data['total_amount'].replace(',', ''))
                if amount > 100000:
                    risk_score += 20
                    risk_factors.append("High value transaction (>$100,000)")
                elif amount <= 0:
                    risk_score += 50
                    risk_factors.append("Invalid amount")
            except (ValueError, AttributeError):
                risk_score += 40
                risk_factors.append("Invalid amount format")
        
        # Determine risk level
        if risk_score >= 70:
            risk_level = "HIGH"
        elif risk_score >= 40:
            risk_level = "MEDIUM"
        else:
            risk_level = "LOW"
        
        return {
            "risk_score": risk_score,
            "risk_level": risk_level,
            "risk_factors": risk_factors
        }
