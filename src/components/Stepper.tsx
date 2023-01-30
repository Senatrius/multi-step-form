import { StepIndicator } from './StepIndicator';

export const Stepper = () => {
  return (
    <section className='grid w-full place-items-center bg-[url("./images/bg-sidebar-mobile.svg")] bg-cover bg-no-repeat pt-8 pb-[6.75rem] md:bg-[url("./images/bg-sidebar-desktop.svg")]'>
      <ul className='flex items-center gap-4'>
        <li>
          <StepIndicator step={1} />
        </li>
        <li>
          <StepIndicator step={2} />
        </li>
        <li>
          <StepIndicator step={3} />
        </li>
        <li>
          <StepIndicator step={4} />
        </li>
      </ul>
    </section>
  );
};
