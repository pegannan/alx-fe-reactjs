import useState from 'react'

const fetchUserData = () => {
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
        <textarea
          value={location}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Location"
          />
          <textarea
          value={repositoties}
          onChange={(e) => setLink(e.target.value)}
          placeholder="minimum repositories"
          />
       
      </form>
      avatar_url", "login", "img";
    );
  
    };
  
  
    form{
        @apply bg-gray-100, p-8, max-w-sm, mx-auto, my-20, rounded-lg, shadow-lg, sm:p-4, md:p-8
        sm:max-w-xs md:max-w-sm, hover:shadow-xl;
      }
  export default RegistrationForm;