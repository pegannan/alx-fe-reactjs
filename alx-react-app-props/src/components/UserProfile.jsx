export default MainContent

function UserProfile (){
    const UserProfile = (props) => {
        return (

            <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
          <h2 style={{ color: 'blue' }}>{props.name}</h2>
          <p>Age: <span style={{ fontWeight: 'bold', fontSize: '50px' }}>{props.age}</span></p>
          <p>Bio: <span style={{color: 'green'}}>{props.bio}</span></p>
          </div>
        );
        ["useContext", "UserContext", "react"]
      };
    return 
  
}