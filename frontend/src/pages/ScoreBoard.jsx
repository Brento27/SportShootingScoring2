import React from 'react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { shootersDefault } from '../data/ScoreBoardUsers';
import 'react-toastify/dist/ReactToastify.css';

const ScoreBoard = () => {
  const [shooters, setShootersValues] = useState(shootersDefault);
  const [gongValue, setGongValue] = useState(30);

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

  const handleSubmit = (e) => {
    const { id } = e.target;

    setShootersValues(
      shooters.map((shooter) =>
        shooter.id === id ? { ...shooter, submitted: true } : { ...shooter }
      )
    );
    toast.success('Successfully submitted', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  //useEffect(() => {}, [shooters]);

  return (
    <div>
      <div className='overflow-x-auto flex justify-center'>
        <table className='table m-4'>
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
              <th>Actions</th>
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
                      className='checkbox checkbox-secondary'
                      name='gong1'
                      onChange={handleChange}
                      id={shooter.id}
                      disabled={shooter.submitted}
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
                      className='checkbox checkbox-secondary'
                      disabled={shooter.submitted}
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
                      className='checkbox checkbox-secondary'
                      disabled={shooter.submitted}
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
                      className='checkbox checkbox-secondary'
                      disabled={shooter.submitted}
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
                      className='checkbox checkbox-secondary'
                      disabled={shooter.submitted}
                    />
                  </td>
                  <td>{shooter.total}</td>
                  <td>
                    <div className='btn-group'>
                      <button
                        className='btn'
                        id={shooter.id}
                        onClick={handleSubmit}
                        disabled={shooter.submitted}
                      >
                        Submit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default ScoreBoard;
