import React from 'react';
import { Mail, Database, Zap, BarChart } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mail size={36} />,
      title: "Email Notifications",
      description: "Instant email alerts when new leads are submitted to keep your team informed."
    },
    {
      icon: <Database size={36} />,
      title: "Lead Storage",
      description: "Securely store all your leads with easy access and management capabilities."
    },
    {
      icon: <Zap size={36} />,
      title: "Workflow Automation",
      description: "Automate your lead processing with n8n integration for maximum efficiency."
    },
    {
      icon: <BarChart size={36} />,
      title: "Analytics Ready",
      description: "Prepared for analytics integration to track conversion rates and performance."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;