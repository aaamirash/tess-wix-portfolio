import React from 'react';

const Input = ({ type = 'text', placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};

export default Input;

