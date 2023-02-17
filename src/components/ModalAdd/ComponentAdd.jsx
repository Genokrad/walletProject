import {
  DivSetting,
  DivDataSum,
  Sum,
  Data,
  Coment,
  DivBtn,
  BtnAdd,
  BtnCancel,
} from './StyledContent';
import { useDispatch,} from 'react-redux/es/exports.js';
import { createTransaction } from 'redux/transactionsController/operations';
// import { getCat } from 'redux/categories/categories-selectors';
import { useState } from 'react';

const AddComponent = () => {
  const [data, getData] = useState('');
  // const [type, getType] = useState('INCOME');
  // const [category, getCategory] = useState('');
  const [comment, getComment] = useState('');
  const [amount, getAmount] = useState('');
  // const getCat = useSelector(getCat)
  // console.log(getCat)
  const dispatch = useDispatch()
  const handleChange = e => {
    if (e.target.name === 'sum') {
      getAmount(e.currentTarget.value);
    } else if (e.target.name === 'data') {
      getData(e.currentTarget.value);
    } else if (e.target.name === 'comment') {
      getComment(e.currentTarget.value);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const operation = {
      transactionDate: data,
      // type: type,
      categoryId: 'string',
      comment: comment,
      amount: amount,
    };
    dispatch(createTransaction(operation))
   

    
  };

  

  return (
    <>
      <DivSetting className="SetingTransaction">
        <form onSubmit={handleSubmit}>
          <DivDataSum>
            <Sum name="sum" placeholder="0.00" onChange={handleChange}></Sum>
            <Data
              name="data"
              type="date"
              value="2022-02-16"
              onChange={handleChange}
            ></Data>
          </DivDataSum>

          <Coment
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
          ></Coment>
          
        </form>
      </DivSetting>
      <DivBtn className="Btn">
        <BtnAdd type="submit" onClick={handleSubmit}>ADD</BtnAdd>
        <BtnCancel>CANCEL</BtnCancel>
      </DivBtn>
    </>
  );
};
export default AddComponent;
