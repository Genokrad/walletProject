import { getAllTransactions } from 'redux/transactionsController/operations';
import { selectTransactions } from 'redux/transactionsController/selectors';

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

const HomeTab = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectTransactions);

  console.log('transactions', data);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <div>
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
          {data.map(
            ({
              transactionDate,
              balanceAfter,
              type,
              categoryId,
              comment,
              id,
            }) => (
              <>
                <TableBody>
                  <DataTd key={id}>{transactionDate}</DataTd>
                  <TypeTd>{type}</TypeTd>
                  <CategoryTd>{categoryId}</CategoryTd>
                  <CommentTd>{comment}</CommentTd>
                  <SumTd>{balanceAfter}</SumTd>
                  <Action>
                    <svg width="14" height="14">
                      <use
                        href={sprite + '#iconpencel'}
                        width="14"
                        height="14"
                      ></use>
                    </svg>
                    <Btn>Delete</Btn>
                  </Action>
                </TableBody>
              </>
            )
          )}

          {/* <TableBody>
            <DataTd>04.01.19</DataTd>
            <TypeTd>-</TypeTd>
            <CategoryTd>Ouher</CategoryTd>
            <CommentTd>Gift</CommentTd>
            <SumTd>300</SumTd>
            <Action>
              <svg width="14" height="14">
                <use href={sprite + '#iconpencel'} width="14" height="14"></use>
              </svg>
              <Btn>Delete</Btn>
            </Action>
          </TableBody>
          <TableBody>
            <DataTd>04.01.22</DataTd>
            <TypeTd>+</TypeTd>
            <CategoryTd>Gars</CategoryTd>
            <CommentTd>Fuel</CommentTd>
            <SumTd>1000</SumTd>
            <Action>
              <svg width="14" height="14">
                <use href={sprite + '#iconpencel'} width="14" height="14"></use>
              </svg>
              <Btn>Delete</Btn>
            </Action>
          </TableBody>
          <TableBody>
            <DataTd>04.01.19</DataTd>
            <TypeTd>-</TypeTd>
            <CategoryTd>Ouher</CategoryTd>
            <CommentTd>Gift</CommentTd>
            <SumTd>300</SumTd>
            <Action>
              <svg width="14" height="14">
                <use href={sprite + '#iconpencel'} width="14" height="14"></use>
              </svg>
              <Btn>Delete</Btn>
            </Action>
          </TableBody> */}
        </tbody>
      </Table>
    </div>
  );
};
export default HomeTab;
