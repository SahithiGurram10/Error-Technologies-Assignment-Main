import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

interface LeadData {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

/**
 * Submits a new lead to the backend API
 * @param data The lead data to submit
 * @returns A promise that resolves when the submission is complete
 */
export const submitLead = async (data: LeadData): Promise<void> => {
  try {
    await axios.post(`${API_URL}/leads`, data);
  } catch (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }
};