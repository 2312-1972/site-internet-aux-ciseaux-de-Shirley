import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    sujet: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire, par exemple envoyer les données à une API
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container" id="contact">
      <h1 className="titleform">Formulaire de contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Nom & prénom</label>
        <input 
          type="text" 
          id="fname" 
          name="firstname" 
          placeholder="Votre nom et prénom" 
          value={formData.firstname} 
          onChange={handleChange} 
        />
        
        <label htmlFor="sujet">Sujet</label>
        <input 
          type="text" 
          id="sujet" 
          name="sujet" 
          placeholder="L'objet de votre message" 
          value={formData.sujet} 
          onChange={handleChange} 
        />
        
        <label htmlFor="emailAddress">Email</label>
        <input 
          id="emailAddress" 
          type="email" 
          name="email" 
          placeholder="Votre email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        
        <label htmlFor="subject">Message</label>
        <textarea 
          id="subject" 
          name="message" 
          placeholder="Votre message" 
          style={{height: '200px'}} 
          value={formData.message} 
          onChange={handleChange} 
        />
        
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
