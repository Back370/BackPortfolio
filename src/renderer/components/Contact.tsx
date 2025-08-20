import React from 'react';

interface ContactLink {
  id: number;
  name: string;
  url: string;
}

function Contact() {
  const contactLinks: ContactLink[] = [
    {
      id: 1,
      name: 'X',
      url: 'https://x.com/back370',
    },
    {
      id: 2,
      name: 'Github',
      url: 'https://github.com/Back370',
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="inner">
        <h2 className="title">Contact</h2>
        <div className="contact-list">
          {contactLinks.map((contact) => (
            <a
              key={contact.id}
              className="contact-item"
              href={contact.url}
              target="_blank"
              rel="noreferrer"
            >
              {contact.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
