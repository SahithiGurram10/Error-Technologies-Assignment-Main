/**
 * Validates lead data
 * @param {Object} data - The lead data to validate
 * @returns {Object} - An object containing any validation errors
 */
export const validateLead = (data) => {
  const errors = {};
  
  // Name validation
  if (!data.name || !data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Email validation
  if (!data.email || !data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return errors;
};

/**
 * Validates if the given string is a valid email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if the email is valid, false otherwise
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};