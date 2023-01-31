import { useState } from 'react';
import { FormWrapper } from './components/FormWrapper';
import { Stepper } from './components/Stepper';

function App() {
  const [currStep, setCurrStep] = useState<number>(1);

  return (
    <div className='flex flex-col'>
      <Stepper currStep={currStep} />
      <FormWrapper
        currStep={currStep}
        setCurrStep={setCurrStep}
      />
    </div>
  );
}

export default App;
