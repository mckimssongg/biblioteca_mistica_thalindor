import React, { useState } from 'react';
import Eye from '../../Iconos/BookList/Eye';
import EyeSlash from '../../Iconos/BookList/EyeSlash'; 

export default function ToggleEye() {

    const [isEye, setIsEye] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsEye(!isEye);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                {isEye ? <Eye /> : <EyeSlash />}
            </div>

            {isHovered && (
                <span>
                    {isEye ? 'Visto' : 'Pendiente'}
                </span>
            )}
        </div>
  )
}