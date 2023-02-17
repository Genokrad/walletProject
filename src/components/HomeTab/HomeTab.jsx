import { getAllTransactions } from 'redux/transactionsController/operations';

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
  const getSelect = useSelector(getAllTransactions());
  console.log('getSelect', getSelect);

  useEffect(() => {
    getSelect.then(item => console.log(item));
  }, [getSelect]);

  // const dispatch = useDispatch();
  // console.log('dispatch', dispatch);

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
          </TableBody>
        </tbody>
      </Table>
    </div>
  );
};
export default HomeTab;
