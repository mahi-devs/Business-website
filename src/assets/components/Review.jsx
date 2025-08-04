import React from 'react';
import Testimonials from './Testimonials';


const testimonialData = [
  {
    name: 'John S.',
    role: 'CEO & Founder - Okler',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    content: 'The team at Porto has been invaluable to my business. They have consistently provided expert advice and helped us navigate through complex tax regulations. Their attention to detail and commitment to customer service are second to none. I highly recommend their services to any business owner looking for reliable accounting support.'
  },
  {
    name: 'Emily T.',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    content: 'I was overwhelmed with the financial side of my business, but Porto made everything so much easier. They helped me set up my accounts, manage my taxes, and plan for the future. The peace of mind they have given me is priceless. I couldn\'t be happier with their service.'
  }
];

const Review = () => {
  return (
    <Testimonials testimonials={testimonialData} />
  );
}
export default Review;