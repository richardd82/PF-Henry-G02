import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import CardPayment from '../CardPayment/CardPayment.jsx';
import Nav from '../Nav/Nav.jsx';
// actions
import { getTodosUsuarios } from '../../redux/actions/index.js';

const Checkout = ({ user, stripePromise }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.allUsers);
  const currentUser =
    users && users.find(e => e.email === user.emails[0].value);

  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
  }, [dispatch, users]);
  return (
    <>
      <Nav user={user} />
      {currentUser && (
        <div>
          <h1>Realiza tu pago acá</h1>
          <Elements stripe={stripePromise}>
            <CardPayment user={user} />
          </Elements>
        </div>
      )}
    </>
  );
};

export default Checkout;
