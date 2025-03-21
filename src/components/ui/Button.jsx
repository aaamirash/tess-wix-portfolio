import React from 'react';

const Button = ({ children, asChild, className, ...props }) => {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;

