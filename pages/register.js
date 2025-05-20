
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('buyer');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering: ${email} as ${userType}`);
    // Qui ci andrà il codice Firebase
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br /><br />
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="creator">Creator</option>
        </select>
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
