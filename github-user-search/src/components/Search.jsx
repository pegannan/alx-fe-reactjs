import useState from 'react'

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setEmail('');
      setPassword('');
      setUsername('');
  
      if (!username) {
          setErrors
      }
      if (!password) {
          setErrors
      }
      if (!email) {
          setErrors
      }
  
    };
  button 

  'Loading...'
  'Looks like we cant find the user, '
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar"
        />
        <textarea
          value={password}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link"
        />
         <textarea
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
        />
      </form>
      avatar_url", "login", "img";
    );
  
    };
  
  
    
  export default RegistrationForm;