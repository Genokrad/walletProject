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
import { createTransaction } from 'redux/transactionsController/operations';
import { getCat } from 'redux/categories/categories-selectors';
import { useEffect, useState } from 'react';
import { useOpenModalLogout } from 'components/modalHooks/hooks';
import { getIsModalLogoutOpen } from 'redux/auth/auth-selectors';
import MinusComponent from './componentMinus';
import {selectOneTransaction } from 'redux/transactionsController/selectors';
import { addOneTransaction } from 'redux/transactionsController/slice';
import { closeModalAddTransaction } from 'redux/transactionsController/slice';
const AddComponent = ({ seting, fn}) => {
console.log(seting)
 
  const openModal = useOpenModalLogout();
  const isModalOpen = useSelector(getIsModalLogoutOpen);
  useEffect(() => {
    if (seting) {
      getType('INCOME');
      getId('063f1132-ba5d-42b4-951d-44011ca46262')
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
    if (oneTransaction === null) {
      return;
    }
    getAmount(oneTransaction?.obj?.amount);
    getType(oneTransaction?.obj?.type);
    getComment(oneTransaction?.obj?.comment);
    dispatch(addOneTransaction(null));
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

    if (type === 'EXPENSE') {
      const operation = {
        transactionDate: data,
        type: type,
        categoryId: id,
        comment: comment,
        amount: -amount,
      };
      fn(true)
      dispatch(createTransaction(operation));
      dispatch(closeModalAddTransaction())
      
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
      fn(true)
      dispatch(createTransaction(operation));
      dispatch(closeModalAddTransaction());
      
      reset();
      return;
    }

    // console.log(operation);
    // dispatch(createTransaction(operation));
  };

  return (
    <>
      <DivSetting className="SetingTransaction">
        <form onSubmit={handleSubmit}>
          {seting ? '' : <MinusComponent change={handleChange} id={id}/>}
          <DivDataSum>
            <Sum
              name="sum"
              value={amount}
              placeholder="0.00"
              onChange={handleChange}
            ></Sum>

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
