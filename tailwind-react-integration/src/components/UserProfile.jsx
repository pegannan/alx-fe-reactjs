function UserProfile() {
    return (
      <div className="user-profile">
        <img src="https://via.placeholder.com/150" alt="User" />
        <h1>John Doe</h1>
        <p>Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  user-profile{
    @apply bg-gray-100, p-8, max-w-sm, mx-auto, my-20, rounded-lg, shadow-lg, sm:p-4, md:p-8
    sm:max-w-xs. md:
  }

  h1{
    @apply rounded-full, text-xl, text-blue-800, my-4; sm:text-lg, md:text-xl 
  }

  img{
    @apply rounded-full, w-36 h-36, mx-auto sm:w-24 h-24 md:w-36 h-36;
  }

  p{
    @apply text-gray-600, text-base sm:text-sm, md:text-base;
  }
  export default UserProfile;