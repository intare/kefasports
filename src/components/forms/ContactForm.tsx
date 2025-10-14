'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Basketball Court',
    'Swimming Pool',
    'Soccer Field',
    'Tennis Court',
    'Playground',
    'Multi-Purpose Facility',
    'Other'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Over 1 year',
    'Just exploring'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'form',
          event_label: 'contact_form',
          value: 1
        });
      }

      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission (you would replace this with your actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', formData);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'There was an error submitting the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-8 text-center ${className}`}>
        <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              projectType: '',
              budget: '',
              timeline: '',
              message: '',
              consent: false
            });
          }}
          className="text-brand-accent hover:text-brand-dark font-semibold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Phone and Company Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+250 787 666 677"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Project Details Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors ${
              errors.projectType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select project type</option>
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
          >
            <option value="">Select timeline</option>
            {timelines.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us about your project requirements, location, specific needs, etc."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 text-brand-accent focus:ring-brand-accent border-gray-300 rounded"
          />
          <span className="text-sm text-gray-600">
            I agree to the <a href="/privacy" className="text-brand-accent hover:underline">privacy policy</a> and 
            consent to being contacted about my project. *
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div>
        {errors.submit && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">
            {errors.submit}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-accent text-white py-3 px-6 rounded-md font-semibold hover:bg-brand-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Trust Signal */}
      <p className="text-xs text-gray-500 text-center">
        We typically respond within 24 hours. For urgent inquiries, call +250 787 666 677
      </p>
    </form>
  );
};

export default ContactForm;
