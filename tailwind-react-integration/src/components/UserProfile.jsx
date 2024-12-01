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
    sm:max-w-xs md:max-w-sm, hover:shadow-xl;
  }

  h1{
    @apply rounded-full, text-xl, text-blue-800, my-4; sm:text-lg, md:text-xl, hover:text-blue-500
  }

  img{
    @apply rounded-full, w-36 h-36, mx-auto sm:w-24 sm:h-24 
    md:w-36 md:h-36 hover:scale-110, transition-transform duration-300 ease-in-out;
  }

  p{
    @apply text-gray-600, text-base sm:text-sm, md:text-base hover:text-blue-500;
  }
  export default UserProfile;