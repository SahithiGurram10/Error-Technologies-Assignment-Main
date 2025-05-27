interface FormData {
  name: string;
  email: string;
  company?: string;
  message?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

/**
 * Validates the lead form data
 * @param data The form data to validate
 * @returns An object containing any validation errors
 */
export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return errors;
};

/**
 * Validates if the given string is a valid email format
 * @param email The email to validate
 * @returns True if the email is valid, false otherwise
 */
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};