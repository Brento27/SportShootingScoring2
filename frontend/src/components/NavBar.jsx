import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const onClcik = () => {
    navigate('/tc');
  };
  return (
    <>
      <div className='navbar bg-primary'>
        <div className='flex-1'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <Link
                to='/scoreboard'
                className='btn btn-ghost normal-case text-xl'
              >
                Scoring
              </Link>
              <Link to='/login' className='btn btn-ghost normal-case text-xl'>
                Login
              </Link>
            </ul>
          </div>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            KJV
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <label
                htmlFor='my-modal'
                className='btn btn-outline btn-secondary'
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

            <label htmlFor='my-modal' className='btn' onClick={onClcik}>
              View T&C's
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
