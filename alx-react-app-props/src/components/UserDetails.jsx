function UserDetails({ userData }) {
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  import { useContext } from 'react'
  export default UserDetails;
