import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validateLead } from './validation.js';
import { forwardToN8n } from './n8n.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/leads', async (req, res) => {
  try {
    const leadData = req.body;
    
    // Validate the lead data
    const validationErrors = validateLead(leadData);
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({ 
        success: false, 
        errors: validationErrors 
      });
    }
    
    // Forward to n8n
    await forwardToN8n(leadData);
    
    res.status(201).json({ 
      success: true, 
      message: 'Lead submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});