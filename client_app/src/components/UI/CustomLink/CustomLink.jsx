import React from 'react';
import { Link } from 'react-router-dom'; 

export default function CustomLink({ to, className, children }) {
  return (
    <p>
      <Link to={to} className={className}>
        {children}
      </Link>
    </p>
  );
}
