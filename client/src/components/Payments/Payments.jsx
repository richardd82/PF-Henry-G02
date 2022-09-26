import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import '../StudentPayments/StudentPayments.css';
// actions
import {
  getPaymentById,
  getPayments,
  getTodosUsuarios,
} from '../../redux/actions';

const Payments = ({ user }) => {
  const dispatch = useDispatch();
  const payments = useSelector(state => state.payments.userPayments);
  const users = useSelector(state => state.users.allUsers);
  const currentUser =
    users && users.find(e => e.email === user.emails[0].value);

  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
    if (payments.length < 1) dispatch(getPayments(currentUser.id));
  }, [dispatch, currentUser, payments, users.length]);

  const handleClick = paymentId => {
    dispatch(getPaymentById(paymentId));
  };
  console.log(payments);
  return (
    <>
      <Nav user={user} />
      <div className="vuvu__container">
        {currentUser && payments.length > 0 ? (
          <div className="vuvu__paymentscont">
            <h1>Estado de cuenta</h1>
            <h3>Bienvenido, {currentUser.name}</h3>
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th>TOTAL</th>
                  <th>FECHA</th>
                  <th>DETALLE</th>
                </tr>
              </thead>
              <tbody>
                {payments &&
                  payments.map((payment, idx) => (
                    <tr key={idx}>
                      <td>{payment.amount}</td>
                      <td>{payment.date}</td>
                      <td>
                        <div className="vuvu__button">
                          <Link
                            onClick={() => handleClick(payment.id)}
                            to={`/students/gateway/payments/${payment.id}`}
                          >
                            Ir a detalle
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="vuvu__button">
              <Link to="/students/gateway">Pasarela</Link>
            </div>
          </div>
        ) : payments.length < 1 ? (
          <div className="vuvu__paycont">
            <h2>Aun no tienes transacciones realizadas</h2>
            <div className="vuvu__button">
              <Link to="/students/gateway">Pasarela</Link>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default Payments;
