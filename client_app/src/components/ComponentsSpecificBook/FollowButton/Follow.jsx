import React, { useState } from 'react';

export default function Follow({ className }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <button 
      className={className}
      onClick={handleFollowClick}
    >
      {isFollowed ? "Siguiendo" : "Seguir +"}
    </button>
  );
}
