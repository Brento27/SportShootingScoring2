import React from 'react';

function NavBar() {
  return (
    <>
      <div className='navbar bg-secondary'>
        <div className='flex-1'>
          <a className='btn btn-secondary normal-case text-xl'>KJV</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <label
                htmlFor='my-modal'
                className='btn btn-outline  btn-primary'
              >
                VrywaringsVorm
              </label>
            </li>
          </ul>
        </div>
      </div>

      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Vull asseblief in die volgende:</h3>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Lid naam?</span>
            </label>
            <input
              type='text'
              placeholder='Tik Hier'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Lid id#</span>
            </label>
            <input
              type='text'
              placeholder='Tik Hier'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Lid#</span>
            </label>
            <input
              type='text'
              placeholder='Tik Hier'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Besoeker naam?</span>
            </label>
            <input
              type='text'
              placeholder='Tik Hier'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Besoeker id#</span>
            </label>
            <input
              type='text'
              placeholder='Tik Hier'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <span className='label-text'>Accept T&C's</span>
              <input type='checkbox' className='toggle' />
            </label>
          </div>
          <div className='modal-action flex justify-center'>
            <label htmlFor='my-modal' className='btn'>
              Submit
            </label>
            <label htmlFor='my-modal' className='btn'>
              Submit & Pay
            </label>
            <label htmlFor='my-modal' className='btn'>
              View T&C's
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
