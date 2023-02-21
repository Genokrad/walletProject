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
// import { selectIsHideBalance } from 'redux/finance/finance-selectors';
export const HomePage = () => {
  const [sizeLayout, setSizeLayout] = useState(false);
  const ref = useRef();
  // const showBalance = useSelector(selectIsHideBalance);

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};
    if (clientWidth > 767) return setSizeLayout(true);
    setSizeLayout(false);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

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
