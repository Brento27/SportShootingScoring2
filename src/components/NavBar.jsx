import React from 'react';

function NavBar() {
  return (
    <>
      <div className='navbar bg-primary'>
        <div className='flex-1'>
          <a className='btn btn-outline normal-case text-xl'>KJV</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <label htmlFor='my-modal' className='btn btn-outline'>
                VrywaringsVorm
              </label>
            </li>
          </ul>
        </div>
      </div>

      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Vull asseblief die persoon se besonderhede in vir vrywarings vorm
          </h3>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>What is your name?</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn'>
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
