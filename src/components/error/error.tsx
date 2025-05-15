import React from 'react';
import './error.scss';

interface ErrorProps {
   children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
   return <div className="error pt">{children}</div>;
};
export default Error;
