import HomeTab from 'components/HomeTab/HomeTab';

import { Btn } from './HomeButtonStyled';
import sprite from '../../iconsSprite/icons.svg';

// import { useState } from "react";

import ModalAdd from 'components/ModalAdd/ModalAdd';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsModalAddTransactionOpen } from 'redux/transactionsController/selectors';
import { openModalAddTransaction } from 'redux/transactionsController/slice';
export const HomePage = () => {

 
  const modalAdd = useSelector(selectIsModalAddTransactionOpen)
  
  const dispatch = useDispatch();
 

  return (
    <>
      <HomeTab />

      <ModalAdd active={modalAdd}/>
      <Btn onClick={()=>dispatch(openModalAddTransaction())} type='button'>
        <svg width="20" height="20">
          <use href={sprite + '#iconplus'} width="20" height="20"></use>
        </svg>
      </Btn>


    </>
  );
};
