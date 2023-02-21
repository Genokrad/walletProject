import HomeTab from 'components/HomeTab/HomeTab';

import { Btn } from './HomeButtonStyled';
import sprite from '../../iconsSprite/icons.svg';

// import { useState } from "react";

import ModalAdd from 'components/ModalAdd/ModalAdd';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsModalAddTransactionOpen } from 'redux/transactionsController/selectors';
import {
  openModalAddTransaction,
  statusTransaction,
} from 'redux/transactionsController/slice';
import { useEffect, useRef, useState } from 'react';
import { getCategories } from 'redux/categories/categories-operations';
import { TransactionHistoryMobile } from 'components/TransactionHistoryMobile/TransactionHistoryMobile';
import { getSizeViewport } from 'redux/auth/auth-selectors';
// import { selectIsHideBalance } from 'redux/finance/finance-selectors';
export const HomePage = () => {
  const sizeLayout = useSelector(getSizeViewport);

  const modalAdd = useSelector(selectIsModalAddTransactionOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const openModalFu = () => {
    dispatch(openModalAddTransaction());
    dispatch(statusTransaction(false));
  };

  return (
    <>
      {sizeLayout && <HomeTab />}
      {!sizeLayout && <TransactionHistoryMobile />}
      <ModalAdd active={modalAdd} />
      <Btn onClick={() => openModalFu()} type="button">
        <svg width="20" height="20">
          <use href={sprite + '#iconplus'} width="20" height="20"></use>
        </svg>
      </Btn>
    </>
  );
};

// dispatch(statusTransaction(true));
