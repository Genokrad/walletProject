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
  // Data,
} from './StyledContent';
const MinusComponent = () => {
  const [data, getData] = useState(new Date());
  const [type, getType] = useState('EXPENSE');
  const [id, getId] = useState('c9d9e447-1b83-4238-8712-edc77b18b739');
  // const [category, getCategory] = useState('');
  const [comment, getComment] = useState('');
  const [amount, getAmount] = useState('');
  const getCategory = useSelector(getCat);

  // const neededCat = getCategory.find(cat => cat.type === 'INCOME');
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
    } else if (e.target.name === 'select') {
      const typeOfSelector = getCategory.find(
        obj => obj.name === e.target.value
      );
      getType(typeOfSelector.type);
      getId(typeOfSelector.id);
    }
  };

  console.log(type);

  const handleSubmit = evt => {
    evt.preventDefault();
    const operation = {
      transactionDate: data,
      type: type,
      categoryId: id,
      comment: comment,
      amount: -amount,
    };
    dispatch(createTransaction(operation));
  };
  return (
    <>
      <DivSetting className="SetingTransaction">
        <form>
          <Forms>
            <FormsInput placeholder="Select a category" />
            <FormsSelect id="category" onChange={handleChange} name="select">
              {getCategory.map(category => {
                return <Option key={category.id}>{category.name}</Option>;
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
        <BtnAdd onClick={handleSubmit}>ADD</BtnAdd>
        <BtnCancel>CANCEL</BtnCancel>
      </DivBtn>
    </>
  );
};
export default MinusComponent;
