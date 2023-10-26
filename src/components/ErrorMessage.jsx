import React from 'react';
import { toast } from 'react-hot-toast';

const ErrorMessage = ({ message }) => {
  if (message) {
    toast.error(message);
  }

  return <p>{message}</p>;
};

export default ErrorMessage;

//////////////////////////////////////////
// import { toast } from 'react-hot-toast';

// const ErrorMessage = ({ message }) => {
//   if (message) {
//     toast.error(message);
//   }

//   return null; // Повертаємо null, оскільки компонент буде відповідальним лише за показ повідомлень, і не буде мати видимого відображення на сторінці
// };

// export default ErrorMessage;
///////////////////////////////////
// import React from 'react';

// const ErrorMessage = ({ message }) => {
//   return <p>{message}</p>;
// };

// export default ErrorMessage;
