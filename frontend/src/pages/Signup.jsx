import React from 'react';

const Signup = () => {
  return (
    <div className='h-screen '>
      <div className='flex flex-col items-center gap-4 mt-52'>
        <h1 className='text-xl'>Signup</h1>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
        />
        <div className=''>
          <button className='btn btn-primary'>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
