import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactDetails = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      label: "Phone",
      value: "+91 9356317918",
      href: "tel:+919356317918",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      label: "Email",
      value: "chavanhanuman104@gmail.com",
      href: "mailto:chavanhanuman104@gmail.com",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/919356317918",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      label: "Instagram",
      value: "@er_hanuman_09",
      href: "https://instagram.com/er_hanuman_09",
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-grid">
        {contactDetails.map((item, index) => {
  const isExternal = item.href.startsWith('http');

  return (
    <a
      key={index}
      href={item.href}
      className="contact-card"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <img src={item.logo} alt={item.label} className="contact-icon" />
      <h3>{item.label}</h3>
      <p>{item.value}</p>
    </a>
  );
})}

      </div>
    </div>
  );
};

export default Contact;
