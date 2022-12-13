import React from 'react';
import { useEffect, useState } from 'react';
import { shootersDefault } from '../data/ScoreBoardUsers';

const ScoreBoard = () => {
  const [shooters, setShootersValues] = useState(shootersDefault);

  const handleChange = (e) => {
    const { name, checked, id } = e.target;
    if (checked) {
      setShootersValues(
        shooters.map((shooter) =>
          shooter.id === id
            ? { ...shooter, [name]: checked, total: shooter.total + 30 }
            : { ...shooter }
        )
      );
    } else {
      setShootersValues(
        shooters.map((shooter) =>
          shooter.id === id
            ? { ...shooter, [name]: checked, total: shooter.total - 30 }
            : { ...shooter }
        )
      );
    }
  };
  //useEffect(() => {}, [shooters]);

  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gong 1</th>
            <th>Gong 2</th>
            <th>Gong 3</th>
            <th>Gong 4</th>
            <th>Gong 5</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {shooters.map((shooter) => {
            return (
              <tr id={shooter.id} key={shooter.id}>
                <td>{shooter.id}</td>
                <td>{shooter.firstname}</td>
                <td>{shooter.lastname}</td>
                <td>
                  {' '}
                  <input
                    type='checkbox'
                    defaultChecked={shooter.gong1}
                    className='checkbox checkbox-success'
                    name='gong1'
                    onChange={handleChange}
                    id={shooter.id}
                  />
                </td>
                <td>
                  {' '}
                  <input
                    type='checkbox'
                    defaultChecked={shooter.gong2}
                    name='gong2'
                    onChange={handleChange}
                    id={shooter.id}
                    className='checkbox checkbox-success'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    type='checkbox'
                    defaultChecked={shooter.gong3}
                    name='gong3'
                    onChange={handleChange}
                    id={shooter.id}
                    className='checkbox checkbox-success'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    type='checkbox'
                    defaultChecked={shooter.gong4}
                    name='gong4'
                    onChange={handleChange}
                    id={shooter.id}
                    className='checkbox checkbox-success'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    type='checkbox'
                    defaultChecked={shooter.gong5}
                    name='gong5'
                    onChange={handleChange}
                    id={shooter.id}
                    className='checkbox checkbox-success'
                  />
                </td>
                <td>{shooter.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
