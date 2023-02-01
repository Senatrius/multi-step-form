export const Toggle = () => {
  return (
    <div>
      <input
        className='peer sr-only'
        type='checkbox'
        name='term'
        id='toggle'
      />
      <label
        id='label'
        className='inline-block w-9 rounded-full bg-primary-400 p-1'
        htmlFor='toggle'>
        <div className={`h-3 w-3 rounded-full bg-white`}></div>
      </label>
    </div>
  );
};
