import React from 'react';
import EventsCountDown from './EventsCountDown';

function EventsCard() {
  return (
    <div className='flex justify-around p-6'>
      <div className='card w-96 bg-green-300 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Shoes!
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <EventsCountDown />
          <div className='card-actions justify-end mt-6'>
            <div className='badge badge-outline'>.22</div>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-green-300 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Shoes!
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <EventsCountDown />
          <div className='card-actions justify-end mt-6'>
            <div className='badge badge-outline'>Hael Geweer</div>
            <div className='badge badge-outline'>CHASA</div>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-green-300 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Shoes!
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <EventsCountDown />

          <div className='card-actions justify-end mt-6'>
            <div className='badge badge-outline'>Jag Geweer</div>
            <div className='badge badge-outline'>Vlakte</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
