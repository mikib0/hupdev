import Link from 'next/link';
import React from 'react';

const LinkButton = ({ children, className, href, ...rest }) => {
  return (
    <Link
      href={href}
      className={`border-2 border-orange px-4 py-2 ${className}`}
      {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
