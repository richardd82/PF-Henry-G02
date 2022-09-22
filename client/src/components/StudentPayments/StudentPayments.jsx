import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import './StudentPayments.css';
// actions
import { getPayments, getTodosUsuarios } from '../../redux/actions';

const StudentPayments = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.allUsers);
  const currentUser =
    users && users.find(e => e.email === user.emails[0].value);
  const amount = currentUser.salary * 0.15;

  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
  }, [dispatch, users.length]);

  const handleClick = userId => {
    dispatch(getPayments(userId));
  };

  return (
    <>
      <Nav user={user} />
      <div className="vuvu__container">
        {currentUser?.id && !currentUser?.graduated ? (
          <div className="vuvu__paycont">
            <h3>Aún no te has graduado</h3>
            <p>
              Luego de graduarte puedes volver a esta página y enviar una
              delcaración de ingresos una vez consigas un empleo
            </p>
            <div className="vuvu__button">
              <Link to="/students">Dashboard</Link>
            </div>
          </div>
        ) : currentUser?.graduated && currentUser?.salary === 0 ? (
          <div className="vuvu__paycont">
            <h3>¿Conseguiste empleo?</h3>
            <p>
              Comincate con nosotros a través del formulario de contacto para
              hacer una declaración de ingresos y empezar a pagar tus cuotas
            </p>
            <div className="vuvu__button">
              <Link to="/students">Dashboard</Link>
            </div>
          </div>
        ) : currentUser?.debt > 0 &&
          currentUser.debt <= 4000 &&
          currentUser.fees >= 0 &&
          currentUser.fees <= 24 ? (
          <div className="vuvu__paycont">
            <div>
              <h3>Hola, {currentUser?.name}</h3>
              <h2>Tu saldo actual es: {currentUser?.debt}</h2>
              <p>
                Basado en tus ingresos declarados tus cuotas mensuales son de:
              </p>
              <p>{amount} USD</p>
            </div>
            <div>
              <div className="vuvu__button">
                <Link
                  to="/students/gateway/payments"
                  onClick={() => handleClick(currentUser.id)}
                >
                  Historial de pagos
                </Link>
              </div>
              <div className="vuvu__button">
                <Link to="/students/gateway/checkout">Pagar cuota</Link>
              </div>
              <div className="vuvu__button">
                <Link to="/students">Dashboard</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="vuvu__paycont">
            <div>
              <h3>Hola, {currentUser?.name}</h3>
              <p>¡Felicidades tu deuda está saldada!</p>
            </div>
            <div>
              <Link
                to="/students/gateway/payments"
                onClick={() => dispatch(getPayments(currentUser.id))}
              >
                Historial
              </Link>
            </div>
            <div className="vuvu__button">
              <Link to="/students">Dashboard</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

/* <div className="vuvu__paycont">
          <div>
            <h3>Hola, {currentUser?.name}</h3>
            <h2>Tu saldo actual es: {currentUser?.debt}</h2>
            <p>
              Basado en tus ingresos declarados tus cuotas mensuales son de:
            </p>
            <p>{amount} USD</p>
          </div>
          <div>
            <Link
              to="/students/gateway/payments"
              onClick={() => handleClick(currentUser.id)}
            >
              Historial de pagos
            </Link>
            <Link to="/students/gateway/checkout">Pagar cuota</Link>
            <Link to="/students">Dashboard</Link>
          </div>
        </div> */
export default StudentPayments;
