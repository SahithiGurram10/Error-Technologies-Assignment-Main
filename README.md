# Error-Technologies-Assignment-Main

# Lead Generation System with n8n Integration

A complete lead generation system with a React frontend, Express backend, and n8n workflow automation for email notifications.

## Features

- **Lead Capture Form**: Clean, professional form with client-side validation
- **Express Backend API**: Processes and validates form submissions
- **n8n Workflow Integration**: Automates email notifications and data storage
- **Responsive Design**: Works seamlessly across all devices

## Project Structure

```
lead-generation-system/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── services/           # API services
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── server/                 # Backend Express server
│   ├── index.js            # Server entry point
│   ├── validation.js       # Lead data validation
│   └── n8n.js              # n8n integration
├── .env.example            # Example environment variables
├── n8n-workflow.json       # n8n workflow configuration
└── README.md               # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- n8n instance (optional, for workflow automation)
- SMTP server access (for email notifications)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/lead-generation-system.git
   cd lead-generation-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file and add your configuration details.

4. **Start the development server:**
   ```bash
   npm start
   ```
   This will start both the React frontend and Express backend.

## n8n Workflow Setup

1. **Import the workflow:**
   - Open your n8n instance
   - Go to Workflows → Import from File
   - Select the `n8n-workflow.json` file from this project

2. **Configure the workflow:**
   - Update the Email node with your SMTP settings
   - Update the Google Sheets node with your sheet ID (if using)
   - Activate the webhook

3. **Update the webhook URL:**
   - After activating the webhook in n8n, copy the generated webhook URL
   - Add it to your `.env` file as `N8N_WEBHOOK_URL`

## Deployment

### Frontend

Deploy the React frontend to Netlify or Vercel:

```bash
npm run build
```

Then deploy the `dist` directory to your hosting provider.

### Backend

Deploy the Express backend to Heroku or Render:

1. Create a new application on your chosen platform
2. Connect your GitHub repository
3. Configure the environment variables
4. Deploy the application

## Extending the System

### CRM Integration

Extend the n8n workflow to integrate with popular CRM systems:

- Add a Salesforce, HubSpot, or other CRM node to your n8n workflow
- Configure the node to create new contacts with the lead data

### Lead Qualification

Implement lead scoring and qualification:

1. Add fields to the form for qualification criteria
2. Extend the backend to calculate a lead score
3. Update the n8n workflow to route leads based on their score

### Analytics Integration

Track form conversions and performance:

1. Add Google Analytics or other analytics tracking to the form
2. Create custom events for form submissions and validation errors
3. Set up conversion goals to track lead generation performance

## License

MIT
