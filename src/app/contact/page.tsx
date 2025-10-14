import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
  // Sample data - would be fetched from Sanity CMS in production
  const contactInfo = {
    phone: "+250 787 666 677",
    email: "info@kefasports.com",
    address: {
      street: "Ground Floor,Omega House KN3 Ave, Kiyovu ",
      city: "Kigali, Rwanda",
    },
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  };

  return (
    <div className="bg-brand-white">
      {/* Page Header */}
      <div className="bg-brand-dark text-brand-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-brand-lighterGray">
            Ready to discuss your sports facility project? We&apos;re here to help.
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="Fill out the form below and our team will get back to you within 24 hours."
                alignment="left"
              />
              
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-brand-offWhite p-8 rounded-lg">
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out directly or visit our office"
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-accent bg-opacity-10 text-brand-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-brand-dark mb-1">Phone</h3>
                    <p className="text-brand-secondary">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-accent bg-opacity-10 text-brand-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-brand-dark mb-1">Email</h3>
                    <p className="text-brand-secondary">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-accent bg-opacity-10 text-brand-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-brand-dark mb-1">Address</h3>
                    <p className="text-brand-secondary">{contactInfo.address.street}</p>
                    <p className="text-brand-secondary">{contactInfo.address.city}, </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-brand-accent bg-opacity-10 text-brand-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-brand-dark mb-1">Business Hours</h3>
                    <p className="text-brand-secondary">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 bg-brand-lighterGray rounded-lg h-64 flex items-center justify-center text-brand-secondary">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5047519558843!2d30.070790873978623!3d-1.9512963367124525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7e8a867be09%3A0xeab5beb6effd1d0c!2sOmega%20House%20Kigali!5e0!3m2!1sen!2srw!4v1749634463692!5m2!1sen!2srw"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KefaSports Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our services"
            alignment="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-brand-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-brand-dark mb-2">What is the typical timeline for a sports facility project?</h3>
                <p className="text-brand-secondary">Project timelines vary based on scope and complexity. A basketball court might take 4-8 weeks, while a full arena could take 12-18 months. During our initial consultation, we&apos;ll provide a detailed timeline specific to your project.</p>
              </div>
              
              <div className="bg-brand-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-brand-dark mb-2">Do you handle permits and regulatory approvals?</h3>
                <p className="text-brand-secondary">Yes, our comprehensive service includes managing all necessary permits, inspections, and regulatory approvals. We have extensive experience navigating local building codes and requirements.</p>
              </div>
              
              <div className="bg-brand-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-brand-dark mb-2">What types of warranty do you offer on completed projects?</h3>
                <p className="text-brand-secondary">We provide a standard 2-year warranty on workmanship and installation. Many of the materials and equipment we use come with manufacturer warranties ranging from 5-25 years, depending on the product.</p>
              </div>
              
              <div className="bg-brand-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-brand-dark mb-2">Can you work with our existing architectural plans?</h3>
                <p className="text-brand-secondary">Absolutely. We can work with your existing plans or collaborate with your architects. We also offer full design-build services if you prefer a single point of responsibility for the entire project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
