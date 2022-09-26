import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../StudentPayments/StudentPayments.css';
// actions
import { getPaymentById, getTodosUsuarios } from '../../redux/actions';

const PaymentDetails = ({ user }) => {
  const { paymentId } = useParams();
  const dispatch = useDispatch();
  const payment = useSelector(state => state.payments.paymentDetails);
  const users = useSelector(state => state.users.allUsers);
  const currentUser =
    users && users.find(e => e.email === user.emails[0].value);

  useEffect(() => {
    dispatch(getTodosUsuarios());
    dispatch(getPaymentById(paymentId));
  }, [dispatch, paymentId]);

  return (
    <>
      <Nav user={user} />
      <div className="vuvu__container">
        {payment && currentUser ? (
          <div className="vuvu__paymentscont">
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th>Payment Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monto</td>
                  <td>{payment.amount} USD</td>
                </tr>
                <tr>
                  <td>Fecha</td>
                  <td>{payment.date}</td>
                </tr>
                <tr>
                  <td>Cuota pagada</td>
                  <td>{payment.fee}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className="vuvu__button">
                <Link to="/students/gateway/payments">Historial</Link>
              </div>
              <div className="vuvu__button">
                <Link to="/students/gateway">Pasarela</Link>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default PaymentDetails;
