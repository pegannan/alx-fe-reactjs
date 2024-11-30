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
    @apply bg-gray-100, p-8, max-w-sm, mx-auto, my-20, rounded-lg, shadow-lg;
  }

  h1{
    @apply rounded-full, text-blue-800, my-4;
  }

  img{
    @apply rounded-full, w-36 h-36, mx-auto;
  }

  p{
    @apply text-gray-600, text-base;
  }
  export default UserProfile;