import sprite from '../../iconsSprite/icons.svg';

// import { Item } from './Item/Item';

import { getAllTransactions } from 'redux/transactionsController/operations';
import { selectTransactions } from 'redux/transactionsController/selectors';
import { getCat } from 'redux/categories/categories-selectors';
import { deleteTransaction } from 'redux/transactionsController/operations';
import {
  Transactionlist,
  TransactionWraper,
  CategoryDescription,
  TransactionItem,
  OneRowDiv,
  Categorydata,
  Span,
  Button,
} from './TransactionHistoryMobile.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  addOneTransaction,
  openModalAddTransaction,
} from 'redux/transactionsController/slice';

export const TransactionHistoryMobile = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const arrayCategory = useSelector(getCat);

  const resultRecords = transactions?.reduce((acc, item) => {
    const category = arrayCategory?.find(
      record => record.id === item.categoryId
    );
    acc.push({ ...item, name: category?.name });
    return acc;
  }, []);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  function reverseString(str) {
    let splitString = str.split('-');
    let reverseArray = splitString.reverse();
    let finished =
      reverseArray[0] + '.' + reverseArray[1] + '.' + reverseArray[2].slice(2);

    return finished;
  }

  const updateFu = (id, transactionDate, type, comment, amount, categoryId) => {
    const transaction = {
      id: id,
      balanceAfter: null,
      showUpdateButton: false,
      obj: {
        transactionDate: new Date(transactionDate).toISOString(),
        type: type,
        categoryId: categoryId,
        comment: comment,
        amount: amount,
      },
    };

    dispatch(addOneTransaction(transaction));
    dispatch(openModalAddTransaction());
  };

  return (
    <TransactionWraper>
      <Transactionlist>
        {resultRecords
          .reverse()
          .map(
            ({
              transactionDate,
              amount,
              type,
              name,
              id,
              comment,
              categoryId,
            }) => (
              <TransactionItem
                key={id}
                style={
                  type === 'INCOME'
                    ? {
                        background:
                          'linear-gradient(90deg, var(--leisure) 2%, var(--bcg-white-color) 2%)',
                      }
                    : {
                        background:
                          'linear-gradient(90deg, var(--bcg-red-color) 2%, var(--bcg-white-color) 2%)',
                      }
                }
              >
                <OneRowDiv>
                  <CategoryDescription>Date</CategoryDescription>
                  <Categorydata>{reverseString(transactionDate)}</Categorydata>
                </OneRowDiv>
                <OneRowDiv>
                  <CategoryDescription>Type</CategoryDescription>
                  <Categorydata>
                    {(type === 'INCOME' && '+') || (type === 'EXPENSE' && '-')}
                  </Categorydata>
                </OneRowDiv>
                <OneRowDiv>
                  <CategoryDescription>Category</CategoryDescription>
                  <Categorydata>{name}</Categorydata>
                </OneRowDiv>
                <OneRowDiv>
                  <CategoryDescription>Comment</CategoryDescription>
                  <Categorydata>{comment}</Categorydata>
                </OneRowDiv>
                <OneRowDiv>
                  <CategoryDescription>Sum</CategoryDescription>
                  {type === 'INCOME' ? (
                    <Categorydata
                      style={{
                        color: 'var(--seaBlue-text-color)',
                        fontWeight: 700,
                      }}
                    >
                      {amount}
                    </Categorydata>
                  ) : (
                    <Categorydata
                      style={{ color: 'var(--bcg-red-color)', fontWeight: 700 }}
                    >
                      {Math.abs(amount)}
                    </Categorydata>
                  )}
                </OneRowDiv>
                <OneRowDiv>
                  <Button onClick={() => dispatch(deleteTransaction(id))}>
                    Delete
                  </Button>
                  <Categorydata>
                    <svg
                      id={id}
                      onClick={() =>
                        updateFu(
                          id,
                          transactionDate,
                          type,
                          comment,
                          amount,
                          categoryId
                        )
                      }
                      width="14"
                      height="14"
                    >
                      <use
                        href={sprite + '#icon-pencil-writing-creative'}
                        width="14"
                        height="14"
                      ></use>
                    </svg>
                    <Span>Edit</Span>
                  </Categorydata>
                </OneRowDiv>
              </TransactionItem>
            )
          )}
      </Transactionlist>
    </TransactionWraper>
  );
};

export default TransactionHistoryMobile;

// <Item
//   key={id}
//   transactionDate={transactionDate}
//   type={type}
//   name={name}
//   comment={comment}
//   amount={amount}
//   id={id}
//   categoryId={categoryId}
//   reverseStringFu={reverseString}
//   updateFu={updateFu}
// />
