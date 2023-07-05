import React from 'react'

const Button = ({ children,className, ...rest }) => {
  return (<button className={`border-2 border-orange px-4 py-2 ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button