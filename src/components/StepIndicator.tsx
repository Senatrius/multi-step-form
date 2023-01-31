interface IStep {
  step: number;
  current?: boolean;
}

export const StepIndicator = ({ step, current }: IStep) => {
  return (
    <div
      className={`grid h-8 w-8 place-items-center rounded-full border text-step-number font-bold ${
        current
          ? 'border-neutral bg-neutral text-primary-400'
          : 'border-white bg-transparent text-white'
      }`}>
      {step}
    </div>
  );
};
