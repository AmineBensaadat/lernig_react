import React, { useState } from 'react'

export default function FormValidationComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  // Fonction de validation
  const validate = () => {
    const newErrors = {};

    // Validation du name (requis)
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    // Validation de l'email (requis et doit contenir @)
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'L\'email doit contenir un @';
    }

    // Validation du password (requis et >= 6 caractères)
    if (!formData.password.trim()) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit avoir au moins 6 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion des changements d'input (champs contrôlés)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Nettoyer l'erreur du champ en cours de modification
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Données du formulaire :', formData);
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
      alert('Formulaire soumis avec succès !');
    }
  };

  // Styles inline
  const containerStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const formGroupStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#646cff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h2>Formulaire avec Validation</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ Name */}
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Entrez votre nom"
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        {/* Champ Email */}
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Entrez votre email"
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Champ Password */}
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Entrez votre mot de passe"
          />
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        <button type="submit" style={buttonStyle}>Soumettre</button>
      </form>
    </div>
  )
}
