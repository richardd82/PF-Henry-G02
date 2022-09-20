import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// actions
import {
  sendPayment,
  clearPaymentMsg,
  getTodosUsuarios,
} from '../../redux/actions';

const CardPayment = ({ user }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const state = useSelector(state => state.payments);
  const users = useSelector(state => state.users.allUsers);
  const currentUser =
    users && users.find(e => e.email === user.emails[0].value);
  const currentFee = currentUser.fees;
  const fee = currentUser.salary * 0.15;
  let amount = fee;
  if (fee >= currentUser.debt) amount = currentUser.debt;

  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
  }, [dispatch, users, state.paymentMsg]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const stripeId = paymentMethod.id;
      dispatch(sendPayment(stripeId, amount, currentUser.id));
      elements.getElement(CardElement).clear();
      dispatch(getTodosUsuarios());
      setSubmited(true);
    }
  };

  const handleClick = () => {
    setSubmited(false);
    dispatch(getTodosUsuarios());
    dispatch(clearPaymentMsg());
  };

  return (
    <>
      {!submited ? (
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <h2>Cuota {currentFee} de 24</h2>
            <h3>Deuda: ${currentUser.debt}</h3>
            <h3>Pagarás: ${amount}</h3>
            <CardElement />
            <button type="subtmit">Pagar</button>
          </form>
          <div>
            <Link to="/students/gateway">Pasarela</Link>
            <Link to="/students/gateway/payments/">Hitorial de pagos</Link>
          </div>
        </div>
      ) : (
        state.paymentMsg && (
          <div>
            <h1>{state.paymentMsg}</h1>
            <div>
              <Link onClick={() => dispatch(getTodosUsuarios())} to="/students/gateway">
                Pasarela
              </Link>
              <button onClick={handleClick}>Regresar</button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default CardPayment;
