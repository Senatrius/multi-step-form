import React from 'react';

export const Button = ({
  value,
  click,
  form
}: {
  value: string;
  click: () => void;
  form?: string;
}) => {
  return (
    <button
      form={form}
      onClick={click}
      className='text-m-medium ml-auto rounded-[0.25rem] bg-primary-400 px-4 py-3 font-medium text-white hover:bg-primary-300 focus:bg-primary-300 md:rounded-lg md:px-6 md:py-4 md:text-d-medium'>
      {value}
    </button>
  );
};
