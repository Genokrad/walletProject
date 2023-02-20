import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {
  DivSetting,
  DivDataSum,
  Sum,
  Coment,
  DivBtn,
  BtnAdd,
  BtnCancel,
} from './StyledContent';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import {
  createTransaction,
  updateTransaction,
} from 'redux/transactionsController/operations';
import { getCat } from 'redux/categories/categories-selectors';
import { useEffect, useState } from 'react';
import { useOpenModalLogout } from 'components/modalHooks/hooks';
import { getIsModalLogoutOpen } from 'redux/auth/auth-selectors';
import MinusComponent from './componentMinus';
import {
  didUpdate,
  selectOneTransaction,
} from 'redux/transactionsController/selectors';
import {
  addOneTransaction,
  statusTransaction,
} from 'redux/transactionsController/slice';
import { Button } from 'components/Button/Button';
import { closeModalAddTransaction } from 'redux/transactionsController/slice';
const AddComponent = ({ seting, fn }) => {
  const openModal = useOpenModalLogout();
  const isModalOpen = useSelector(getIsModalLogoutOpen);
  useEffect(() => {
    if (seting) {
      getType('INCOME');
      getId('063f1132-ba5d-42b4-951d-44011ca46262');
    } else if (!seting) {
      getType('EXPENSE');
      getId('c9d9e447-1b83-4238-8712-edc77b18b739');
    }
  }, [seting]);

  const [data, getData] = useState(new Date());
  const [comment, getComment] = useState('');
  const [amount, getAmount] = useState('');

  const [type, getType] = useState('INCOME');

  const [id, getId] = useState('063f1132-ba5d-42b4-951d-44011ca46262');
  const getCategory = useSelector(getCat);

  const dispatch = useDispatch();

  const oneTransaction = useSelector(selectOneTransaction);

  useEffect(() => {
    if (didUpdate === true) {
      return;
    }
    getAmount(Math.abs(oneTransaction?.obj?.amount) || 0);
    getType(oneTransaction?.obj?.type || 'INCOME');
    getComment(oneTransaction?.obj?.comment || '');

    dispatch(statusTransaction(true));
  }, [oneTransaction, dispatch]);

  // if (oneTransaction !== null) {
  //   getAmount(oneTransaction?.obj?.amount);
  //   console.log(amount);
  //   dispatch(addOneTransaction(null));
  // }

  const handleChange = e => {
    if (e.target.name === 'sum' && seting) {
      getId('063f1132-ba5d-42b4-951d-44011ca46262');
      getAmount(e.currentTarget.value);
    } else if (e.target.name === 'sum' && !seting) {
      getAmount(e.currentTarget.value);
    } else if (e.target.name === 'comment') {
      getComment(e.currentTarget.value);
    } else if (e.target.name === 'select' && !seting) {
      const typeOfSelector = getCategory.find(
        obj => obj.name === e.target.value
      );

      getType(typeOfSelector.type);
      getId(typeOfSelector.id);
    }
  };

  const reset = () => {
    getData(new Date());
    getComment('');
    getAmount('');
    getType('INCOME');
    getId('063f1132-ba5d-42b4-951d-44011ca46262');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(type);
    if (type === 'EXPENSE') {
      const operation = {
        transactionDate: data,
        type: type,
        categoryId: id,
        comment: comment,
        amount: -amount,
      };
      fn(true);

      dispatch(createTransaction(operation));
      dispatch(closeModalAddTransaction());

      reset();
      return;
    } else if (type === 'INCOME') {
      const operation = {
        transactionDate: data,
        type: type,
        categoryId: id,
        comment: comment,
        amount: amount,
        // amount: {seting? amount:-amount},
      };
      fn(true);

      dispatch(createTransaction(operation));
      dispatch(closeModalAddTransaction());

      reset();
      return;
    }

    // dispatch(createTransaction(operation));
  };

  const upDateFunction = () => {
    // oneTransaction;
    // console.log('transactionToChange', oneTransaction);
    // console.log('oneTransaction.obj.type', oneTransaction.obj.type);
    let newObj = {};
    // console.log(
    //   'new Date',
    //   new Date(oneTransaction.obj.transactionDate).toLocaleDateString()
    // );
    if (oneTransaction.obj.type === 'INCOME') {
      newObj = {
        id: oneTransaction.id,
        obj: {
          amount: Number(amount),
          categoryId: oneTransaction.obj.categoryId,
          comment: comment,
          transactionDate: oneTransaction.obj.transactionDate,
          type: type,
        },
      };
      dispatch(updateTransaction(newObj));
      dispatch(addOneTransaction(null));
      return newObj;
    } else if (oneTransaction.obj.type === 'EXPENSE') {
      console.log('oneTransaction.obj.type', oneTransaction.obj.type);
      newObj = {
        id: oneTransaction.id,
        obj: {
          amount: Number(-amount),
          categoryId: oneTransaction.obj.categoryId,
          comment: comment,
          transactionDate: oneTransaction.obj.transactionDate,
          type: type,
        },
      };
      console.log('newObj', newObj);
      dispatch(updateTransaction(newObj));
      dispatch(addOneTransaction(null));
      return newObj;
    }

    console.log('newObj', newObj);
  };

  return (
    <>
      <DivSetting className="SetingTransaction">
        <form onSubmit={handleSubmit}>
          {seting ? '' : <MinusComponent change={handleChange} id={id} />}
          <DivDataSum>
            <Sum
              name="sum"
              value={amount}
              placeholder="0.00"
              onChange={handleChange}
            ></Sum>

            {/* {console.log('first', data)} */}
            <Datetime
              dateFormat="DD-MM-YYYY"
              timeFormat={false}
              value={data}
              className="data"
              onChange={data => getData(data._d)}
            />
          </DivDataSum>

          <Coment
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={handleChange}
          ></Coment>
        </form>
      </DivSetting>
      <DivBtn className="Btn">
        <Button title={'update'} onClick={upDateFunction} />
        <BtnAdd type="submit" onClick={handleSubmit}>
          ADD
        </BtnAdd>
        <BtnCancel onClick={openModal}>CANCEL</BtnCancel>
        {isModalOpen && <ModalLogout />}
      </DivBtn>
    </>
  );
};
export default AddComponent;
