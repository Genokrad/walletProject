import { getAllTransactions } from 'redux/transactionsController/operations';
import { selectTransactions } from 'redux/transactionsController/selectors';
import { getCat } from 'redux/categories/categories-selectors';

import {
  Table,
  TopTable,
  TableBody,
  Data,
  Type,
  Category,
  Comment,
  Sum,
  Btn,
  Action,
  DataTd,
  TypeTd,
  CategoryTd,
  CommentTd,
  SumTd,
} from './HomeTabStyle';
import sprite from '../../iconsSprite/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { openModalAddTransaction } from 'redux/transactionsController/slice';
import { updateTransaction } from 'redux/transactionsController/operations';
import { deleteTransaction } from 'redux/transactionsController/operations';

const HomeTab = () => {
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

  const getTargetTransaction = (
    id,
    transactionDate,
    type,
    comment,
    amount,
    categoryId
  ) => {
    const transaction = {
      id: id,
      obj: {
        transactionDate: new Date(transactionDate).toISOString(),
        type: type,
        categoryId: categoryId,
        comment: comment,
        amount: amount,
      },
    };
    console.log('transaction', transaction);
    dispatch(updateTransaction(transaction));
  };

  const deleteTransactionFu = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <Table>
      <thead>
        <TopTable>
          <Data>Date</Data>
          <Type>Type</Type>
          <Category>Category</Category>
          <Comment>Comment</Comment>
          <Sum>Sum</Sum>
          <th> </th>
        </TopTable>
      </thead>
      <tbody>
        {console.log(resultRecords)}
        {resultRecords.map(
          ({
            transactionDate,
            amount,
            type,
            name,
            id,
            comment,
            categoryId,
          }) => (
            <TableBody key={id}>
              <DataTd>{reverseString(transactionDate)}</DataTd>
              <TypeTd>
                {(type === 'INCOME' && '+') || (type === 'EXPENSE' && '-')}
              </TypeTd>
              <CategoryTd>{name}</CategoryTd>
              <CommentTd>{comment}</CommentTd>

              {type === 'INCOME' ? (
                <SumTd style={{ color: 'var(--seaBlue-text-color)' }}>
                  {amount}
                </SumTd>
              ) : (
                <SumTd style={{ color: 'var(--bcg-red-color)' }}>
                  {amount}
                </SumTd>
              )}
              <Action>
                <svg
                  id={id}
                  onClick={() => dispatch(openModalAddTransaction())}
                  width="14"
                  height="14"
                >
                  <use
                    onClick={() =>
                      getTargetTransaction(
                        id,
                        transactionDate,
                        type,
                        comment,
                        amount,
                        categoryId
                      )
                    }
                    href={sprite + '#icon-edit-02'}
                    width="14"
                    height="14"
                  ></use>
                </svg>
              </Action>
              <Btn onClick={() => deleteTransactionFu(id)}>Delete</Btn>
            </TableBody>
          )
        )}
      </tbody>
    </Table>
  );
};
export default HomeTab;
