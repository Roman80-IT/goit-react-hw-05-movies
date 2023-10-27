import React from 'react';
import { ErrorMessageWrapper } from './ErrorMessage.styled';

const ErrorMessage = ({ message }) => {
  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};

export default ErrorMessage;
