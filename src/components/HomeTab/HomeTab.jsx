import { getAllTransactions } from 'redux/transactionsController/operations';
import { selectTransactions } from 'redux/transactionsController/selectors';
import { getCat } from 'redux/categories/categories-selectors';
import { deleteTransaction } from 'redux/transactionsController/operations';

import {
  TBody,
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
  Svg,
} from './HomeTabStyle';
import sprite from '../../iconsSprite/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  addOneTransaction,
  openModalAddTransaction,
} from 'redux/transactionsController/slice';
// import { updateTransaction } from 'redux/transactionsController/operations';
// import { deleteTransaction } from 'redux/transactionsController/operations';
// import ModalAdd from 'components/ModalAdd/ModalAdd';
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const HomeTab = () => {
  // const modalAdd = useSelector(selectIsModalAddTransactionOpen);
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const arrayCategory = useSelector(getCat);

  // const targetRef = createRef ();
  // const targetElement = null;

  // useEffect(() => {
  //   targetElement = targetRef.current;
  //   console.log('targetElement>>>', targetElement)
  //   return () => clearAllBodyScrollLocks();
  // })

  // const showTargetElement = () => {
  //   disableBodyScroll(this.targetElement);
  // };

  // const hideTargetElement = () => {
  //   enableBodyScroll(targetElement);
  // };

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
    <>
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
      </Table>

      <TBody>
        <Table>
          <tbody>
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
                  <TableBody key={id}>
                    {/* {console.log('transactionDate', transactionDate)} */}
                    <DataTd>{reverseString(transactionDate)}</DataTd>
                    <TypeTd>
                      {/* new Date(oneTransaction.obj.transactionDate).toLocaleDateString() */}
                      {(type === 'INCOME' && '+') ||
                        (type === 'EXPENSE' && '-')}
                    </TypeTd>
                    <CategoryTd>{name}</CategoryTd>
                    <CommentTd>{comment}</CommentTd>

                    {type === 'INCOME' ? (
                      <SumTd style={{ color: 'var(--seaBlue-text-color)' }}>
                        {amount}
                      </SumTd>
                    ) : (
                      <SumTd style={{ color: 'var(--bcg-red-color)' }}>
                        {Math.abs(amount)}
                      </SumTd>
                    )}
                    <Action>
                      <Svg
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
                      </Svg>
                    </Action>
                    <Btn onClick={() => dispatch(deleteTransaction(id))}>
                      Delete
                    </Btn>
                  </TableBody>
                )
              )}
          </tbody>
        </Table>
      </TBody>
    </>
  );
};
export default HomeTab;
