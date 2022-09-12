import React from 'react';
import EventsCountDown from './EventsCountDown';
import shoot22 from '../assets/img/22.jpeg';
import pnp from '../assets/img/pnp.jpeg';
import gong from '../assets/img/gong.jpeg';

function EventsCard() {
  return (
    <div className='grid justify-items-center p-6 grid grid-cols-3 xxs:grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='card w-96 bg-green-300 shadow-xl'>
        <figure>
          <img src={shoot22} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Chasa Sportskiet
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>.22 Randslag Pretskiet</p>
          <EventsCountDown />
          <div className='card-actions justify-end mt-6'>
            <div className='badge badge-outline'>.22</div>
            <div className='badge badge-outline'>CHASA</div>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-green-300 shadow-xl'>
        <figure>
          <img src={gong} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Chasa Sportskiet
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>Handwapen "Falling Plates"</p>
          <EventsCountDown />
          <div className='card-actions justify-end mt-6'>
            <div className='badge badge-outline'>Handwapen</div>
            <div className='badge badge-outline'>CHASA</div>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-green-300 shadow-xl'>
        <figure>
          <img src={pnp} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Pick n Pay SpanSkiet
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>4 man spanne</p>
          <EventsCountDown />

          <div className='card-actions justify-end mt-6'>
            <div className='badge badge-outline'>Jag Geweer</div>
            <div className='badge badge-outline'>Vlakte</div>
            <div className='badge badge-outline'>Span Skiet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
