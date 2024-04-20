import React, { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

export const EyeIcon = ({ initialActive = false }) => {
  const [isActive, setIsActive] = useState(initialActive);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {isActive ? (
        <BsFillEyeSlashFill onClick={handleIconClick} style={{ cursor: 'pointer' }} />
      ) : (
        <BsFillEyeFill onClick={handleIconClick} style={{ cursor: 'pointer' }} />
      )}
    </>
  );
};
