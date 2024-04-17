/* eslint-disable react/prop-types */

const RegisterEnlace = ({ href, children, className }) => {
  return (
    <p>
      <a href={href} className={`link-primary ${className}`}>
        {children}
      </a>
    </p>
  );
};

export default RegisterEnlace;
