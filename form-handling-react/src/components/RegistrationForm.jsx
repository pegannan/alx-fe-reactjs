import { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
       <textarea
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
    </form>
  );
};