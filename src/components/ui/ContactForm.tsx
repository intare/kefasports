import React from 'react';
// import Link from 'next/link';

interface ContactFormProps {
  benefitText?: string;
  reassuranceText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  benefitText = "Get a Custom Quote within 24 Hours",
  reassuranceText = "We respect your privacy and will never share your information."
}) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-md p-6 md:p-8">
      {benefitText && (
        <p className="text-lg font-medium text-brand-dark mb-6">{benefitText}</p>
      )}
      
      <form className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-brand-lighterGray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Your Name"
            required
          />
        </div>
        
        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-2 border border-brand-lighterGray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Your Company"
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-brand-lighterGray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-brand-lighterGray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
        
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-brand-lighterGray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-brand-accent text-brand-white font-medium rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors"
          >
            Submit Request
          </button>
        </div>
      </form>
      
      {reassuranceText && (
        <p className="mt-4 text-sm text-brand-secondary text-center">{reassuranceText}</p>
      )}
    </div>
  );
};

export default ContactForm;