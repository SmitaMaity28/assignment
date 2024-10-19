import React from 'react';

function Logout() {
  const handleLogout = () => {
    // Clear JWT token or session
    sessionStorage.clear();
    
    console.log('User logged out');
  };

  return (
    <div className="logout-container">
      <button className='form-button' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
