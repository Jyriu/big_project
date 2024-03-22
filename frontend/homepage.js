import React, { useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [tab, setTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // handle login
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    // handle signup
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="homepage">
      <h1 className="welcome-message">Bienvenue {user ? user.username : ''}, sur GetinTech</h1>
      <div className="card">
        <div className="tabs">
          <button onClick={() => handleTabChange('login')} className={tab === 'login' ? 'active' : ''}>Se connecter</button>
          <button onClick={() => handleTabChange('signup')} className={tab === 'signup' ? 'active' : ''}>S'inscrire</button>
        </div>
        {tab === 'login' ? (
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Se connecter</button>
            </form>
          </div>
        ) : (
          <div className="signup-form">
            <form onSubmit={handleSignup}>
              <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">S'inscrire</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;