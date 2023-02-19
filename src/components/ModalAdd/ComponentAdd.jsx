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
const AddComponent = ({seting}) => {
  const openModal = useOpenModalLogout();
  const isModalOpen = useSelector(getIsModalLogoutOpen);
  useEffect(() => {
    if(seting){ getType('INCOME')}
    else if(!seting){getType("EXPENSE")}
    
  },[seting]);
  const [data, getData] = useState(new Date());
  const [comment, getComment] = useState('');
  const [amount, getAmount] = useState('');
  console.log("amount ", amount)
  const [type, getType] = useState('INCOME');
 console.log(type)
  const [id, getId] = useState('063f1132-ba5d-42b4-951d-44011ca46262');
  const getCategory = useSelector(getCat);
  

  const dispatch = useDispatch();
  const handleChange = e => {
   console.log(e.target)
    if (e.target.name === 'sum'&& seting) {
     
      getId('063f1132-ba5d-42b4-951d-44011ca46262')
      getAmount(e.currentTarget.value);
    } 
    else if (e.target.name === 'sum'&& !seting) {
     
      getAmount(-e.currentTarget.value);
    } 
    else if (e.target.name === 'comment') {
      
      getComment(e.currentTarget.value);
    }
    else if (e.target.name === 'select'&&!seting) {
      const typeOfSelector = getCategory.find(
        obj => obj.name === e.target.value
      );
      
      getType(typeOfSelector.type);
      getId(typeOfSelector.id);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const operation = {
      transactionDate: data,
      type:type,
      categoryId: id,
      comment: comment,
      amount: amount,
      // amount: {seting? amount:-amount},
    };
    console.log(operation)
    dispatch(createTransaction(operation));
  };

  return (
    <>
      <DivSetting className="SetingTransaction">
        <form onSubmit={handleSubmit}>
          {seting?"":<MinusComponent change={handleChange}/>}
          <DivDataSum>
            <Sum name="sum" placeholder="0.00" onChange={handleChange}></Sum>

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
