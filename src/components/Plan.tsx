import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TFormData } from './FormWrapper';
import { Paragraph } from './Paragraph';
import { RadioInput } from './RadioInput';
import { Title } from './Title';

export const Plan = ({
  register
}: {
  register: UseFormRegister<TFormData>;
}) => {
  return (
    <>
      <Title value='Select your plan' />
      <Paragraph value='You have the option of monthly or yearly billing.' />
      <div className='flex flex-col gap-3 md:flex-row md:gap-4'>
        <RadioInput
          label='Arcade1'
          register={register('plan')}
          checked
        />
        <RadioInput
          label='Arcade2'
          register={register('plan')}
        />
        <RadioInput
          label='Arcade3'
          register={register('plan')}
        />
      </div>
    </>
  );
};
