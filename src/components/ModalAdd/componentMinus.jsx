import Datetime from 'react-datetime';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getCat } from 'redux/categories/categories-selectors';
import { createTransaction } from 'redux/transactionsController/operations';

import {
  DivSetting,
  Forms,
  FormsInput,
  FormsSelect,
  DivDataSum,
  Option,
  Sum,
  Coment,
  DivBtn,
  BtnAdd,
  BtnCancel,
  Data,
} from './StyledContent';
const MinusComponent = () => {
  const [data, getData] = useState(new Date());
  const [type, getType] = useState('INCOME');
  // const [category, getCategory] = useState('');
  const [comment, getComment] = useState('');
  const [amount, getAmount] = useState('');
  const getCategory = useSelector(getCat);
  
  const neededCat = getCategory.find(cat => cat.type === 'INCOME');
  // console.log(data);
  const dispatch = useDispatch();
  const handleChange = e => {
    if (e.target.name === 'sum') {
      getAmount(e.currentTarget.value);
    
    } else if (e.target.name === 'data') {
      getData(new Date().toISOString());
      // getData(e.currentTarget.value);
    
    } else if (e.target.name === 'comment') {
     
      getComment(e.currentTarget.value);
    }
  };

  const fn = e=>{
    console.log(e.target)
   
  }
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const operation = {
  //     transactionDate: data,
  //     type: neededCat.type,
  //     categoryId: neededCat.id,
  //     comment: comment,
  //     amount: amount,
  //   };
  //   dispatch(createTransaction(operation));
  // };
  return (
    <>
      <DivSetting className="SetingTransaction">
        <form>
          <Forms>
            <FormsInput placeholder="Select a category" />
            <FormsSelect id="category" >
              {getCategory.map(category => {
                return <Option key={category.id} >{category.name}</Option>;
              })}
            </FormsSelect>
          </Forms>

          <DivDataSum>
            <Sum placeholder="0.00" name="sum" onChange={handleChange}></Sum>
            <Datetime
              dateFormat={true}
              timeFormat={false}
              value={data}
              name="data"
              onChange={handleChange}
            />
          </DivDataSum>

          <Coment
            placeholder="Comment"
            name={'comment'}
            onChange={handleChange}
          ></Coment>
        </form>
      </DivSetting>
      <DivBtn className="Btn">
        <BtnAdd>ADD</BtnAdd>
        <BtnCancel>CANCEL</BtnCancel>
      </DivBtn>
    </>
  );
};
export default MinusComponent;
